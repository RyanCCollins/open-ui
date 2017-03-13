import * as React from 'react';
import { Margin } from '../Paragraph/types';
import Headline from './index';
export type TextAligment = 'center' | 'left' | 'right' | 'justify';
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
export type HeadlineSize = 'small' | 'medium' | 'xlage' | 'xlarge';
export interface SizeMap {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
};

export interface HeadlineProps extends React.HTMLProps<Headline> {
  color?: string;
  textAlign?: string;
  fontSize?: HeadlineSize;
  fontWeight?: FontWeight;
  margin?: Margin;
}
