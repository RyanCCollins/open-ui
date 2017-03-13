import * as React from 'react';
import Hero from './';

interface Props extends React.HTMLProps<typeof Hero> {
  backgroundColor?: string;
  background?: string;
  parallax?: boolean;
  boxSize?: 'small' | 'medium' | 'large' | 'full';
}

export default Props;
