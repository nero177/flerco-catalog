<template>
    <section class="stats" id="stats">
        <div class="gradient-sides">
            <div class="side"></div>
            <div class="side"></div>
        </div>
        <div class="stats-items">
            <div class="stats-item" data-aos="fade-up" data-aos-delay="100">
                <img class="stats-item__icon" alt="" src="$/images/icons/medal.svg" />
                <b class="stats-item__title">{{ $t('common.stats.years_on_market_num') }}</b>
                <div class="stats-item__desc">{{ $t('common.stats.years_on_market') }}</div>
            </div>
            <div class="stats-item" data-aos="fade-up" data-aos-delay="200">
                <img class="stats-item__icon" alt="" src="$/images/icons/boat.svg" />
                <b class="stats-item__title">{{ $t('common.stats.products_made_num') }}</b>
                <div class="stats-item__desc">{{ $t('common.stats.products_made') }}</div>
            </div>
            <div class="stats-item" data-aos="fade-up" data-aos-delay="300">
                <img class="stats-item__icon" alt="" src="$/images/icons/globe-white.svg" />
                <b class="stats-item__title">{{ $t('common.stats.countries_export_num') }}</b>
                <div class="stats-item__desc">{{ $t('common.stats.countries_export') }}</div>
            </div>
            <div class="stats-item" data-aos="fade-up" data-aos-delay="400">
                <img class="stats-item__icon" alt="" src="$/images/icons/like.svg" />
                <b class="stats-item__title">{{ $t('common.stats.positive_reviews_num') }}</b>
                <div class="stats-item__desc">{{ $t('common.stats.positive_reviews') }}</div>
            </div>
        </div>
        <div class="container">
            <div class="section-content">
                <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">{{ $t('common.stats.title') }}</h2>
                <p class="section-desc" data-aos="fade-up" data-aos-delay="300">
                    {{ $t('common.stats.description') }}
                </p>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.stats {
    margin-top: 320px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    .section-content {
        margin-top: 140px;
        height: 177px; 
    }

    .stats-items,
    .section-content {
        position: relative;
    }

    @media screen and (max-width: $breakpoint-sm) {
        .section-content {
            margin-top: 80px;
        }

        margin-top: 278px;
    }
}

.stats-items {
    display: flex;
    gap: 50px;


    @media screen and (max-width: $breakpoint-sm) {
        gap: 20px;
        /* TODO: */
        /* maybe temporary */
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
}

.stats-item {
    text-align: center;

    &__icon {
        width: 64px;
        height: 64px;
        margin-bottom: 1rem;
    }

    &__title {
        display: block;
        font-size: $font-size-section-desc;
        margin-bottom: .5rem;
    }

    &__desc {
        font-size: 14px;
    }

    @media screen and (max-width: $breakpoint-sm) {
        .stats-item__icon {
            width: 40px;
            height: 40px;
            margin-bottom: 0.5rem;
        }

        .stats-item__title {
            font-size: 16px;
        }

        .stats-item__desc {
            font-size: 12px;
        }
    }
}
</style>
