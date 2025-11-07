<template>
    <a :href="href" v-if="href" class="btn" :class="{'btn-primary': primary, 'btn-outline': outline}">
        <slot />
    </a>
    <div class="btn" v-else :class="{'btn-primary': primary, 'btn-outline': outline}">
        <slot />
    </div>
</template>
<script setup>
    defineProps({
    primary: {
        type: Boolean,
    },
    outline: {
        type: Boolean,
    },
    href: {
        type: String,
    }
});

</script>
<style lang="scss">
@use 'sass:color';

.btn {
    padding: 18px 24px;
    font-size: 20px;
    border-radius: 12px;
    text-align: center;
    transition: .5s all;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &-primary {
        background-color: $primary-light;

        &:hover {
            background-color: #262f99;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, .25);
        }
    }

    &-outline {
        border: 2px solid #fff;

        &:hover {
            background-color: #fff;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, .25);
            color: #000;
        }
    }

    @media screen and (max-width: $breakpoint-sm) {
        font-size: 12px;
        padding: 12px;
    }
}
</style>
