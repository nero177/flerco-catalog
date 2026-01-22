<template>
  <div class="language-switcher">
    <!-- <img src="$/images/icons/globe.svg" alt="" /> -->
    <div class="language-switcher-active" @click="openLangSelection = !openLangSelection">
      <img :src="currentLanguage.icon" alt="">
    </div>
    <div class="language-list" v-show="openLangSelection">
      <template v-for="(language, index) in languages" :key="index">
        <div class="language" v-if="language.name !== currentLanguage.name" @click="switchLanguage(index)">
          <img :src="language.icon" alt="">
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const languages = [
  {
    name: 'ru',
    icon: '/images/icons/ru.svg'
  },
  {
    name: 'uk',
    icon: '/images/icons/uk.svg'
  },
  {
    name: 'en',
    icon: '/images/icons/en.svg'
  },
];

const currentLanguage = ref(
  languages.find(l => l.name === locale.value) || languages[0]
);

const openLangSelection = ref(false);

onMounted(() => {
  // Load saved language from localStorage
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale) {
    const foundLang = languages.find(lang => lang.name === savedLocale);
    if (foundLang) {
      currentLanguage.value = foundLang;
      locale.value = savedLocale;
    }
  } else {
    // Fallback to current locale if no saved preference
    const foundLang = languages.find(lang => lang.name === locale.value);
    if (foundLang) {
      currentLanguage.value = foundLang;
    }
  }
})

const switchLanguage = (langIndex) => {
  console.log(langIndex)
  currentLanguage.value = languages[langIndex];
  locale.value = currentLanguage.value.name;
  
  // Save selected language to localStorage
  localStorage.setItem('locale', currentLanguage.value.name);

  openLangSelection.value = false;
}
</script>
<style lang="scss" scoped>
.language-switcher-active {
  display: flex;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
}

.language-switcher {
  position: relative;
}

.language {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.language-list {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 100%;
  left: -3px;
  padding: 5px 3px 8px;
  border-radius: 10px;
  background-color: #182955;
}
</style>