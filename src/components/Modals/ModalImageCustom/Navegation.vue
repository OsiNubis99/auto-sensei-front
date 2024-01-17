


<template>
    <div class="twitter-navigation">
        <div class="twitter-navigation__wrapper">
            <div class="twitter-navigation__line-wrapper" ref="line" @mousedown="onStart" @touchstart="onStart">
                <div class="twitter-navigation__line">
                    <div class="twitter-navigation__fill" :style="{
                        flexGrow: zoom
                    }"></div>
                    <div class="twitter-navigation__circle" :class="{ 'twitter-navigation__circle--focus': focus }" :style="{
                        left: `${zoom * 100}%`
                    }">
                        <div class="twitter-navigation__inner-circle"
                            :class="{ 'twitter-navigation__inner-circle--focus': focus }"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    props: {
        zoom: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            focus: false
        };
    },
    mounted() {
        window.addEventListener("mouseup", this.onStop, { passive: false });
        window.addEventListener("mousemove", this.onDrag, { passive: false });
        window.addEventListener("touchmove", this.onDrag, { passive: false });
        window.addEventListener("touchend", this.onStop, { passive: false });
    },
    destroyed() {
        window.removeEventListener("mouseup", this.onStop);
        window.removeEventListener("mousemove", this.onDrag);
        window.removeEventListener("touchmove", this.onDrag);
        window.removeEventListener("touchend", this.onStop);
    },
    methods: {
        onDrag(e) {
            if (this.focus) {
                const position = e.touches ? e.touches[0].clientX : e.clientX;
                const line = this.$refs.line;

                if (line) {
                    const { left, width } = line.getBoundingClientRect();
                    this.$emit("change", Math.min(1, Math.max(0, position - left) / width));
                }
                if (e.preventDefault) {
                    e.preventDefault();
                }
            }
        },
        onStop() {
            this.focus = false;
        },
        onStart(e) {
            this.focus = true;
            this.onDrag(e);
        }
    }
};
</script>
<style lang="scss">
.twitter-navigation {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 50px;

    &__wrapper {
        display: flex;
        align-items: center;
        max-width: 400px;
        width: 100%;
    }

    &__zoom-icon {
        height: 18.75px;
        width: 18.75px;
        fill: rgb(101, 119, 134);
        flex-shrink: 0;

        &--left {
            margin-right: 10px;
        }

        &--right {
            margin-left: 10px;
        }
    }

    &__line-wrapper {
        width: 100%;
        height: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border-radius: 5px;
        cursor: pointer;
    }

    &__line {
        background: #F0F0F0;
        height: 10px;
        width: 100%;
        border-radius: 5px;
        display: flex;
        position: relative;
        align-items: center;
        border: 1px solid #E0E0E0;
    }

    &__fill {
        background: #1A1A1A;
        align-self: stretch;
        flex-basis: auto;
        flex-direction: column;
        flex-shrink: 0;
    }

    &__circle {
        width: 30px;
        height: 30px;
        margin-left: -15px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        transition-duration: 0.2s;
        transition-property: background-color, box-shadow;
        background-color: transparent;

        &:hover {
            background-color: rgba(29, 161, 242, 0.1);
        }

        &--focus {
            background-color: rgba(29, 161, 242, 0.2);
        }
    }

    &__inner-circle {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid #1A1A1A;
        background-color: rgb(255, 255, 255);
        transform: scale(1);
        transition-duration: 0.1s;
        transition-property: transform;
        box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 7px,
            rgba(101, 119, 134, 0.15) 0px 1px 3px 1px;

        &--focus {
            transform: scale(1.2);
        }
    }
}
</style>
