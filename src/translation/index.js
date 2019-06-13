import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import nl from 'react-intl/locale-data/nl';

import enUS from './local/en';
import nlNL from './local/nl';

addLocaleData([...en, ...nl]);

const translations = {
    'en-US': enUS,
    nl: nlNL
};

const locale =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    'en-US';

const flattenMessages = (nestedMessages, prefix = '') => {
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            // eslint-disable-next-line no-param-reassign
            messages[prefixedKey] = value;
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
};

const messages = flattenMessages(translations[locale] || translations['en-US']);
const intlProvider = new IntlProvider({ locale, messages });
const { intl } = intlProvider.getChildContext();

const t = id => {
    return intl.formatMessage({ id });
};

export default t;
