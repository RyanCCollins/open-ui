import * as React from 'react';
import { Footer } from 'ui';
import { SetIsMobileAction } from './actions';
import { State } from './state';
import { Main } from './styles';

export type StateProps = State;

export interface DispatchProps {
  actions: {
    setIsMobile: (isMobile: boolean) => SetIsMobileAction,
  };
};

export type FeatureProps = React.Props<Feature> & StateProps & DispatchProps;

export default class Feature extends React.Component<FeatureProps, undefined> {
  constructor(props) {
    super(props);
  };

  public componentDidMount() {
    window.addEventListener('resize', this.handleMobile);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleMobile);
  }

  private handleMobile = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile !== this.props.isMobile) {
      this.props.actions.setIsMobile(isMobile);
    }
  }

  public render() {
    const {
      children,
    } = this.props;

    return (
      <Main>
        {children}
        <Footer boxSize="small" backgroundColor="#888888">
          Hello footer
        </Footer>
      </Main>
    );
  }
}
