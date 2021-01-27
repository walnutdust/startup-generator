import React, { useContext } from "react";
import { ThemeContext } from "contexts/themeContext";
import { StartupContext } from "contexts/startUpContext";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400  transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

const ProfileThreeColGrid = () => {
  const theme = useContext(ThemeContext);

  // eslint-disable-next-line no-unused-vars
  const [random, startUp] = useContext(StartupContext);
  const team = startUp.team;
  const subheading = team.subHeader;
  const heading = team.header;
  const description = team.description;
  const cards = team.members;

  const links = [
    {
      url: "https://twitter.com",
      icon: TwitterIcon,
    },
    {
      url: "https://linkedin.com",
      icon: LinkedinIcon,
    },
    {
      url: "https://github.com",
      icon: GithubIcon,
    },
  ];

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && (
            <Subheading css={theme.textColor500}>{subheading}</Subheading>
          )}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.picture} />
              <CardContent>
                <span className="position" css={theme.textColor500}>
                  {card.job}
                </span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      className="link"
                      href={link.url}
                      css={theme.hocusTextColor500}
                    >
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default ProfileThreeColGrid;
