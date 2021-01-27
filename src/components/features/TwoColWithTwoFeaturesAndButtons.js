import React, { useContext } from "react";
import { ThemeContext } from "contexts/themeContext";
import { StartupContext } from "contexts/startUpContext";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as TeamIllustration } from "images/team-illustration-2.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const TwoColWithTwoFeaturesAndButtons = ({
  primaryButtonText = "See Our Portfolio",
  primaryButtonUrl = "https://google.com",
}) => {
  const theme = useContext(ThemeContext);

  const [random, startUp] = useContext(StartupContext);

  let heading, subheading, cards, description;

  if (random.nextBool()) {
    const services = startUp.services;
    heading = services.header;
    subheading = services.subHeader;
    cards = services.services.slice(0, 3);
    description = services.description;
  } else {
    const qualities = startUp.qualities;
    heading = qualities.header;
    subheading = qualities.subHeader;
    cards = qualities.qualities.slice(0, 3);
    description = qualities.description;
  }

  const textOnLeft = random.nextBool();

  let clonedHeading = heading.split(" ");
  const clonedHeadingEnd = clonedHeading.pop();
  const clonedHeadingStart = clonedHeading.join(" ");

  return (
    <Container id="features">
      <TwoColumn>
        <ImageColumn>
          <TeamIllustration css={[theme.textColor500, tw`w-full`]} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading css={theme.textColor500}>{subheading}</Subheading>
            <Heading>
              {clonedHeadingStart}{" "}
              <span css={theme.textColor500}>{clonedHeadingEnd}</span>
            </Heading>
            <Description>{description}</Description>
            <Features>
              {cards.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer
                    css={[theme.borderColor500, theme.textColor500]}
                  >
                    {feature.imageSrc}
                  </FeatureIconContainer>
                  <FeatureText>
                    <FeatureHeading css={theme.textColor500}>
                      {feature.title}
                    </FeatureHeading>
                    <FeatureDescription>
                      {feature.description}
                    </FeatureDescription>
                  </FeatureText>
                </Feature>
              ))}
            </Features>
            <PrimaryButton
              as="a"
              href={primaryButtonUrl}
              css={[theme.bgColor500, theme.hocusBgColor700]}
            >
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default TwoColWithTwoFeaturesAndButtons;
