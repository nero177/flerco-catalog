<template>
  <div class="filters">
    <AmountSelector :initialAmount="initialAmount" @amount-change="(val) => $emit('amount-change', val)" />
    <div class="checkbox-items">
      <div class="checkbox-item">
        <input type="checkbox" name="" id="" v-model="heat" @change="(val) => $emit('heat-change', val.target.checked)">
        {{ $t('common.product_filters.heat') }}
      </div>
      <div class="checkbox-item">
        <input type="checkbox" name="" id="" v-model="logo" @change="(val) => $emit('logo-change', val.target.checked)">
        {{ $t('common.product_filters.logo') }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import AmountSelector from '@/Components/AmountSelector.vue';
import { useCatalogStore } from '@/stores/catalog';

// Define props for heat, logo, and amount
const props = defineProps({
  initialHeat: {
    type: Boolean,
    default: false
  },
  initialLogo: {
    type: Boolean,
    default: false
  },
  initialAmount: {
    type: Number,
    default: 1
  }
});

const catalogStore = useCatalogStore();
const heat = ref(false);
const logo = ref(false);

heat.value = props.initialHeat;
logo.value = props.initialLogo;

watch([heat, logo], () => {
  catalogStore.productOptions.heat = heat.value;
  catalogStore.productOptions.logo = logo.value;
})

</script>
<style lang="scss">
.checkbox-items {
  display: flex;
  gap: .5rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: .25rem;

  input {
    width: 20px;
    height: 20px;
  }
}

@media screen and (max-width: $breakpoint-sm) {
  .checkbox-item {
    font-size: 14px;
  }
}
</style>