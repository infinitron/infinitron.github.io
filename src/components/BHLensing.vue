<template>
    <div id="bh_canvas"></div>
</template>


<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import fragmentShader from '!raw-loader!../assets/fragmentShader.glsl'
import vertexShader from '!raw-loader!../assets/vertexShader.glsl'
import { Observer } from '../assets/js/Observer.js'


// var camera;
export default {
    name: 'BHLensing',
    data: () => ({
        scene: null,
        camera: null,
        renderer: null,
        mesh: null,
        cameraControls: null,
        textures: [],
        observer: null,
        shader: {
            needsUpdate: true
        }
    }),
    methods: {
        init: function () {
            this.scene = new THREE.Scene();

            this.geometry = new THREE.PlaneBufferGeometry(2, 2);

            this.texLoader = new THREE.TextureLoader();

            var that = this;
            function loadTexture(symbol, filename, interpolation) {
                that.textures[symbol] = null;
                that.texLoader.load(filename, function (tex) {
                    tex.magFilter = interpolation;
                    tex.minFilter = interpolation;
                    that.textures[symbol] = tex;
                    tex.offset = new THREE.Vector2(0.5, 0.5);
                    tex.needsUpdate = true;
                    tex.flipY = true;
                    that.init2();
                });
            }

            loadTexture('galaxy', require('../assets/skybox6.jpg'), THREE.LinearFilter);
            loadTexture('spectra', require('../assets/spectra.png'), THREE.LinearFilter);
            loadTexture('stars', require('../assets/stars.png'), THREE.LinearFilter);

        },
        init2: function () {
            for (var key in this.textures) if (this.textures[key] === null) return;
            var container = document.getElementById('bh_canvas');
            this.uniforms = {
                star_texture: { type: "t", value: this.textures.stars },
                galaxy_texture: { type: "t", value: this.textures.galaxy },
                spectrum_texture: { type: "t", value: this.textures.spectra },
                time: { type: "f", value: 0 },
                resolution: { type: "v2", value: new THREE.Vector2() },
                cam_pos: { type: "v3", value: new THREE.Vector3() },
                cam_x: { type: "v3", value: new THREE.Vector3() },
                cam_y: { type: "v3", value: new THREE.Vector3() },
                cam_z: { type: "v3", value: new THREE.Vector3() },
                cam_vel: { type: "v3", value: new THREE.Vector3() },
            }

            var material = new THREE.ShaderMaterial({
                uniforms: this.uniforms,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
            });

            material.needsUpdate = true;
            this.shader.needsUpdate = true;

            var mesh = new THREE.Mesh(this.geometry, material);
            this.scene.add(mesh);

            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(this.renderer.domElement);

            this.camera = new THREE.PerspectiveCamera(45, container.parentElement.clientHeight / container.parentElement.clientWidth, 1, 80000);
            this.camera.position.set(500, 0, 0)

            this.cameraControls = new OrbitControls(this.camera, this.renderer.domElement);
            this.cameraControls.target.set(0, 0, 0);
            this.cameraControls.autoRotate = true;
            this.cameraControls.autoRotateSpeed = 0.07;

            this.observer = new Observer();
            this.observer.distance = 30;

            this.cameraControls.addEventListener('change', this.updateCamera);
            this.updateCamera();



            this.lastCameraMat = new THREE.Matrix4().identity();

            this.getFrameDuration = (function () {
                var lastTimestamp = new Date().getTime();
                return function () {
                    var timestamp = new Date().getTime();
                    var diff = (timestamp - lastTimestamp) / 1000.0;
                    lastTimestamp = timestamp;
                    return diff;
                };
            })();

            this.onWindowResize();

            window.addEventListener('resize', this.onWindowResize, false);
            this.animate()
        },
        updateCamera: function () {

            var m = this.camera.matrixWorldInverse.elements;
            var camera_matrix = this.observer.orientation;

            camera_matrix.set(
                // row-major, not the same as .elements (nice)
                // y and z swapped for a nicer coordinate system
                m[0], m[1], m[2],
                m[8], m[9], m[10],
                m[4], m[5], m[6]
            );
            var p = new THREE.Vector3(
                camera_matrix.elements[6],
                camera_matrix.elements[7],
                camera_matrix.elements[8]);

            var dist = this.observer.distance;
            this.observer.position.set(-p.x * dist, -p.y * dist, -p.z * dist);
            this.observer.velocity.set(0, 0, 0);
        },
        frobeniusDistance: function (matrix1, matrix2) {
            var sum = 0.0;
            for (var i in matrix1.elements) {
                var diff = matrix1.elements[i] - matrix2.elements[i];
                sum += diff * diff;
            }
            return Math.sqrt(sum);
        },

        animate: function () {
            requestAnimationFrame(this.animate);
            //requestAnimationFrame((function(t){return function(){animate(t)}})(textures));

            this.camera.updateMatrixWorld();
            //console.log(this.camera);
            this.camera.matrixWorldInverse = this.camera.matrixWorld.clone().invert();//.invert();

            if (this.shader.needsUpdate || this.frobeniusDistance(this.camera.matrixWorldInverse, this.lastCameraMat) > 1e-10) {

                this.shader.needsUpdate = false;
                this.render();
                this.lastCameraMat = this.camera.matrixWorldInverse.clone();
            }
            this.cameraControls.update();

        },

        render: function () {
            this.observer.move(this.getFrameDuration());
            this.updateUniforms();
            this.renderer.render(this.scene, this.camera);
        },
        updateUniforms: function () {


            this.uniforms.resolution.value.x = this.renderer.domElement.width;
            this.uniforms.resolution.value.y = this.renderer.domElement.height;

            this.uniforms.time.value = this.observer.time;
            this.uniforms.cam_pos.value = this.observer.position;

            var e = this.observer.orientation.elements;

            this.uniforms.cam_x.value.set(e[0], e[1], e[2]);
            this.uniforms.cam_y.value.set(e[3], e[4], e[5]);
            this.uniforms.cam_z.value.set(e[6], e[7], e[8]);
            var that = this
            function setVec(target, value) {
                that.uniforms[target].value.set(value.x, value.y, value.z);
            }

            setVec('cam_pos', this.observer.position);
            setVec('cam_vel', this.observer.velocity);
        },
        onWindowResize: function () {
            var container = document.getElementById('bh_canvas')
            this.renderer.setSize(container.parentElement.clientWidth, container.parentElement.clientHeight);
            this.updateUniforms();
        }
    },
    mounted: function () {
        this.init();
        //this.animate();
    }
}
</script>
