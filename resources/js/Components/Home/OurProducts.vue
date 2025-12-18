<template>
    <div class="container">
        <section class="our-products" id="our-products">
            <div class="section-content">
                <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">{{ $t('our_products.title') }}</h2>
                <p class="section-desc" data-aos="fade-up" data-aos-delay="300">{{ $t('our_products.description') }}</p>
            </div>
            <div class="products">
                <a href="#" class="product" data-aos="fade-up" data-aos-delay="400">
                    <img src="$/images/seat1.png" alt="" />
                </a>
                <a href="#" class="product" data-aos="fade-up" data-aos-delay="500">
                    <img src="$/images/seat2.png" alt="" />
                </a>
                <a href="#" class="product" data-aos="fade-up" data-aos-delay="600">
                    <img src="$/images/seat3.png" alt="" />
                </a>
            </div>
            <Button href="/catalog" primary data-aos="fade-up" data-aos-delay="700">{{ $t('our_products.learn_more') }}</Button>
        </section>
    </div>
</template>
<script setup>
import Button from '@/Components/Common/Buttons/Button.vue';

</script>
<style lang="scss" scoped>
.our-products {
    padding: 67px 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-desc {
        color: #CFCFCF;
    }

    .products {
        margin-top: 2.5rem;
        display: flex;
        justify-content: center;
        gap: 100px;


        .product {
            min-width: 295px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                max-width: 295px;
                max-height: 344px;
            }
        }
    }

    .btn-primary {
        margin-top: 28px;
        padding: 1rem 70px;
    }

    @media screen and (max-width: $breakpoint-lg) {
        .products {
            gap: 1rem;
        }
    }

    @media screen and (max-width: $breakpoint-sm) {

        .products {
            .product {
                min-width: 112px;

                img {
                    max-width: 110px;
                    max-height: 128px;
                }
            }
        }

        .btn-primary {
            font-size: 14px;
            border-radius: .5rem;
            padding: .5rem 1.5rem;
        }
    }
}
</style>
