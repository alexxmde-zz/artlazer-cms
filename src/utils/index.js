import translate from 'counterpart';
import lang from '../lang';

export const isLoggedIn = () => Boolean(localStorage.token && localStorage.user);

Object.keys(lang).forEach((locale) => {
  translate.registerTranslations(locale, {
    ...lang[locale],
  });
});

export const t = key => translate(key, {
  locale: navigator.languages[0].substr(0, 2),
});

export const makeErrorMessage = (errno) => {
  switch (errno) {
    case 'ETIMEDOUT':
      return t('errors.ETIMEDOUT');
    default:
      return t('errors.unknown');
  }
};
