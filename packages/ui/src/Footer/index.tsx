import * as React from 'react';
import { FooterComponent } from './styles';
import BoxProps from '../Box/types';

export default function Footer({
  children,
  ...rest,
}: BoxProps): JSX.Element {
  return (
    <FooterComponent {...rest}>
      {children}
    </FooterComponent>
  );
};
