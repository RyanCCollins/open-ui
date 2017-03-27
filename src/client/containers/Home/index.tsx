import * as React from 'react';
import { ThemeColorMap } from '../../types';
import HomePresentation from './presentation';
const { withTheme } = require('styled-components');

interface Props { theme: ThemeColorMap; }
class Home extends React.Component<Props, undefined> {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }
  private handleScroll() {
    const element = document.getElementById('about-section');
    element.scrollIntoView({ behavior: 'smooth' });
  }
  public render() {
    return (
      <HomePresentation
        onClickDownArrow={this.handleScroll}
        theme={this.props.theme}
      />
    );
  }
}

export default withTheme(Home);
