<template>
  <div class="product-layout">
    <div class="row">
      <div class="col">
        <ProductGallery/>
      </div>
      <div class="col product-desc-col">
        <div class="card product-info">{{ localized(catalogStore.product.desc) }}</div>
        <div class="card product-blueprints" v-if="catalogStore.productHasBlueprints()">
          <img v-for="(blueprint, index) in catalogStore.product?.blueprints" :key="index" :src="'/storage/' + blueprint"
            :alt="localized(catalogStore.product.title) + ' - ' + $t('product.blueprint_alt') + ' ' + (index + 1)">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ProductColorPicker />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card product-controls">
          <ProductFilters />

          <Button outline @click="addToCart">{{ $t('product.add_to_cart') }}</Button>
          <div class="wishes input-group">
            <textarea name="" id="" v-model="wishesText" :placeholder="$t('product.wishes_placeholder')"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useCatalogStore } from '@/stores/catalog';
import ProductFilters from '@/Components/ProductFilters.vue';
import ProductColorPicker from '@/Components/Catalog/ProductColorPicker.vue';
import ProductGallery from '@/Components/Catalog/ProductGallery.vue';
import Button from '@/Components/Common/Buttons/Button.vue'
import { useChecklistStore } from '@/stores/checklist';
import { localized } from '@/helpers';

const catalogStore = useCatalogStore();
const checklistStore = useChecklistStore();
const wishesText = ref('');

const addToCart = () => {
  catalogStore.productOptions.wishes = wishesText.value;
  
  checklistStore.addProduct()
}
</script>
<style lang="scss" scoped>
.product-layout {
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 200px;

  .card {
    &.product-info {
      height: 25%;
      margin-bottom: 2rem;
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

      .btn {
        white-space: nowrap;
      }
    }
  }

  @media screen and (max-width: $breakpoint-sm) {
    gap: 1.5rem;

    .row {
      flex-wrap: wrap;
      padding: 0 24px;
    }

    .col {
      width: 100% !important;
    }

    .product-info {
      display: none;
    }

    .product-blueprints {
      height: 100% !important;
    }

    .product-controls {
      flex-direction: column;
    }
  }
}
</style>
