import * as React from 'react';
const { HeroButton, ButtonComponent } = require('./styles');
import { Size } from './types';

export interface Props extends React.HTMLProps<Button> {
  color?: string;
  backgroundColor?: string;
  boxSize?: Size;
  isHero?: boolean;
  borderColor?: string;
  plain?: boolean;
}

class Button extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    boxSize: 'medium',
    isHero: false,
  };
  public render() {
    const {
      isHero,
      children,
      ...rest,
    } = this.props;
    if (isHero) {
      return (
        <HeroButton
          {...rest}
        >
          {children}
        </HeroButton>
      );
    }
    return (
      <ButtonComponent
        {...rest}
      >
        {children}
      </ButtonComponent>
    );
  }
}

export default Button;
