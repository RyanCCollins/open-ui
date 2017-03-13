const styled = require('styled-components').default;
const { css } = require('styled-components');
import sizeMap from './maps';

const backgroundCss = ({ background, backgroundColor }) => {
  if (!background) {
    return css`
      background: ${(props) => props.backgroundColor};
    `;
  }
  return css`
    background: url(${(props) => props.background}) no-repeat center center ${(props) => props.parallax ? 'fixed' : ''};
    background-size: cover;
  `;
};

export default styled.div`
  ${(props) => backgroundCss(props)}
  min-height: ${(props) => sizeMap[props.size || 'small']};
  text-align: center;
  width: 100%;
`;
