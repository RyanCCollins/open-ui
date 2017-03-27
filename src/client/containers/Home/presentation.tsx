import * as React from 'react';
import { Hero, Box, Headline, Heading, Section, Article, Button } from 'ui';
import { DownArrow } from 'components';
import { ThemeColorMap } from '../../types';

interface Props extends React.Props<typeof HomePresentation> {
  children?: JSX.Element;
  theme: ThemeColorMap;
  onClickDownArrow: () => void;
}
export default function HomePresentation({
  children,
  theme,
  onClickDownArrow,
}: Props): JSX.Element {
  return (
    <Box>
      <Hero
        parallax
        background="https://github.com/RyanCCollins/cdn/blob/master/space.jpg?raw=true"
        boxSize="full"
      >
        <Box full style={{ flexGrow: 1 }} alignItems="center" justifyContent="center">
          <Headline margin="none" fontSize="xlarge" className="headline fade" color={theme.white1}>
            Open UI
          </Headline>
          <Heading margin="none" tag="h5" color={theme.black3} className="fade">
            Open source user interface components
          </Heading>
          <Box className="down-arrow" style={{ position: 'absolute', bottom: 45 }}>
            <Button plain onClick={onClickDownArrow}>
              <DownArrow />
            </Button>
          </Box>
        </Box>
      </Hero>
      <Section
        id="about-section"
        pad="large"
        alignItems="center"
        justifyContent="center"
        backgroundColor={theme.offwhite}
      >
        <Headline className="headline" color={theme.black1}>
          About
        </Headline>
        <Article
          alignItems="center"
          backgroundColor={theme.white1}
          pad="xlarge"
          boxSize={{ vertical: 'medium', horizontal: 'xlarge' }}
          content={`Open UI is an open source React UI component
            library consisting of a few dozen component primitives
            that you can use to build your next web app.
            \n \n
            More information coming soon! `}
        />
      </Section>
    </Box>
  );
}
