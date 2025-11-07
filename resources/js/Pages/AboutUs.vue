<template>
  <FrontendLayout>
    <div class="catalog-wrapper">
      <div class="container">
        <h1 data-aos="fade-up" data-aos-delay="100">{{ t('about_workshop.title') }}</h1>

        <h2 data-aos="fade-up" data-aos-delay="300">{{ t('about_workshop.history.title') }}</h2>
        <div class="card text-card" data-aos="fade-up" data-aos-delay="500">
          {{ t('about_workshop.history.description') }}
        </div>

        <h2 data-aos="fade-up" data-aos-delay="100">{{ t('about_workshop.how_we_work.title') }}</h2>

        <div class="text-card-grid">
          <div class="item" data-aos="fade-up" data-aos-delay="300">
            <div class="text-card-title">
              {{ t('about_workshop.how_we_work.step1.title') }}
            </div>
            <div class="card text-card">
              {{ t('about_workshop.how_we_work.step1.description') }}
            </div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="500">
            <div class="text-card-title">
              {{ t('about_workshop.how_we_work.step2.title') }}
            </div>
            <div class="card text-card">
              {{ t('about_workshop.how_we_work.step2.description') }}
            </div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="700">
            <div class="text-card-title">
              {{ t('about_workshop.how_we_work.step3.title') }}
            </div>
            <div class="card text-card">
              {{ t('about_workshop.how_we_work.step3.description') }}
            </div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="900">
            <div class="text-card-title">
              {{ t('about_workshop.how_we_work.step4.title') }}
            </div>
            <div class="card text-card">
              {{ t('about_workshop.how_we_work.step4.description') }}
            </div>
          </div>
        </div>

        <h2 data-aos="fade-up" data-aos-delay="100">{{ t('about_workshop.why_choose_us.title') }}</h2>
        <div class="card text-card" data-aos="fade-up" data-aos-delay="300">
          {{ t('about_workshop.why_choose_us.description') }}
        </div>

        <h2 data-aos="fade-up" data-aos-delay="100">{{ t('about_workshop.individual_projects.title') }}</h2>
        <div class="card text-card" data-aos="fade-up" data-aos-delay="300">
          {{ t('about_workshop.individual_projects.description') }}
        </div>

        <div class="seats">
          <img src="$/images/seat22.png" alt="" data-aos="fade-up" data-aos-delay="100">
          <img src="$/images/seat11.png" alt="" data-aos="fade-up" data-aos-delay="300">
        </div>

        <div class="seats-desc" data-aos="fade-up" data-aos-delay="500">
          {{ t('about_workshop.individual_projects.examples') }}
        </div>
      </div>
    </div>
  </FrontendLayout>
</template>

<script setup>
import FrontendLayout from '@/Layouts/FrontendLayout.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<style lang="scss" scoped>
.seats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.seats-desc {
  font-size: 20px;
  text-align: center;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 32px;
  font-size: 32px;
}

.text-card-grid {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(2, 1fr);

  .item {
    display: flex;
    flex-direction: column;

    .text-card {
      flex: 1;
    }

    .text-card-title {
      font-size: 20px;
      margin-bottom: 24px;
      font-weight: 700;
    }
  }
}

.text-card {
  padding: 1.5rem;
  font-size: 20px;
}

@media screen and (max-width: $breakpoint-sm) {
  .catalog-wrapper {
    h1 {
      margin: 80px 0;
      font-size: 30px;
    }

    .container {
      padding: 0 24px;
    }
  }

  h2 {
    font-size: 1rem;
  }

  .text-card {
    padding: 8px 20px;
    font-size: 14px;

    &-title {
    }
  }

  .text-card-grid {
    grid-template-columns: 1fr;

    .item {
      .text-card-title {
        font-size: 14px;
        margin-bottom: .5rem;
      }
    }
  }

  .seats {
    img {
      width: 50%;
    }

    &-desc {
      font-size: 14px;
    }
  }
}
</style>