import { useI18n } from 'vue-i18n';

export function hexToRgba(hex, alpha) {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

export function showHeaderMessage(message, type) {
    const el = $('.navbar-message');
    el.show();
    el.html(message)

    if (type == 'checklist') {
        $('.plus-message').show();
    }

    setTimeout(() => {
        el.hide();
        $('.plus-message').hide();
    }, 3000)
}

export function localized(translationsObject){
    const fallbackLocale = 'uk';
    const { locale } = useI18n();

    if (translationsObject[locale.value] && translationsObject[locale.value] !== '') {
        return translationsObject[locale.value];
    } 

    return translationsObject[fallbackLocale] ?? '';
}

export async function makeRequest(url, options = {}) {
    const defaultOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        },
        ...options
    };

    try {
        const response = await fetch(url, defaultOptions);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Request failed');
        }
        
        return data;
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}