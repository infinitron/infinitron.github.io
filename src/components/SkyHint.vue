<template>
    <transition name="sky-hint">
        <div v-if="visible" class="sky-hint" :style="{ left: $vuetify.application.left + 'px' }" role="status">
            <span class="sky-hint__pill">
                <v-icon small dark class="sky-hint__icon">mdi-gesture-swipe-horizontal</v-icon>
                {{ touch ? 'Drag to look around the sky' : 'Click and drag to look around the sky' }}
            </span>
        </div>
    </transition>
</template>

<script>
// A subtle, one-time nudge that the lensed sky is interactive. It only appears on pages where the sky is
// unobstructed, fades in after a short delay, and is dismissed for good (per browser) once the visitor drags it.
const STORAGE_KEY = 'sky-hint-dismissed'
const SKY_ROUTES = ['Intro', 'JustLensing']

const storage = {
    get() {
        try { return window.localStorage.getItem(STORAGE_KEY) === '1' } catch (e) { return false }
    },
    set() {
        try { window.localStorage.setItem(STORAGE_KEY, '1') } catch (e) { /* storage unavailable, hint just returns next visit */ }
    }
}

export default {
    name: 'SkyHint',
    data: () => ({
        dismissed: storage.get(),
        ready: false,
        touch: window.matchMedia ? window.matchMedia('(pointer: coarse)').matches : false
    }),
    computed: {
        visible() {
            return this.ready && !this.dismissed && SKY_ROUTES.includes(this.$route.name)
        }
    },
    methods: {
        onPointerDown(e) {
            // only a drag on the sky canvas counts, not clicks on the sidebar or cards
            if (e.target && e.target.tagName === 'CANVAS') this.dismiss()
        },
        dismiss() {
            this.dismissed = true
            storage.set()
        }
    },
    mounted() {
        window.addEventListener('pointerdown', this.onPointerDown)
        this.timer = setTimeout(() => { this.ready = true }, 2500)
        // fade away on its own after a while so it never lingers, but come back next visit
        this.hideTimer = setTimeout(() => { this.ready = false }, 14000)
    },
    beforeDestroy() {
        window.removeEventListener('pointerdown', this.onPointerDown)
        clearTimeout(this.timer)
        clearTimeout(this.hideTimer)
    }
}
</script>

<style>
.sky-hint {
    position: fixed;
    right: 0;
    bottom: 112px; /* above the footer and the mountain line */
    display: flex;
    justify-content: center;
    pointer-events: none; /* never blocks dragging */
    z-index: 3;
}

.sky-hint__pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(4px);
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.85rem;
    letter-spacing: 0.02em;
}

.sky-hint__icon {
    animation: sky-hint-nudge 2.4s ease-in-out infinite;
}

@keyframes sky-hint-nudge {
    0%, 100% { transform: translateX(-4px); }
    50% { transform: translateX(4px); }
}

.sky-hint-enter-active,
.sky-hint-leave-active {
    transition: opacity 0.8s ease;
}

.sky-hint-enter,
.sky-hint-leave-to {
    opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
    .sky-hint__icon {
        animation: none;
    }
}
</style>
