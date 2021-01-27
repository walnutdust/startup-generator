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

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

const TwoColWithButton = ({
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://www.google.com",
  imageCss = null,
  imageDecoratorBlobCss = null,
}) => {
  const theme = useContext(ThemeContext);

  // eslint-disable-next-line no-unused-vars
  const [random, startUp] = useContext(StartupContext);
  const services = startUp.services;
  const heading = services.header;
  const subheading = services.subHeader;
  const description = services.description;

  const buttonRounded = random.nextBool();
  const imageRounded = random.nextBool();
  const imageBorder = random.nextBool();
  const imageShadow = random.nextBool();
  const imageDecoratorBlob = random.nextBool();
  const textOnLeft = random.nextBool();

  let clonedHeading = heading.split(" ");
  const clonedHeadingEnd = clonedHeading.pop();
  const clonedHeadingStart = clonedHeading.join(" ");

  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container id="features">
      <TwoColumn>
        <ImageColumn>
          <TeamIllustration
            css={[
              imageCss,
              theme.textColor500,
              imageRounded && tw`rounded`,
              imageBorder && tw`border`,
              imageShadow && tw`shadow`,
            ]}
          />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading css={theme.textColor500}>{subheading}</Subheading>
            <Heading>
              {clonedHeadingStart}{" "}
              <span css={theme.textColor500}>{clonedHeadingEnd}</span>
            </Heading>
            <Description>{description}</Description>
            <PrimaryButton
              buttonRounded={buttonRounded}
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

export default TwoColWithButton;
