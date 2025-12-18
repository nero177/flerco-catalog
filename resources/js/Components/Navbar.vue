<template>
  <div class="navbar" :class="{ 'navbar-fixed': isScrolled }">
    <div class="logo">
      <img src="$/images/logo.png" alt="" />
      <div class="logo-text">Fler&Co</div>
    </div>

    <nav class="navbar-links">
      <Link href="/" :class="['nav-link', { active: $page.url === '/' }]">
      <img src="$/images/icons/main.svg" class="icon" alt="" />
      <div class="title">{{ $t('navbar.home') }}</div>
      </Link>
      <Link href="/catalog" :class="['nav-link', { active: $page.url.startsWith('/catalog') }]">
      <img src="$/images/icons/boatheader.svg" class="icon" alt="" />
      <div class="title">{{ $t('navbar.catalog') }}</div>
      </Link>
      <Link href="/about-us" :class="['nav-link', { active: $page.url.startsWith('/about-us') }]">
      <img src="$/images/icons/about-us.svg" class="icon" alt="" />
      <div class="title">{{ $t('navbar.about_us') }}</div>
      </Link>
      <Link href="/faq" :class="['nav-link', { active: $page.url.startsWith('/faq') }]">
      <img src="$/images/icons/faq.svg" class="icon" alt="" />
      <div class="title">{{ $t('navbar.help') }}</div>
      </Link>
    </nav>
    <div class="navbar-buttons">
      <a href="/checklist" class="navbar-button checklist-btn" :class="{active: $page.url.startsWith('/checklist')}">
        <img src="$/images/icons/checklist.svg" alt="" />
        <div class="plus-message" style="display: none;">+1</div>
      </a>
      <LanguageSwitcher class="navbar-button"/>
    </div>

    <div class="navbar-message" style="display: none;"></div>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { ref, onMounted, onUnmounted } from 'vue';
import LanguageSwitcher from '@/Components/LanguageSwitcher.vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $primary-color;
  color: #fff;
  box-shadow: 0px 4px 16px 0 rgba(0, 0, 0, .25);
  position: relative;
  z-index: 9;
  padding: 4px 30px;
  transition: all 0.3s ease;

  &.navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0px 4px 20px 0 rgba(0, 0, 0, .35);
    backdrop-filter: blur(10px);
    background: rgba($primary-color, 0.95);
  }

  &-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 99;
  }

  @media screen and (max-width: $breakpoint-sm) {
    padding: 4px 8px;

    .logo {
      gap: 9px;

      img {
        width: 30px;
        height: 30px;
      }
    }

    .logo-text {
      font-size: 1rem;
    }

    .navbar-links {
      display: none;
    }

    .navbar-buttons {
      img {
        width: 24px;
        height: 24px;
      }
    }

    .checklist-btn {
      display: none;
    }
  }
}

.navbar-message {
  position: absolute;
  background-color: #182955;
  border-radius: 0 0 10px 10px;
  padding: 10px 80px 14px;
  z-index: 0;
  left: 50%;
  transform: translate(-50%); 
  top: 100%;
}

.checklist-btn {
  &.active {
    padding: 8px 0 8px 14px;
    border-radius: 8px;
    border-left: 8px solid #1E40AF;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  gap: .5rem;
  color: #fff;
  text-decoration: none;
  padding: 14px;
  border-radius: 8px;
  transition: .5s all;

  &.active {
    border-left: 8px solid #1E40AF;
  }

  &:hover {
    background-color: #1E40AF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, .25);
  }

  img {
    width: 24px;
    height: 22px;
  }
}

.navbar-buttons {
  display: flex;
  align-items: center;
  gap: 20px;
}

.navbar-button {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 1.5rem;

  img {
    width: 48px;
    height: 48px;
  }
}

.plus-message {
  position: absolute;
  background-color: #182955;
  border-radius: 0 0 10px 10px;
  padding: 10px;
  z-index: 0;
  right: 0%;
  transform: translate(-50%); 
  top: 100%;
  color: #fff;
}
</style>
