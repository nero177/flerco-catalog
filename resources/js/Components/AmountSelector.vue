<template>
	<div class="amount-wrapper">
		{{ $t('common.amount_selector.quantity') }}
		<div class="amount">
			<div class="amount-arrow" @click="changeAmount(amount - 1)"><img src="$/images/icons/arrow-right.svg" alt="">
			</div>
			<div class="amount-box">
				<div class="amount-number">{{ amount }}</div>
			</div>
			<div class="amount-arrow arrow-right" @click="changeAmount(amount + 1)"><img src="$/images/icons/arrow-right.svg"
					alt=""></div>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { useCatalogStore } from '@/stores/catalog';

const catalogStore = useCatalogStore();

const props = defineProps({
	initialAmount: {
		type: Number,
		default: 1
	}
})

const amount = ref(1);
amount.value = props.initialAmount;

const emit = defineEmits(['amount-change'])

const changeAmount = (value) => {
	if (value < 1 || value > 999) {
		return;
	}

	catalogStore.productOptions.amount = value;
	amount.value = value;
	emit('amount-change', value);
}
</script>
<style lang="scss" scoped>
.amount-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: .75rem;
	padding: .5rem;
}

.amount {
	display: flex;
	align-items: center;

	.amount-arrow {
		width: 22px;
		height: 20px;

		&.arrow-right {
			transform: scaleX(-1);
		}
	}

	.amount-box {
		padding: 4px 9px;
		border: 1px solid #fff;
		border-radius: 4px;

		.amount-number {
			font-size: 20px;
			color: #CFCFCF;
			font-weight: 400;
		}
	}
}

@media screen and (max-width: $breakpoint-sm) {
	.amount-wrapper {
		font-size: 14px;
	}
}
</style>
