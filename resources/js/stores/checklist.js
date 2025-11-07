import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import { useCatalogStore } from './catalog'
import { showHeaderMessage } from '@/helpers';
import { useI18n } from 'vue-i18n'


export const useChecklistStore = defineStore('checklist', () => {
  const checklist = ref(localStorage.getItem('checklist') ? JSON.parse(localStorage.getItem('checklist')) : []);
  const catalogStore = useCatalogStore();
  const { t } = useI18n()

  const addProduct = () => {
    const product = catalogStore.product;
    const productOptions = catalogStore.productOptions;
    // console.log('productOptions', productOptions);

    if (!product) {
      console.warn('No product selected in catalog store');
      return;
    }

    const checklistProductIds = checklist.value.map(item => item.product.id);
    if (checklistProductIds.includes(product.id)) {
      showHeaderMessage(t('checklist.already_in_checklist'), 'checklist_already_in');
      return;
    }

    const checklistItem = {
      product: product,
      options: productOptions
    }

    checklist.value.push(checklistItem);

    localStorage.setItem('checklist', JSON.stringify(checklist.value));
    showHeaderMessage(t('checklist.ready_for_purchase'), 'checklist');
  }

  const removeProduct = (index) => {
    checklist.value.splice(index, 1);
    localStorage.setItem('checklist', JSON.stringify(checklist.value));
  }

  return { checklist, addProduct, removeProduct }
})