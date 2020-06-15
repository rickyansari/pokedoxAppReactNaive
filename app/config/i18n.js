import i18n from 'i18n-js';

import en from './locales/en.json';
import hi from './locales/hi.json';

i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = {en, hi};

export default i18n;
