<template>
    <section class="why-us" id="why-us">
        <div class="container">
            <div class="section-content">
                <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">{{ $t('common.why_us.title') }}</h2>
            </div>
        </div>
        
        <div class="why-us-content">
            <div class="advantages">
                <div class="advantage" data-aos="fade-up" data-aos-delay="200">
                    <img src="$/images/icons/checkmark.png" alt="" class="advantage-icon" />
                    <div class="advantage-content">
                        <div class="advantage-title">{{ $t('common.why_us.ukrainian_product.title') }}</div>
                        <div class="advantage-desc">{{ $t('common.why_us.ukrainian_product.description') }}</div>
                    </div>
                </div>
                <div class="advantage" data-aos="fade-up" data-aos-delay="300">
                    <img src="$/images/icons/checkmark.png" alt="" class="advantage-icon" />
                    <div class="advantage-content">
                        <div class="advantage-title">{{ $t('common.why_us.modern_technologies.title') }}</div>
                        <div class="advantage-desc">{{ $t('common.why_us.modern_technologies.description') }}</div>
                    </div>
                </div>
                <div class="advantage" data-aos="fade-up" data-aos-delay="400">
                    <img src="$/images/icons/checkmark.png" alt="" class="advantage-icon" />
                    <div class="advantage-content">
                        <div class="advantage-title">{{ $t('common.why_us.low_price_quality.title') }}</div>
                        <div class="advantage-desc">{{ $t('common.why_us.low_price_quality.description') }}</div>
                    </div>
                </div>
                <div class="advantage" data-aos="fade-up" data-aos-delay="500">
                    <img src="$/images/icons/checkmark.png" alt="" class="advantage-icon" />
                    <div class="advantage-content">
                        <div class="advantage-title">{{ $t('common.why_us.delivery.title') }}</div>
                        <div class="advantage-desc">{{ $t('common.why_us.delivery.description') }}</div>
                    </div>
                </div>
            </div>
            <img src="$/images/mob-boats-img.png" alt="" class="why-us-image-mob">
            <img src="$/images/lodka.png" class="why-us-image" alt="" />
        </div>
    </section>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.why-us {
    position: relative;
    z-index: 9;
    max-width: 1920px;
    margin: 160px auto 0;

    &-image {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50%;
        z-index: 0;
        max-width: 602px;
    }

    &-image-mob {
        display: none;
        width: 100%;
    }

    .section-content {
        max-width: none;
    }

    .advantages {
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding: 100px 0 70px 140px;
        position: relative;
        z-index: 5;
    }

    .advantage {
        max-width: 590px;
        display: flex;
        gap: 12px;

        &-icon {
            width: 40px;
            height: 40px;
        }

        &-title {
            font-size: 24px;
        }

        &-desc {
            font-size: 20px;
            color: #CFCFCF;
            font-weight: 400;
        }
    }

    @media screen and (max-width: $breakpoint-xl) {
        .advantages {
            padding: 2rem 0 3rem 2rem;
        }
    }

    @media screen and (max-width: $breakpoint-sm) {
        margin-top: 80px;

        .advantages {
            gap: 1rem;
            padding: 0.5rem 1.5rem 1.5rem;
        }

        .advantage-title {
            font-size: 14px;
        }

        .advantage-desc {
            font-size: 12px;
        }

        .advantage-icon {
            width: 24px;
            height: 24px;
        }

        .why-us-image {
            display: none;
        }

        .why-us-image-mob {
            margin-top: 80px;
            display: block;
        }
    }
}
</style>
