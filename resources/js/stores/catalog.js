import { defineStore } from "pinia";
import { computed, ref } from 'vue'

export const useCatalogStore = defineStore('catalog', () => {
    const product = ref(null);
    const productOptionsBasic = {
        amount: 1,
        heat: false,
        logo: false,
        wishes: '',
    }
    const productOptions = ref({...productOptionsBasic, colors: []})

    const setProduct = (value) => {
        product.value = value;
        productOptions.value = {...productOptionsBasic, colors: []}
    }

    const productSelectedPhoto = computed(() => {
        if (product.value.gallery && product.value.gallery.length < 1) {
            return null;
        }

        return product.value.selectedPhoto ? product.value.gallery[product.value.selectedPhoto] : product.value.gallery[0];
    })

    const productSelectedColors = computed(() => {
        if (!product.value.colors || product.value.colors.length < 1) {
            return [];
        }

        if (productOptions.value.colors.length === 0) {
            productOptions.value.colors.push(product.value.colors[0]);
        } 

        return productOptions.value.colors;
    })

    const selectProductPhoto = (photoIndex) => {
        product.value.selectedPhoto = photoIndex;
    }

    const selectProductColor = (color) => {
        if (productOptions.value.colors.map(color => color.id).includes(color.id)) {
            const index = productOptions.value.colors.indexOf(color);
            productOptions.value.colors.splice(index, 1);
        } else {
            productOptions.value.colors.push(color);
        }
    }

    const productWideDisplay = () => {
        return !product.value.blueprints || product.value.blueprints.length === 0;
    }

    return { product, setProduct, productOptions, productWideDisplay, selectProductPhoto, selectProductColor, productSelectedPhoto, productSelectedColors }
})