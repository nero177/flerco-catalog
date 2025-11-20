<template>
  <FrontendLayout>
    <div class="gradient-sides-container">
      <BannerSection />
      <Stats />
      <WhyUs />
    </div>

    <OurProducts />
    <ContactUs />
  </FrontendLayout>
</template>

<script setup>
import FrontendLayout from '@/Layouts/FrontendLayout.vue';
import BannerSection from '@/Components/Home/BannerSection.vue';
import Stats from '@/Components/Home/Stats.vue';
import WhyUs from '@/Components/Home/WhyUs.vue';
import OurProducts from '@/Components/Home/OurProducts.vue';
import ContactUs from '@/Components/Home/ContactUs.vue';
</script>

<style lang="scss">
.gradient-sides-container {
    // position: relative;
    background: linear-gradient(180deg, #161145, #1D6A81);
    overflow: hidden;
}

.gradient-sides {
    display: flex;
    height: 3500px;
    position: absolute;
    top: -405%;
    left: 0;
    width: 100%;
    z-index: 0;

    .side {
        width: 50%;

        &:nth-child(1) {
            background: conic-gradient(from -90deg,
                    #161145 0deg,
                    #1D6A81 270deg,
                    #23C4BE 360deg);

            transform: scale(-1, 1);
            margin-left: -1px;
        }

        &:nth-child(2) {
            background: conic-gradient(from -90deg,
                    #161145 0deg,
                    #1D6A81 270deg,
                    #23C4BE 360deg);
        }
    }
}

@media screen and (max-width: 396px) {
    .gradient-sides {
        top: -385% !important;
    }
}

@media screen and (max-width: $breakpoint-sm) {
    .gradient-sides {
        top: -410%;

        .side {
            &:nth-child(1) {
                transform: scale(-1.7, 1) translateX(20%);
            }

            &:nth-child(2) {
                transform: scale(1.7, 1) translateX(20%);
            }
        }
    }
}

</style>
