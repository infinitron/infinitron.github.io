import * as THREE from 'three'

export function Observer() {
    this.position = new THREE.Vector3(10, 0, 0);
    this.velocity = new THREE.Vector3(0,1,0);
    this.time = 0.0;
    this.orientation = new THREE.Matrix3();
}

Observer.prototype.move = function (dt) {
    var r;
    var v = 0;
    r = this.position.length();
    dt = Math.sqrt((dt * dt * (1.0 - v * v)) / (1 - 1.0 / r)); //gravitaional time dilation
    this.time += dt;
};
