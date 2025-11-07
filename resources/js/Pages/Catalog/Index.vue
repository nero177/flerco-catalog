<template>
  <FrontendLayout>
    <div class="catalog-wrapper">
      <h1>{{ $t('catalog.title') }}</h1>
      <div class="selected-product-mob" v-if="isMobile && catalogStore?.product?.id && !showAllProducts">
        <div class="arrow-back" @click="catalogStore.setProduct(null)">
          <svg width="48" height="33" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 14.7L18 0V9H24C48 9 48 33 48 33C48 33 45 21 24.6 21H18V29.7L0 14.7Z" fill="#CFCFCF" />
          </svg>
        </div>
        <div class="selected-product-nav">
          <div class="arrow-prev" @click="navigateToPrev">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 39.5L30 15V30H40C80 30 80 70 80 70C80 70 75 50 41 50H30V64.5L0 39.5Z" fill="#182955" />
            </svg>
          </div>
          <div class="product-card">
            <div class="product-card-content">
              <img :src="'/storage/' + catalogStore.product.thumbnail" alt="" class="product-card-image" />
              <div class="product-card-title">{{ localized(catalogStore.product.title) }}</div>
            </div>
          </div>
          <div class="arrow-next" @click="navigateToNext">
            <svg width="80" height="55" viewBox="0 0 80 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 24.5L50 0V15H40C0 15 0 55 0 55C0 55 5 35 39 35H50V49.5L80 24.5Z" fill="#182955" />
            </svg>
          </div>
        </div>
      </div>
      <div class="selected-product-mob all-products-mob" v-if="isMobile && showAllProducts">
        <div class="arrow-back" @click="() => showAllProducts = false">
          <svg width="48" height="33" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 14.7L18 0V9H24C48 9 48 33 48 33C48 33 45 21 24.6 21H18V29.7L0 14.7Z" fill="#CFCFCF" />
          </svg>
        </div>
        <div class="selected-product-nav">
          <div class="arrow-prev" @click="navigateToPrev">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 39.5L30 15V30H40C80 30 80 70 80 70C80 70 75 50 41 50H30V64.5L0 39.5Z" fill="#182955" />
            </svg>
          </div>
          <div class="product-card">
            <div class="product-card-content">
              <img src="$/images/catalog-all.png" alt="" class="product-card-image" />
              <div class="product-card-title">{{ $t('catalog.all_products_title') }}</div>
            </div>
          </div>
          <div class="arrow-next" @click="navigateToNext">
            <svg width="80" height="55" viewBox="0 0 80 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 24.5L50 0V15H40C0 15 0 55 0 55C0 55 5 35 39 35H50V49.5L80 24.5Z" fill="#182955" />
            </svg>
          </div>
        </div>
      </div>

      <div class="product-cards container"
        :class="{ 'd-none': isMobile && (catalogStore?.product?.id || showAllProducts) }">
        <div class="product-card" v-for="product in products" :key="product.id"
          :class="{ active: catalogStore?.product?.id === product.id }" @click="switchCard(product)">
          <div class="product-card-content">
            <img :src="'/storage/' + product.thumbnail" alt="" class="product-card-image" />
            <div class="product-card-title">{{ localized(product.title) }}</div>
          </div>
        </div>
        <div class="product-card catalog-all" :class="{ active: showAllProducts }" @click="showAll">
          <div class="product-card-content">
            <img src="$/images/catalog-all.png" alt="Fler & Co - каталог" class="product-card-image" />
            <div class="product-card-title">{{ $t('catalog.all_products_title') }}</div>
          </div>
        </div>
      </div>
      <div class="progress-bar">
        <div class="line" v-for="product in products" :key="product.id"
          :class="{ active: product.id === catalogStore?.product?.id && !showAllProducts }">
        </div>
        <div class="line" :class="{ active: showAllProducts }"></div>
      </div>
      <div class="container" v-if="catalogStore.product && !showAllProducts">
        <Product :key="catalogStore.product"/>
      </div>
      <div class="container" v-if="showAllProducts">
        <div class="all-products">
          <div class="catalog-product-card" :class="{ active: catalogStore?.product?.id === product.id }"
            v-for="(product, index) in fullCatalogProducts" :key="product.id" @click="selectProductFromAll(product)">
            <div class="product-card-content">
              <img :src="'/storage/' + product.thumbnail" alt="" class="product-card-image" />
              <div class="product-card-title">{{ localized(product.title) }}</div>
              <ProductFilters />
            </div>
          </div>
        </div>
        <div class="row color-picker-row" v-if="catalogStore.product && showAllProducts">
          <div class="col">
            <ProductColorPicker />
          </div>
        </div>
        <div class="row wishes-card" v-if="catalogStore.product && showAllProducts">
          <div class="col">
            <div class="wishes input-group">
              <textarea name="" id="" v-model="wishesText" :placeholder="$t('catalog.wishes_placeholder')"></textarea>
            </div>
          </div>
        </div>
        <div class="row" style="display: flex; justify-content: center;" v-if="catalogStore.product && showAllProducts">
          <Button outline class="add-to-cart" @click="addToCart">{{ $t('catalog.add_to_cart') }}</Button>
        </div>
      </div>
    </div>
  </FrontendLayout>
</template>

<script setup>
import FrontendLayout from '@/Layouts/FrontendLayout.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue'
import ProductFilters from '@/Components/ProductFilters.vue';
import Product from '@/Components/Catalog/Product.vue';
import { useCatalogStore } from '@/stores/catalog';
import { useChecklistStore } from '@/stores/checklist';
import ProductColorPicker from '@/Components/Catalog/ProductColorPicker.vue';
import Button from '@/Components/Common/Buttons/Button.vue';
import { localized } from '@/helpers';

const catalogStore = useCatalogStore();
const checklistStore = useChecklistStore();
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024);
const isMobile = computed(() => windowWidth.value < 500);
const wishesText = ref('');

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
}

const products = ref([])
const fullCatalogProducts = ref([]);
const showAllProducts = ref(false);

const props = defineProps({
  initialProducts: Array,
  initialFullCatalogProducts: Array,
})

onMounted(() => {
  products.value = props.initialProducts;
  fullCatalogProducts.value = props.initialFullCatalogProducts;

  updateWindowWidth();
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowWidth);
  }
  if (!isMobile.value) {
    catalogStore.setProduct(products.value[0]);
  } else {
    catalogStore.setProduct(null);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowWidth);
  }
});

const switchCard = (product) => {
  catalogStore.setProduct(product)
  showAllProducts.value = false;
}

const selectProductFromAll = (product) => {
  if (!catalogStore.product || catalogStore.product?.id !== product.id) { 
    catalogStore.setProduct(product)
  }
}

const showAll = () => {
  showAllProducts.value = true;
  catalogStore.setProduct(null)
}

const addToCart = () => {
  catalogStore.productOptions.wishes = wishesText.value;
  console.log('catalogStore.productOptions', catalogStore.productOptions);

  checklistStore.addProduct()
}

const navigateToPrev = () => {
  if (showAllProducts.value) {
    catalogStore.setProduct(products.value[products.value.length - 1]);
    showAllProducts.value = false;
    return;
  }

  if (!catalogStore.product) return;

  const currentIndex = products.value.findIndex(p => p.id === catalogStore.product.id);

  if (currentIndex === 0) {
    showAllProducts.value = true;
    catalogStore.setProduct(null);
  } else {
    const prevIndex = currentIndex - 1;
    catalogStore.setProduct(products.value[prevIndex]);
  }
}

const navigateToNext = () => {
  if (showAllProducts.value) {
    catalogStore.setProduct(products.value[0]);
    showAllProducts.value = false;
    return;
  }

  if (!catalogStore.product) return;

  const currentIndex = products.value.findIndex(p => p.id === catalogStore.product.id);
 
  if (currentIndex === products.value.length - 1) {
    showAllProducts.value = true;
    catalogStore.setProduct(null);
  } else {
    const nextIndex = currentIndex + 1;
    catalogStore.setProduct(products.value[nextIndex]);
  }
}

</script>
<style lang="scss">
@use 'sass:color';

.selected-product-mob {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .arrow-back {
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .selected-product-nav {
    display: flex;
    align-items: center;
    gap: 12px;

    .arrow-prev,
    .arrow-next {
      cursor: pointer;
      transition: transform 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .product-card {
    max-width: 168px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;

    &::before {
      opacity: 1;
      padding: 5px 2px 5px 2px;
      left: -2px;
      top: -2px;
    }

    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
  }
}

.wishes-card {
  margin-top: 32px;
  margin-bottom: 38px;

  @media screen and (max-width: $breakpoint-sm) {
    margin: 24px;
  }
}

.all-products {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 32px;

  .catalog-product-card {
    border-radius: 12px;

    &.active {
      outline: 3px solid #fff;
    }

    .product-card-content {
      img {
        max-width: 190px;
        max-height: 224px;
      }
    }

    .product-card-title {
      text-align: center;
    }
  }

  @media screen and (max-width: $breakpoint-sm) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px 24px 0;
  }
}

.catalog-wrapper {
  background: linear-gradient(180deg, #182955 0%, #1F7D8F 50%, #182955 100%);
  min-height: 1500px;

  h1 {
    text-align: center;
    padding-top: 88px;
    padding-bottom: 68px;
  }


  @media screen and (max-width: $breakpoint-sm) {
    min-height: 0;

    h1 {
      padding: 80px 0 16px;
      font-size: 24px;
    }
  }
}

.product-cards {
  width: 100%;
  gap: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: $breakpoint-sm) {
    gap: 24px;
    padding: 0 24px;
    grid-template-columns: repeat(2, 1fr);
  }
}

.progress-bar {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 80px;
  gap: 12px;

  .line {
    width: 56px;
    height: 8px;
    border-radius: 4px;
    background-color: $primary-color;
    transition: .5s all;

    &.active {
      background-color: #fff;
    }
  }

  @media screen and (max-width: $breakpoint-sm) {
    gap: 6px;
    margin-top: 12px;

    .line {
      width: 32px;
      height: 4px;
    }
  }
}

.product-card {
  position: relative;
  z-index: 5;
  min-height: 256px;

  &.catalog-all {
    .product-card-content {
      img {
        min-height: 200px;
      }
    }

    .product-card-title {
      font-size: 14px;
      color: #CFCFCF;
      font-weight: 400;
      text-align: center;
    }
  }

  &-content {
    height: 100%;
    background-color: $primary-color;
    border-radius: 12px;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &::before {
    content: '';
    transition: all .3s;
    opacity: 0;
    position: absolute;
    background-color: #CFCFCF;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    z-index: -1;
  }

  &.active {
    &::before {
      opacity: 1;
      padding: 4px 4px 20px;
      left: -4px;
      top: -4px;
    }
  }

  &:not(.active) {
    &:hover {
      &::before {
        opacity: 1;
        padding: 1px;
        left: -1px;
        top: -1px;
      }
    }
  }

  &-image {
    max-width: 182px;
    height: 200px;
    object-fit: contain;
    margin-bottom: .25rem;
    position: relative;
  }


  @media screen and (max-width: $breakpoint-sm) {
    min-height: 192px;

    &.active {
      &::before {
        display: none;
      }
    }

    .product-card-content {
      padding: 8px 6px;
    }

    .product-card-title {
      font-size: 12px;
      text-align: center;
    }

    .product-card-image {
      max-width: 116px;
      max-height: 140px;
      height: 100%;
      object-fit: contain;
    }

    &.catalog-all {
      min-height: 192px;

      .product-card-title {
        font-size: 12px;
      }

      .product-card-content img {
        min-height: 132px;
      }
    }
  }
}

.product-layout {
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 200px;

  .card {
    background-color: $primary-color;
    border-radius: 12px;

    &.product-gallery {
      padding: 28px 1rem;

      .main-image {
        display: flex;
        justify-content: center;
        position: relative;

        img {
          position: relative;
          z-index: 1;
        }

        .bg-selected-color {
          position: absolute;
          top: 0;
          z-index: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 100%;
          background: radial-gradient(circle,
              var(--selected-color, rgba(255, 0, 0, 0.4)),
              #ffffff00 65%);
        }
      }

      .gallery-images {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 40px;

        .gallery-image {
          &.active {
            background-image: url('/images/flashlight.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: 30%;
          }
        }

        img {
          max-width: 160px;
          max-height: 160px;
        }
      }

      @media screen and (max-width: $breakpoint-sm) {
        .main-image {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    &.product-info {
      height: 25%;
      margin-bottom: 2rem;
      padding: 12px 16px;
    }

    &.product-blueprints {
      padding: 1rem;
      height: 70%;

      img {
        object-fit: contain;
        width: 50%;
        height: 170px;
      }
    }

    &.product-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: transparent;
      gap: 14px;

      .filters {
        color: #CFCFCF;
        display: flex;
        align-items: center;
        gap: .5rem 12px;
        background-color: $primary-color;
        padding: .5rem;
        border-radius: .5rem;
        font-size: 20px;
        font-weight: 500;
      }

      .wishes {
        width: 100%;
      }

      @media screen and (max-width: $breakpoint-sm) {
        .filters {
          width: 100%;
        }

        .btn {
          order: 3;
          padding: 12px 52px;
        }

        .wishes {
          order: 2;
        }
      }
    }
  }
}

@media screen and (max-width: $breakpoint-sm) {
  .color-picker-row {
    padding: 0 24px;
  }
}
</style>
