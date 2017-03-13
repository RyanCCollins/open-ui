import * as React from 'react';
import Hero from './';

interface Props extends React.Props<typeof Hero> {
  backgroundColor?: string;
  background?: string;
  parallax?: boolean;
  size?: 'small' | 'medium' | 'large' | 'full';
}

export default Props;
