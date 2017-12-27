import React from 'react';
import translate from 'counterpart';
import lang from '../../../lang';

Object.keys(lang).forEach((locale) => {
  translate.registerTranslations(locale, {
    ...lang[locale],
  });
});

export default function (WrappedComponent) {
  const t = key => translate(key, {
    locale: navigator.languages[0].substr(0, 2),
  });

  return props => (
    <WrappedComponent t={t} {...props} />
  );
}
