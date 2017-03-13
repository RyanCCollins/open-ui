import * as React from 'react';
import Component from './styles';
import Props from './types';

export default function Hero({
  children,
  ...rest,
}: Props): JSX.Element {
  return (
    <Component {...rest}>
      {children}
    </Component>
  );
};
