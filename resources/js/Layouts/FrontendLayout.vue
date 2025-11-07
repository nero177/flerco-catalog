<template>
  <html lang="en">
    <head>
      <Head />
    </head>
    <body class="body">
      <Navbar />
      <slot />
      <Footer />
      <NavbarMobile />
    </body>
  </html>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import NavbarMobile from '@/Components/NavbarMobile.vue';
</script>
