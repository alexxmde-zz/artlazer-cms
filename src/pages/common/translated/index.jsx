import React from 'react';
import { t } from '../../../utils';

export default function (WrappedComponent) {
  return props => (
    <WrappedComponent t={t} {...props} />
  );
}
