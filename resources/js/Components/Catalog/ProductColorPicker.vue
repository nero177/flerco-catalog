<template>
	<div class="card product-colors" v-if="catalogStore.productSelectedColors.length > 0">
		<div class="color-item" @click="catalogStore.selectProductColor(color)"
			v-for="(color, index) in catalogStore.product.colors" :key="index"
			:class="{ active: catalogStore.productOptions.colors.length > 0 ? catalogStore.productOptions.colors.map(color => color.id).includes(color.id) : false}">
			<div class="color-code">{{ color.title }}</div>
			<div class="color-image-bg">
				<img class="color-image" :src="'/storage/' + color.image" alt="">
			</div>
		</div>
	</div>
</template>
<script setup>
import { useCatalogStore } from '@/stores/catalog';
import { onMounted } from 'vue';

const catalogStore = useCatalogStore();

onMounted(() => {
	catalogStore.productOptions.colors = catalogStore.productSelectedColors;
})
</script>
<style lang="scss" scoped>
.product-colors {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	padding: 17px 21px 30px;
	gap: 12px;

	.color-item {
		display: flex;
		flex-direction: column;
		gap: 4px;
		align-items: center;
		cursor: pointer;

		&.active {
			.color-image-bg {
				padding: 8px;
				box-shadow: 0px 4px 8px rgba(0, 0, 0, .25);
			}
		}

		.color-image-bg {
			padding: 4px;
			transition: .5s all;
			background-color: #354469;
			border-radius: 4px;
			width: 100%;
			height: 64px;
		}

		.color-image {
			border-radius: 4px;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}
}

@media screen and (max-width: $breakpoint-sm) {
	.product-colors {
		gap: 10px;
		grid-template-columns: repeat(5, 1fr);
		// margin: 0 24px;
		width: 100%;
		padding: 8px 14px;

		.color-item {
			min-width: 0;
			font-size: 14px;
			width: 100%;

			.color-image-bg {
				padding: 3px;
				height: fit-content;
				height: 38px;
			}

			&.active {
				.color-image-bg {
					padding: 3px;
				}
			}
		}
	}
}
</style>
