<template>
  <div class="card product-gallery">
    <div class="main-image" v-if="!catalogStore.productWideDisplay()">
      <div class="bg-selected-color" :style="{
        '--selected-color': selectedColorHexWithAlpha
      }"></div>
     
      <img 
        :src="'/storage/' + catalogStore.productSelectedPhoto" 
        :alt="localized(catalogStore.product.title)"
        @click="showViewer"
      >
    </div>


    <!-- Slick.js Gallery -->
    <div class="gallery-slider" ref="gallerySlider" :class="{'hide-on-wide': catalogStore.productWideDisplay()}">
      <div class="gallery-slide" v-for="(image, index) in images" :key="index">
        <div class="gallery-image" @click="catalogStore.selectProductPhoto(index)"
          :class="{ active: catalogStore.product.selectedPhoto === index || !catalogStore.product.selectedPhoto && index === 0 }">
          <div class="flashlight-bg"></div>
          <img :src="image.src" :alt="image.alt">
        </div>
      </div>
    </div>
    <div class="product-wide-images" v-if="catalogStore.productWideDisplay()">
      <div class="product-wide-image" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" @click="showViewer">
      </div>
    </div>
    <div class="product-info-mob">
      {{ localized(catalogStore.product.desc) }}
    </div>
  </div>
</template>
<script setup>
import { useCatalogStore } from '@/stores/catalog';
import { computed, ref, onMounted, nextTick } from 'vue'
import { hexToRgba, localized } from '@/helpers';
import { api as viewerApi } from 'v-viewer'

const catalogStore = useCatalogStore();
const gallerySlider = ref(null);

const selectedColorHexWithAlpha = computed(() => {
  const hex = catalogStore.productSelectedColor?.color_hex || '#ffffff';
  return hexToRgba(hex, 0.7);
});

const currentPhotoIndex = computed(() => {
  if (!catalogStore.product?.gallery?.length) {
    return 0;
  }

  return catalogStore.product.selectedPhoto ?? 0;
});

onMounted(async () => {
  await nextTick();
  if (gallerySlider.value && window.jQuery && window.jQuery.fn.slick) {
    window.jQuery(gallerySlider.value).slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
});

const images = computed(() => {
  return catalogStore.product.gallery.map((image, index) => ({
    src: '/storage/' + image,
    alt: localized(catalogStore.product.title) + ' - Фото ' + (index + 1)
  }))
})

const showViewer = () => {
  viewerApi({
    images: images.value,
    options: {
      initialViewIndex: currentPhotoIndex.value
    }
  })
}
</script>
<style lang="scss">
.product-wide-images {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  img {
    max-width: 450px;
    max-height: 450px;
    cursor: pointer;
  }

  @media screen and (max-width: $breakpoint-sm) {
    display: none;
  }
}

.product-gallery {
  padding: 28px 1rem;

  .main-image {
    display: flex;
    justify-content: center;
    position: relative;

    img {
      position: relative;
      z-index: 1;
      width: 352px;
      height: 480px;
      object-fit: contain;
      cursor: zoom-in;
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

  .gallery-slider {
    margin-top: 1rem;
    margin-bottom: 1.5rem;

    .slick-track {
      display: flex;
      align-items: center;
    }

    .gallery-slide {
      padding: 0 0.5rem;

      .gallery-image {
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
          background-image: url('/images/flashlight.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 30%;
        }

        img {
          max-width: 160px;
          max-height: 160px;
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      }
    }

    &.hide-on-wide {
      display: none;
    }
  }

  .product-info-mob {
    display: none;
    font-size: 14px;
  }
}

@media screen and (max-width: $breakpoint-sm) {
  .product-gallery {
    .gallery-slider {
      .slick-prev {
        left: -5px;
        z-index: 999;
        scale: 1.2;
      }

      .slick-next {
        right: -5px;
        z-index: 999;
        scale: 1.2;
      }

      &.hide-on-wide {
        display: block;
      }
    }

    .product-info-mob {
      display: block;
    }
  }
}
</style>