<template>
    <section class="banner-section" id="header-section">
        <img src="$/images/landscape.png" class="banner-bg" alt="" />
        <img src="$/images/landscape-mob.png" class="banner-bg-mob" alt="">
        <div class="banner-content">
            <h1 data-aos="fade-up" data-aos-delay="200">
                {{ $t('common.banner_section.h1') }} <br>
                <span>{{ $t('common.banner_section.h1_span') }}</span>
            </h1>
            <p class="banner-description" data-aos="fade-up" data-aos-delay="500">
                {{ $t('common.banner_section.description') }}
            </p>
            <div class="banner-btns" data-aos="fade-up" data-aos-delay="700">
                <Button primary href="/catalog">{{ $t('common.banner_section.learn_more') }}</Button>
                <Button outline href="#contact-us">{{ $t('common.banner_section.contact_us') }}</Button>
            </div>
        </div>
    </section>
</template>
<script setup>
import Button from '@/Components/Common/Buttons/Button.vue';
</script>
<style lang="scss" scoped>
.banner-section {
    margin: 80px auto 0;
    position: relative;
    z-index: 9;
    max-width: 1056px;

    .banner-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 570px;
        z-index: -1;
    }

    .banner-bg-mob {
        width: 100%;
        display: none;
    }

    .banner-content {
        padding-top: 310px;

        h1 {
            margin-bottom: 1.5rem;
        }

        .banner-description {
            font-size: clamp(1rem, 2vw, 1.5rem);
            margin-bottom: 2rem;
            max-width: clamp(600px, 60vw, 680px);
            line-height: 28px;
            letter-spacing: -1%;
        }

        .banner-btns {
            display: flex;
            gap: 2rem;
        }
    }

    @media screen and (max-width: 1100px) {
        margin: 30px 1rem 0;
        overflow: hidden;
    }

    @media screen and (max-width: $breakpoint-sm){
        margin: 48px 24px 0;
        .banner-bg {
            display: none;
        }

        .banner-bg-mob {
            display: block;
        }
        .banner-content {
            padding-top: 0;

            h1 {
                font-size: 24px;
                margin: 1rem 0;
            }

            .banner-description {
                margin-bottom: 1rem;
                line-height: 18px;
                letter-spacing: unset;
                font-size: 14px;
            }
        }

        .banner-btns {
            gap: 12px !important;
            flex-wrap: wrap;

            .btn {
                padding: 12px 24px;
            }
        }
    }
}
</style>
