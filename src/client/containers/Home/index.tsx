import * as React from 'react';
import { ThemeColorMap } from '../../types';
import HomePresentation from './presentation';
const { withTheme } = require('styled-components');

interface Props { theme: ThemeColorMap; }
class Home extends React.Component<Props, undefined> {
  public render() {
    return (
      <HomePresentation theme={this.props.theme} />
    );
  }
}

export default withTheme(Home);
