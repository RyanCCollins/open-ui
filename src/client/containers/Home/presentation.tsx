import * as React from 'react';
import { Hero, Box, Headline, Heading, Section, Article } from 'ui';
import { ThemeColorMap } from '../../types';

interface Props extends React.Props<typeof HomePresentation> {
  children?: JSX.Element;
  theme: ThemeColorMap;
}
export default function HomePresentation({
  children,
  theme,
}: Props): JSX.Element {
  return (
    <Box>
      <Hero
        parallax
        background="https://github.com/RyanCCollins/cdn/blob/master/space.jpg?raw=true"
        boxSize="full"
      >
        <Box full style={{ flexGrow: 1 }} alignItems="center" justifyContent="center">
          <Headline margin="none" fontSize="xlarge" className="headline" color={theme.white1}>
            Open UI
          </Headline>
          <Heading margin="none" tag="h5" color={theme.black3}>
            Open source user interface components
          </Heading>
        </Box>
      </Hero>
      <Section pad="large" alignItems="center" justifyContent="center" backgroundColor={theme.offwhite}>
        <Headline className="headline" color={theme.black1}>
          About
        </Headline>
        <Article
          alignItems="center"
          backgroundColor={theme.white1}
          pad="medium"
          boxSize="xlarge"
          content={`# Coming soon`}
        />
      </Section>
    </Box>
  );
}
