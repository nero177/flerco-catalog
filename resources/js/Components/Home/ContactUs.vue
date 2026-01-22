<template>
    <section class="contact-us" id="contact-us">
        <div class="container">
            <div class="section-content">
                <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">{{ $t('common.contact_us.title') }}</h2>
                <p class="section-desc" data-aos="fade-up" data-aos-delay="300">
                    {{ $t('common.contact_us.description') }}<br>
                    {{ $t('common.contact_us.description_sub') }}
                </p>
            </div>
            <div class="contacts">
                <div class="contact-form" data-aos="fade-up" data-aos-delay="500">
                    <div v-if="successMessage" class="success-message">
                        {{ successMessage }}
                    </div>
                    <div v-if="errorMessage" class="error-message">
                        {{ errorMessage }}
                    </div>
                    <div class="row">
                        <div class="input-group col">
                            <label>{{ $t('common.contact_us.form.name') }}</label>
                            <input 
                                type="text" 
                                v-model="form.name"
                                :class="{ 'error': errors.name }"
                                required
                            />
                            <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
                        </div>
                        <div class="input-group col">
                            <label>{{ $t('common.contact_us.form.email_phone') }}</label>
                            <input 
                                type="text" 
                                v-model="form.contact"
                                :class="{ 'error': errors.contact }"
                                required
                            />
                            <span v-if="errors.contact" class="error-text">{{ errors.contact }}</span>
                        </div>
                    </div>
                    <div class="input-group">
                        <label>{{ $t('common.contact_us.form.subject') }}</label>
                        <input 
                            type="text" 
                            v-model="form.topic"
                            :class="{ 'error': errors.topic }"
                            required
                        />
                        <span v-if="errors.topic" class="error-text">{{ errors.topic }}</span>
                    </div>
                    <div class="input-group">
                        <label>{{ $t('common.contact_us.form.message') }}</label>
                        <textarea 
                            rows="8"
                            v-model="form.message"
                            :class="{ 'error': errors.message }"
                            required
                        ></textarea>
                        <span v-if="errors.message" class="error-text">{{ errors.message }}</span>
                    </div>
                    <Button @click="submitForm" primary :disabled="isSubmitting">
                        {{ isSubmitting ? 'Sending...' : $t('common.contact_us.form.send') }}
                    </Button>
                </div>
                <div class="contact-info" data-aos="fade-up" data-aos-delay="700">
                    <div class="contact-info-title">{{ $t('common.contact_us.contact_info.title') }}</div>
                    <div class="contact-info-items">
                        <div class="contact-info-item">
                            <img alt="" class="contact-info-item__icon" src="$/images/icons/pin.svg" />
                            <div class="contact-info-item-content">
                                <div class="contact-info-item__title">{{ $t('common.contact_us.contact_info.address') }}</div>
                                <div class="contact-info-item__desc">{{ $t('common.contact_us.contact_info.address_value') }}</div>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <img alt="" class="contact-info-item__icon" src="$/images/icons/cell.svg" />
                            <div class="contact-info-item-content">
                                <div class="contact-info-item__title">{{ $t('common.contact_us.contact_info.phone') }}</div>
                                <div class="contact-info-item__desc">{{ $t('common.contact_us.contact_info.phone_value') }}</div>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <img alt="" class="contact-info-item__icon" src="$/images/icons/mail.svg" />
                            <div class="contact-info-item-content">
                                <div class="contact-info-item__title">{{ $t('common.contact_us.contact_info.email') }}</div>
                                <div class="contact-info-item__desc">office@flerco.com</div>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <img alt="" class="contact-info-item__icon" src="$/images/icons/clock-white.svg" />
                            <div class="contact-info-item-content">
                                <div class="contact-info-item__title">{{ $t('common.contact_us.contact_info.hours') }}</div>
                                <div class="contact-info-item__desc">
                                    {{ $t('common.contact_us.contact_info.hours_value') }}<br>
                                    {{ $t('common.contact_us.contact_info.hours_value_weekend') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive } from 'vue';
import Button from '@/Components/Common/Buttons/Button.vue';

const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const form = reactive({
    name: '',
    contact: '',
    topic: '',
    message: ''
});

const errors = reactive({
    name: '',
    contact: '',
    topic: '',
    message: ''
});

const submitForm = async () => {
    isSubmitting.value = true;
    successMessage.value = '';
    errorMessage.value = '';
    
    // Clear previous errors
    Object.keys(errors).forEach(key => {
        errors[key] = '';
    });

    try {
        const response = await fetch('/feedback/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(form)
        });

        console.log(response)

        if (response.ok) {
            successMessage.value = 'Thank you for your feedback! We will get back to you soon.';
            // Reset form
            Object.keys(form).forEach(key => {
                form[key] = '';
            });
        } else {
            const data = await response.json();
            if (data.errors) {
                // Handle validation errors
                Object.keys(data.errors).forEach(key => {
                    if (errors.hasOwnProperty(key)) {
                        errors[key] = data.errors[key][0];
                    }
                });
            } else {
                errorMessage.value = 'Something went wrong. Please try again.';
            }
        }
    } catch (error) {
        errorMessage.value = 'Network error. Please check your connection and try again.';
    } finally {
        isSubmitting.value = false;
    }
};
</script>
<style lang="scss" scoped>
.contact-us {
    padding-top: 56px;
    background: linear-gradient(180deg, #1F7D8F, #182955);

    .section-desc {
        color: #CFCFCF;
    }

    @media screen and (max-width: $breakpoint-xl) {
        padding-left: 1rem;
        padding-right: 1rem;
    }


    @media screen and (max-width: $breakpoint-sm) {
       padding-top: 80px;

       .contact-info {
           display: none;
       }

       .section-desc {
            padding-bottom: 1rem;
       }
    }
}

.contacts {
    display: flex;
    justify-content: space-between;
    gap: 80px;
    margin-top: 104px;

    .btn-primary {
        margin-top: 1rem;
    }

    @media screen and (max-width: $breakpoint-sm) {
        margin-top: 1rem;
    }
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .success-message {
        background-color: #d4edda;
        color: #155724;
        padding: 12px 16px;
        border-radius: 4px;
        border: 1px solid #c3e6cb;
        margin-bottom: 16px;
    }

    .error-message {
        background-color: #f8d7da;
        color: #721c24;
        padding: 12px 16px;
        border-radius: 4px;
        border: 1px solid #f5c6cb;
        margin-bottom: 16px;
    }

    .error-text {
        color: #dc3545;
        font-size: 12px;
        margin-top: 4px;
        display: block;
    }

    input.error,
    textarea.error {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    @media screen and (max-width: $breakpoint-sm) {
        width: 100%;

        .btn-primary {
            margin-top: 0.5rem;
        }
    }
}

.contact-info {
    background-color: $primary-color;
    padding: 27px 32px;
    border-radius: 12px;
    height: fit-content;

    &-title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }
}

.contact-info-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-info-item {
    display: flex;
    gap: 1rem;
    align-items: center;

    &-content {
        display: flex;
        flex-direction: column;
        gap: .25rem;
    }

    &__icon {
        width: 30px;
        height: 30px;
    }

    &__desc {
        color: #D8D8D8;
        font-size: 13px;
        font-weight: 400;
    }
}
</style>
