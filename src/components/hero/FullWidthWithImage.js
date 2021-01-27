import React, { useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ThemeContext } from "contexts/themeContext";
import { StartupContext } from "contexts/startUpContext";
import { titleCase } from "helpers/strings";

import Header, {
  LogoLink,
  // NavLink as NavLinkBase,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

// const NavLink = tw(NavLinkBase)`
//   sm:text-sm sm:mx-6
// `;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`text-gray-100`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;

const FullWidthWithImage = ({
  primaryActionUrl = "#",
  primaryActionText = "Sign Up",
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
  const backgroundImage = startUp.backgroundImage;
  const subslogan = startUp.subslogan;

  const heading = (
    <>
      {titleCase(slogan.start)}
      <wbr />
      <br />
      <span css={theme.textColor500}>{slogan.emphasis}</span>
    </>
  );

  return (
    <Container id="hero">
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{subslogan}</Paragraph>
            <Actions>
              <a
                href={primaryActionUrl}
                css={[theme.bgColor500, theme.hocusBgColor700]}
                className="action primaryAction"
              >
                {primaryActionText}
              </a>
              {/* <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a> */}
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn
          css={{
            backgroundImage: `url("${backgroundImage}");`,
          }}
        ></RightColumn>
      </TwoColumn>
    </Container>
  );
};

export default FullWidthWithImage;
