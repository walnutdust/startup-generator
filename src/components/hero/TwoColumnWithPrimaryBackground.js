import React, { useContext } from "react";
import { ThemeContext } from "contexts/themeContext";
import { StartupContext } from "contexts/startUpContext";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase from // PrimaryLink as PrimaryLinkBase, // NavLink as NavLinkBase, // NavLinks, // LogoLink as LogoLinkBase,
"../headers/light.js";
import {
  Container as ContainerBase,
  ContentWithVerticalPadding,
  Content2Xl,
} from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as ServerIllustrationImageSrc } from "images/server-illustration-2.svg";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
// const NavLink = tw(
//   NavLinkBase
// )`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
// const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
// const PrimaryLink = tw(
//   PrimaryLinkBase
// )`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(
  SectionHeading
)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(
  SectionDescription
)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
// const Image = tw.img`w-144 ml-auto`;

const TwoColumnWithPrimaryBackground = ({
  primaryButtonText = "Start Your 15 Day Free Trial",
  primaryButtonUrl = "#services",
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
  const subslogan = startUp.subslogan;

  const heading = `${slogan.start} ${slogan.emphasis}`;

  return (
    <PrimaryBackgroundContainer css={theme.bgColor900} id="hero">
      <Content2Xl>
        <Header links={navLinks} />
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{subslogan}</Description>
                <PrimaryButton
                  css={[theme.bgColor500, theme.hocusBgColor700]}
                  as="a"
                  href={primaryButtonUrl}
                >
                  {primaryButtonText}
                </PrimaryButton>
              </TextColumn>
              <IllustrationColumn>
                <ServerIllustrationImageSrc
                  tw="w-144 ml-auto"
                  css={theme.textColor500}
                />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};

export default TwoColumnWithPrimaryBackground;
