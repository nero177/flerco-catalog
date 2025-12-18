<template>
  <div class="product-layout" :class="{'layout-wide': catalogStore.productWideDisplay()}">
    <div class="row row-col">
      <div class="col product-gallery-col">
        <ProductGallery class="product-gallery"/>
      </div>
      <div class="product-desc-col" :class="catalogStore.productWideDisplay() ? 'row' : 'col'">
        <div class="card product-info">{{ localized(catalogStore.product.desc) }}</div>
        <div class="wide-display-controls" v-if="catalogStore.productWideDisplay()">
          <div class="card product-controls">
            <ProductFilters/>
          </div>
          <div class="wishes input-group">
            <textarea name="" id="" v-model="wishesText" :placeholder="$t('product.wishes_placeholder')"></textarea>
          </div>
        </div>

        <div class="card product-blueprints" v-if="!catalogStore.productWideDisplay()">
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
    <div class="row button-row" v-if="catalogStore.productWideDisplay()">
      <Button outline @click="addToCart" class="btn-add-cart">{{ $t('product.add_to_cart') }}</Button>
    </div>

    <div class="row" v-if="!catalogStore.productWideDisplay()">
      <div class="col">
        <div class="card product-controls">
          <ProductFilters />

          <Button outline @click="addToCart" class="btn-add-cart">{{ $t('product.add_to_cart') }}</Button>
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
.button-row {
  display: flex;
  justify-content: center;
}
.product-desc-col.row {
  .product-info {
    margin-bottom: unset !important;
    height: unset !important;
  }

  @media screen and (max-width: $breakpoint-sm) {
    padding: 0 !important;
  }

  .wide-display-controls {
    width: 100%;
  }
}

.layout-wide {
  .row-col {
    flex-direction: column;

    .product-gallery-col {
      width: 100%;
    }
  }

  .wide-display-controls {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .filters {
      font-size: 1rem !important;
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
    &.product-info {
      height: 25%;
      margin-bottom: 2rem;
      font-size: 18px;
    }

    &.product-blueprints {
      padding: 1rem;
      height: 70%;
      gap: 1rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      img {
        object-fit: contain;
        width: 50%;
        height: 200px;
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
        padding: 18px 45px;
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
