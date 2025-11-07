<template>
  <FrontendLayout>
    <div class="wrapper">
      <div class="bg-wrapper">
        <div class="gradient">
          <div class="side"></div>
          <div class="side"></div>
        </div>
      </div>

      <h1 data-aos="fade-up" data-aos-delay="100">{{ $t('faq.title') }}</h1>
      <div class="questions">
        <div v-for="(question, index) in questions" :key="index" class="question"
          :class="{ 'active': question.isOpen }" :data-aos="question.disableAnimations ? null : 'fade-up'" :data-aos-delay="question.aosDelay">
          <div class="question-title" @click="toggleQuestion(index)">
            <span>{{ question.title }}</span>
            <div class="question-icon">
              <svg :class="{ 'rotated': question.isOpen }" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="question-body" :class="{ 'open': question.isOpen }">
            <div class="question-content">
              {{ question.body }}
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-part">
        <div class="text-bottom">{{ $t('faq.not_found') }}</div>
        <Button outline>{{ $t('faq.contact_us') }}</Button>
      </div>
    </div>
  </FrontendLayout>
</template>
<script setup>
import { ref } from 'vue';
import FrontendLayout from '@/Layouts/FrontendLayout.vue';
import Button from '@/Components/Common/Buttons/Button.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const questions = ref([
  { title: t('faq.q1.title'), body: t('faq.q1.body'), isOpen: false, aosDelay: 100 },
  { title: t('faq.q2.title'), body: t('faq.q2.body'), isOpen: false, aosDelay: 200 },
  { title: t('faq.q3.title'), body: t('faq.q3.body'), isOpen: false, aosDelay: 300 },
  { title: t('faq.q4.title'), body: t('faq.q4.body'), isOpen: false, aosDelay: 400 },
  { title: t('faq.q5.title'), body: t('faq.q5.body'), isOpen: false, aosDelay: 500 },
  { title: t('faq.q6.title'), body: t('faq.q6.body'), isOpen: false, aosDelay: 600 },
  { title: t('faq.q7.title'), body: t('faq.q7.body'), isOpen: false, aosDelay: 700 }
]);


const toggleQuestion = (index) => {
  questions.value[index].isOpen = !questions.value[index].isOpen;
  questions.value[index].disableAnimations = true;
};
</script>
<style lang="scss" scoped>
.bottom-part {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text-bottom {
    font-size: 20px;
    font-weight: bold;
    color: #CFCFCF;
    margin-bottom: 24px;
  }
}

.bg-wrapper {
  position: absolute;
  height: 2080px;
  width: 100%;
  overflow: hidden;
  transform: translateY(-10%);
}

.wrapper {
  width: 100%;
  position: relative;
  padding-bottom: 228px;
}

.gradient {
  display: flex;
  height: 4000px;
  position: absolute;
  width: 100%;
  z-index: 0;
  transform: translateY(-38%);

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

  @media screen and (max-width: $breakpoint-sm) {
    .side {
      &:nth-child(1) {
        background: conic-gradient(from -90deg at 87% 50%, #161145 0deg, #1D6A81 270deg, #23C4BE 360deg);
      }

      &:nth-child(2) {
        background: conic-gradient(from -90deg at 87% 50%, #161145 0deg, #1D6A81 270deg, #23C4BE 360deg);
      }
    }
  }
}

.gradient-bottom {
  transform: rotate(180deg) translateY(-100%);
  height: 50%;
}

.questions {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto 212px;
}

.question {
  background-color: #182955;
  padding: .5rem;
  border-radius: .5rem;
  min-height: 64px;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background-color: #1e3a5f;
  }

  &-title {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: color 0.3s ease;

    &:hover {
      color: #23C4BE;
    }
  }

  &-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;
    color: #23C4BE;

    svg {
      transition: transform 0.3s ease;

      &.rotated {
        transform: rotate(180deg);
      }
    }
  }

  &-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.3s ease;

    &.open {
      max-height: 500px;
      margin-top: 5px;
    }
  }

  &-content {
    line-height: 1.6;
    color: #e0e0e0;
    white-space: pre-line;
  }
}

h1 {
  position: relative;
  text-align: center;
  padding-top: 80px;
  margin-bottom: 200px;
}

@media screen and (max-width: $breakpoint-sm) {
  h1 {
    font-size: 24px;
    margin-bottom: 160px;
  }

  .bg-wrapper {
    height: 1827px;
    transform: translateY(-13%);
  }

  .wrapper {
    padding-bottom: 40px;
  }

  .questions {
    padding: 1.5rem;
    margin: 0 auto 64px;

    .question {
      padding: 6px 16px;

      &-title {
        font-size: 14px;
      }

      &-body {
        font-size: 12px;
      }
    }
  }

  .bottom-part {
    .text-bottom {
      font-size: 14px;
      margin-bottom: 1rem;
    }
  }
}
</style>