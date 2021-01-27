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
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const DecoratorBlob = tw(
  SvgDotPattern
)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
  ${(props) => [
    props.iconRoundedFull && tw`rounded-full`,
    props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`,
  ]}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const FeatureHeading = tw.div`ml-3 font-bold text-xl`;

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-12 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

const TwoColWithTwoHorizontalFeaturesAndButton = ({
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://google.com",
  iconContainerCss = null,
}) => {
  const theme = useContext(ThemeContext);

  let heading, subheading, cards, description;
  const [random, startUp] = useContext(StartupContext);
  if (random.nextBool()) {
    const services = startUp.services;
    heading = services.header;
    subheading = services.subHeader;
    cards = services.services.slice(0, 2);
    description = services.description;
  } else {
    const qualities = startUp.qualities;
    heading = qualities.header;
    subheading = qualities.subHeader;
    cards = qualities.qualities.slice(0, 2);
    description = qualities.description;
  }

  const iconFilled = random.nextBool();
  const buttonRounded = random.nextBool();
  const imageRounded = random.nextBool();
  const imageBorder = random.nextBool();
  const imageShadow = random.nextBool();
  const showDecoratorBlob = random.nextBool();
  const textOnLeft = random.nextBool();
  const iconRoundedFull = random.nextBool();

  let clonedHeading = heading.split(" ");
  const clonedHeadingEnd = clonedHeading.pop();
  const clonedHeadingStart = clonedHeading.join(" ");

  return (
    <Container id="features">
      <TwoColumn>
        <ImageColumn>
          <TeamIllustration
            css={[
              theme.textColor500,
              imageRounded && tw`rounded`,
              imageBorder && tw`border`,
              imageShadow && tw`shadow`,
              tw`w-full`,
            ]}
          />
          {showDecoratorBlob && <DecoratorBlob />}
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
                  <FeatureHeadingContainer>
                    <FeatureIconContainer
                      iconFilled={iconFilled}
                      iconRoundedFull={iconRoundedFull}
                      css={[
                        feature.iconContainerCss || iconContainerCss,
                        theme.bgColor500,
                      ]}
                    >
                      {feature.imageSrc}
                    </FeatureIconContainer>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                  </FeatureHeadingContainer>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </Feature>
              ))}
            </Features>

            <PrimaryButton
              buttonRounded={buttonRounded}
              as="a"
              href={primaryButtonUrl}
            >
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default TwoColWithTwoHorizontalFeaturesAndButton;
