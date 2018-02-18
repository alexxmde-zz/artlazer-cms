/* eslint-disable default-case */
import translate from 'counterpart';
import lang from '../lang';

export const isLoggedIn = () => Boolean(localStorage.token && localStorage.user);

Object.keys(lang).forEach((locale) => {
  translate.registerTranslations(locale, {
    ...lang[locale],
  });
});

export const getLocale = () => navigator.languages[0].substr(0, 2);
export const t = key => translate(key, {
  locale: getLocale(),
});

export const makeErrorMessage = (error) => {
  switch (error.errno) {
    case 'ETIMEDOUT':
      return t('errors.ETIMEDOUT');
  }

  return `Server says ${error.response.body.message}`;
};
