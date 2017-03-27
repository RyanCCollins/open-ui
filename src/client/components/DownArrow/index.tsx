import * as React from 'react';
import { SvgIcon } from 'ui';

export default function DownArrow(): JSX.Element {
  return (
    <SvgIcon style={{ stroke: 'white', height: 33, width: 33 }} viewBox="0 0 59.414 59.414">
      <polygon
        style={{ stroke: 'white', fill: 'white' }}
        points="58,14.146 29.707,42.439 1.414,14.146 0,15.561 29.707,45.268 59.414,15.561 "
      />
    </SvgIcon>
  );
};
