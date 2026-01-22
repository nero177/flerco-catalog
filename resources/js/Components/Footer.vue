<template>
    <footer>
        <div class="footer-inner footer-inner-desk">
            <div class="footer-inner-left">
                <div class="footer-inner-item">
                    {{ $t('common.footer.questions') }}<br>
                    {{ $t('common.footer.questions_sub') }}
                </div>

                <div class="footer-inner-item">
                    {{ $t('common.footer.address') }}<br>
                    ofﬁce@ﬂerco.com
                </div>

                <div class="footer-inner-item">
                    {{ $t('common.footer.phone') }}<br>
                    {{ $t('common.footer.phone_username') }}
                </div>
            </div>
            <div class="copyright">
                {{ $t('common.footer.copyright') }}<br>
                {{ $t('common.footer.copyright_rights') }}
            </div>
        </div>
        <div class="footer-inner footer-inner-mob">
            <div class="footer-mob-title">
                {{ $t('common.footer.mobile.title') }}
            </div>
            <div class="footer-mob-desc">
                {{ $t('common.footer.mobile.description') }}
            </div>

            <div class="footer-mob-items">
                <div class="footer-mob-item">
                    <div class="footer-mob-item-title">
                        <img alt="" class="contact-info-item__icon" src="$/images/icons/pin.svg" />
                        {{ $t('common.footer.mobile.address') }}
                    </div>
                    <div class="footer-mob-item-value">
                        {{ $t('common.footer.mobile.address_value') }}
                    </div>
                </div>

                <div class="footer-mob-item">
                    <div class="footer-mob-item-title">
                        <img alt="" class="contact-info-item__icon" src="$/images/icons/viber.svg" />
                        {{ $t('common.footer.mobile.phone') }}
                    </div>
                    <div class="footer-mob-item-value">
                        {{ $t('common.footer.mobile.phone_value') }}
                    </div>
                </div>

                <div class="footer-mob-item">
                    <div class="footer-mob-item-title">
                        <img alt="" class="contact-info-item__icon" src="$/images/icons/tg.svg" />
                        {{ $t('common.footer.mobile.telegram') }}
                    </div>
                    <div class="footer-mob-item-value">
                        @username
                    </div>
                </div>

                <div class="footer-mob-item">
                    <div class="footer-mob-item-title">
                        <img alt="" class="contact-info-item__icon" src="$/images/icons/mail.svg" />
                        {{ $t('common.footer.mobile.email') }}
                    </div>
                    <div class="footer-mob-item-value">
                        ofﬁce@ﬂerco.com
                    </div>
                </div>
                <div class="footer-mob-item">
                    <div class="footer-mob-item-title">
                        <img alt="" class="contact-info-item__icon" src="$/images/icons/clock-white.svg" />
                        {{ $t('common.footer.mobile.hours') }}
                    </div>
                    <div class="footer-mob-item-value">
                        {{ $t('common.footer.mobile.hours_value') }}<br>
                        {{ $t('common.footer.mobile.hours_value_weekend') }}
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="copyright">{{ $t('common.footer.mobile.copyright') }}</div>
                <div class="all-rights">{{ $t('common.footer.mobile.all_rights') }}</div>
            </div>
        </div>
    </footer>
</template>
<script setup>

</script>
<style lang="scss" scoped>
footer {
    position: relative;
    z-index: 1;
}
.footer-inner {
    margin-top: 100px;
    margin-bottom: 0.5rem;
    color: #CFCFCF;
    display: flex;
    padding: 0 30px 10px;
    justify-content: space-between;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 8px;

    .copyright, .all-rights {
        font-size: 10px;
        color: #CFCFCF;
    }
}

.footer-inner-item {
    max-width: 322px;
    font-weight: 400;
}

.footer-inner-mob {
    display: none;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
}
.footer-mob-title {
    font-weight: bold;
    margin-bottom: 4px;
    color: #fff;
    font-size: 14px;
}
.footer-mob-desc {
    text-align: center;
    font-weight: 400;
    margin-bottom: 1rem;
    font-size: 12px;
}

.footer-inner-left {
    display: flex;
    gap: 48px;
}

.footer-mob-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.contact-info-item__icon {
    width: 16px;
    height: 16px;
}

.footer-mob-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    &-title {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-weight: 500;
        color: #fff;
    }

    &-value {
        color: #D8D8D8;
        text-align: right;
        max-width: 50%;
    }
}

.copyright {
    text-align: right;
}

@media screen and (max-width: $breakpoint-sm) {
    .footer-inner-mob {
        display: flex;
        padding: 0 24px;

        .footer-mob-items {
            width: 100%;
        }
    }

    .footer-inner-desk {
        display: none;
    }
}
</style>
