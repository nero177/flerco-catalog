<template>
    <nav class="navbar-links-mob">
        <Link href="/" :class="['nav-link', { active: $page.url === '/' }]">
        <img src="$/images/icons/main.svg" class="icon" alt="" />
        <div class="title">{{ $t('navbar.home') }}</div>
        </Link>
        <Link href="/catalog" :class="['nav-link', { active: $page.url.startsWith('/catalog') }]">
        <img src="$/images/icons/boatheader.svg" class="icon" alt="" />
        <div class="title">{{ $t('navbar.catalog') }}</div>
        </Link>
        <Link href="/checklist" :class="['nav-link', { active: $page.url.startsWith('/checklist') }]">
        <img src="$/images/icons/checklist.svg" class="icon" alt="" />
        <div class="title">{{ $t('navbar.checklist') }}</div>
        </Link>
        <Link href="/faq" :class="['nav-link', { active: $page.url.startsWith('/faq') }]">
        <img src="$/images/icons/faq.svg" class="icon" alt="" />
        <div class="title">{{ $t('navbar.help') }}</div>
        </Link>
        <Link href="/about-us" :class="['nav-link', { active: $page.url.startsWith('/about-us') }]">
        <img src="$/images/icons/about-us.svg" class="icon" alt="" />
        <div class="title">{{ $t('navbar.about_us') }}</div>
        </Link>
    </nav>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>
<style lang="scss" scoped>
.navbar-links-mob {
    position: fixed;
    bottom: 0;
    left: 0;
    display: none;
    width: 100%;
    justify-content: space-between;
    padding: 0 16px;
    background: #182955;
    z-index: 999;

    .nav-link {
        font-size: 12px;
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 8px;
        gap: 4px;

        &.active {
            padding-bottom: 0px;
            border-bottom: 6px solid #1E40AF;
            border-radius: 0 0 6px 6px;
        }

        &:nth-child(3) {
            transform: translateY(-10%);
            background: #182955;
            scale: 1.2;
            padding-top: 4px;
            border-radius: 6px;
            transform: translateY(-10%);
        }
    }
}

@media screen and (max-width: $breakpoint-sm) {
    .navbar-links-mob {
        display: flex;
    }
}
</style>
