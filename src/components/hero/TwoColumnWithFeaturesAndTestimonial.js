import React, { useContext } from "react";
import { ThemeContext } from "contexts/themeContext";
import { StartupContext } from "contexts/startUpContext";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase from "components/headers/light.js"; // PrimaryLink, // NavLink, // NavLinks,
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import {
  Container,
  ContentWithVerticalPadding,
} from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as QuotesLeftIconBase } from "images/quotes-l.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg";

const Header = tw(HeaderBase)`max-w-none`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(
  Column
)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(
  SectionHeading
)`text-left text-primary-900 leading-snug xl:text-6xl`;
const Description = tw(
  SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`;
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-900 text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`;
const QuotesLeftIcon = tw(
  QuotesLeftIconBase
)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`;
const Quote = tw.blockquote``;
const CustomerName = tw.p`mt-4 font-bold`;
const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`;

const TwoColumnWithFeaturesAndTestimonial = ({
  primaryButtonUrl = "#services",
  primaryButtonText = "Get Started",
}) => {
  const theme = useContext(ThemeContext);

  const navLinks = [
    [
      { href: "#hero", text: "About" },
      { href: "#features", text: "Features" },
      { href: "#testimonials", text: "Testimonials" },
    ],
  ];
  // eslint-disable-next-line no-unused-vars
  const [random, startUp] = useContext(StartupContext);
  const slogan = startUp.slogan;
  const testimonial = startUp.testimonials.testimonials[0];
  const features = startUp.features;
  const subslogan = startUp.subslogan;

  const heading = `${slogan.start} ${slogan.emphasis}`;
  const imageDecoratorBlob = random.nextBool();
  const buttonRounded = random.nextBool();

  const buttonRoundedCss = buttonRounded && tw`rounded-full`;

  return (
    <>
      <Header links={navLinks} />
      <Container id="hero">
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading css={theme.textColor900}>{heading}</Heading>
              <Description>{subslogan}</Description>
              <PrimaryButton
                as="a"
                href={primaryButtonUrl}
                css={[
                  buttonRoundedCss,
                  theme.bgColor500,
                  theme.hocusBgColor700,
                ]}
              >
                {primaryButtonText}
              </PrimaryButton>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon css={theme.textColor500} />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={testimonial.person.picture} />
                {imageDecoratorBlob && <ImageDecoratorBlob />}
                <Testimonial css={theme.bgColor900}>
                  <QuotesLeftIcon css={theme.textColor500} />
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerName>{testimonial.person.name}</CustomerName>
                  <CustomerCompany>{testimonial.company}</CustomerCompany>
                </Testimonial>
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
};

export default TwoColumnWithFeaturesAndTestimonial;
