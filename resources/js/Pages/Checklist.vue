<template>
  <FrontendLayout>
    <div class="catalog-wrapper checklist-wrapper">
      <h1>{{ $t('common.checklist.title') }}</h1>
      <div class="checklist-items container">
        <!-- Empty state -->
        <div v-if="checklistItems.length === 0" class="empty-state">
          <div class="empty-state-content">
            <div class="empty-state-icon">
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 6H20L18.4199 20.2209C18.3074 21.2337 17.4512 22 16.4321 22H7.56786C6.54876 22 5.69264 21.2337 5.5801 20.2209L4 6Z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M7.34491 3.14716C7.67506 2.44685 8.37973 2 9.15396 2H14.846C15.6203 2 16.3249 2.44685 16.6551 3.14716L18 6H6L7.34491 3.14716Z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 6H22" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M10 11V16" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M14 11V16" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <h2 class="empty-state-title">{{ $t('common.checklist.empty_state.message') }}</h2>
            <Button @click="goToCatalog" primary class="empty-state-button">
              {{ $t('common.checklist.empty_state.button') }}
            </Button>
          </div>
        </div>

        <!-- Checklist items -->
        <div v-else>
          <div class="checklist-item" v-for="(item, index) in checklistItems" :key="index">
            <div class="checklist-item-info card">
              <div class="checklist-item-img">
                <img :src="'/storage/' + item.product?.thumbnail ?? ''" :alt="localized(item.product.title)">
              </div>
              <div class="checklist-item-right">
                <div class="checklist-item-title">{{ localized(item.product.title) }}</div>
                <ProductFilters 
                  class="product-filters-mob" 
                  :initialHeat="item.options.heat"
                  :initialLogo="item.options.logo" 
                  :initialAmount="item.options.amount"
                  @amount-change="(val) => item.options.amount = val" 
                  @heat-change="(val) => item.options.heat = val"
                  @logo-change="(val) => item.options.logo = val"
                />
                <div class="checklist-item-colors" v-if="item.options.colors.length > 0">
                  <div class="checklist-item-color" v-for="color in item.options.colors">
                    <img :src="'/storage/' + color.image" alt="">
                  </div>
                </div>
                <!-- <Button outline>Вернуться к описанию</Button> -->
              </div>
              <div class="checklist-item-delete" @click="removeItem(index)">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 6H20L18.4199 20.2209C18.3074 21.2337 17.4512 22 16.4321 22H7.56786C6.54876 22 5.69264 21.2337 5.5801 20.2209L4 6Z"
                    stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M7.34491 3.14716C7.67506 2.44685 8.37973 2 9.15396 2H14.846C15.6203 2 16.3249 2.44685 16.6551 3.14716L18 6H6L7.34491 3.14716Z"
                    stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2 6H22" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 11V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M14 11V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div class="checklist-item-fields">
              <ProductFilters 
                class="card" 
                :initialHeat="item.options.heat" 
                :initialLogo="item.options.logo"
                :initialAmount="item.options.amount" 
                @amount-change="(val) => item.options.amount = val" 
                @heat-change="(val) => item.options.heat = val"
                @logo-change="(val) => item.options.logo = val"
              />
              <div class="wishes input-group">
                <textarea v-model="item.options.wishes" :placeholder="$t('common.checklist.wishes')"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="checklistItems.length > 0" class="order-form">
        <div class="inputs">
          <div class="input-group name-input">
            <label for="name">{{ $t('common.checklist.name') }}</label>
            <input type="text" id="name" v-model="name">
          </div>
          <div class="input-group email-input">
            <label for="email">{{ $t('common.checklist.email_number') }}</label>
            <input type="text" id="email" v-model="contact">
          </div>
        </div>
        <div class="btn btn-primary" @click="handlePurchase" :disabled="isSubmitting">
          {{ isSubmitting ? 'Processing...' : $t('common.checklist.purchase') }}
        </div>
      </div>
    </div>
  </FrontendLayout>
</template>
<script setup>
import FrontendLayout from '@/Layouts/FrontendLayout.vue';
import ProductFilters from '@/Components/ProductFilters.vue';
import { onMounted, ref } from 'vue'
import { useChecklistStore } from '@/stores/checklist';
import Button from '@/Components/Common/Buttons/Button.vue';
import { localized, makeRequest } from '@/helpers';
import { router } from '@inertiajs/vue3';

const checklistStore = useChecklistStore();
const checklistItems = ref([]);

const contact = ref('')
const name = ref('')
const isSubmitting = ref(false)

const removeItem = (index) => {
  checklistStore.removeProduct(index);
  checklistItems.value = checklistStore.checklist;
}

const goToCatalog = () => {
  router.visit('/catalog');
}

const handlePurchase = async () => {
  // Validate form
  if (!name.value.trim() || !contact.value.trim()) {
    alert('Please fill in all required fields');
    return;
  }

  if (checklistItems.value.length === 0) {
    alert('Please add at least one product to your order');
    return;
  }

  isSubmitting.value = true;

  try {
    const products = checklistItems.value.map(item => {
      return {
        id: item.product.id,
        details: item.options,
      }
    });
    
    const response = await makeRequest('/order/create', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        contact: contact.value,
        products: products
      })
    });

    if (response.success) {
      // Clear the checklist and form
      checklistStore.checklist = [];
      localStorage.setItem('checklist', JSON.stringify([]));
      checklistItems.value = [];
      name.value = '';
      contact.value = '';

      alert('Order placed successfully! Order ID: ' + response.order_id);
    }
  } catch (error) {
    console.error('Error placing order:', error);
    alert('Error placing order. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
}

onMounted(() => {
  checklistItems.value = checklistStore.checklist;
})
</script>
<style lang="scss">
.order-form {
  max-width: 584px;
  margin: 80px auto 0;

  .inputs {
    display: flex;
    gap: 1rem;
    margin-bottom: 32px;

    .name-input {
      max-width: 216px;
    }

    .email-input {
      width: 100%;
    }
  }

  .btn-primary {
    padding: 16px;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  @media screen and (max-width: $breakpoint-sm) {
    margin: 24px auto 0;

    .inputs {
      margin-bottom: 1.5rem;
      flex-wrap: wrap;

      .name-input {
        max-width: unset;
        width: 100%;
      }

      label {
        white-space: nowrap;
      }

      .email-input {
        width: 100%;
      }
    }

    .btn-primary {
      padding: 8px;
    }
  }
}

.checklist-wrapper {
  min-height: 900px;

  h1 {
    font-size: clamp(22px, 4vw, 32px)
  }

  @media screen and (max-width: $breakpoint-sm) {
    padding: 0 24px;

    h1 {
      margin: 80px 0;
      padding: 0;
    }
  }
}

.checklist-items {
  >div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.empty-state {
  display: flex;
  align-items: center;
  min-height: 400px;
  text-align: center;

  &-content {
    max-width: 400px;
    padding: 0px 20px;
  }

  &-icon {
    margin-bottom: 24px;
    color: #ccc;

    svg {
      width: 64px;
      height: 64px;
    }
  }

  &-title {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 32px;
    line-height: 1.4;
  }

  &-button {
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 500;
  }
}

@media screen and (max-width: $breakpoint-sm) {
  .empty-state {
    min-height: 300px;

    &-content {
      padding: 0 20px;
    }

    &-title {
      font-size: 18px;
      margin-bottom: 24px;
    }

    &-button {
      padding: 12px 24px;
      font-size: 14px;
    }
  }
}

.checklist-item {
  display: grid;
  grid-template-columns: 1fr .8fr;
  gap: 40px;

  &-info {
    padding: 10px;
    display: flex;
    align-items: center;
    position: relative;
  }

  &-img {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 120px;
      height: 140px;
      object-fit: contain;
    }
  }

  &-title {
    font-size: 20px;
  }

  .filters {
    padding: 8px 12px;
    margin-bottom: 32px;
    display: flex;
  }

  &-right {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: flex-start;

    .btn {
      font-size: 14px;
      padding: 11px 14px;
    }
  }

  &-delete {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: white;
    z-index: 10;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &-colors {
    display: flex;
    gap: .25rem;
    
    .checklist-item-color {
      img {
        width: 40px;
      }
    }
  }

  .product-filters-mob {
    display: none;
  }

  @media screen and (max-width: $breakpoint-sm) {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    &-title {
      font-size: 14px;
      width: 90%;
    }

    &-info {
      gap: 1rem;
    }

    .filters {
      display: none;
    }

    .product-filters-mob {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      margin: 0;

      .amount-wrapper {
        padding: 6px 0;
      }

      .checkbox-items {
        flex-direction: column;
      }
    }
  }
}
</style>