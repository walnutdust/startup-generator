import React, { useContext } from "react";
import { ThemeContext } from "contexts/themeContext";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line no-unused-vars
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import { StartupContext } from "contexts/startUpContext";
const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const ImageContainer = styled.span`
  ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
  img {
    ${tw`w-8 h-8`}
  }
`;

const CardTitle = tw.span`mt-2 font-bold text-xl leading-none text-primary-500`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}

  .textContainer {
    ${tw`mt-6 text-center`}
  }
  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const DashedBorderSixFeatures = ({ ...props }) => {
  const theme = useContext(ThemeContext);

  const [random, startUp] = useContext(StartupContext);
  let heading, cards;

  if (random.nextBool()) {
    heading = startUp.services.header;
    cards = startUp.services.services;
  } else {
    heading = startUp.qualities.header;
    cards = startUp.qualities.qualities;
  }

  let clonedHeading = heading.split(" ");
  const clonedHeadingEnd = clonedHeading.pop();
  const clonedHeadingStart = clonedHeading.join(" ");

  return (
    <Container id="features" {...props}>
      <ThreeColumnContainer>
        <Heading>
          {clonedHeadingStart}{" "}
          <span css={theme.textColor500}>{clonedHeadingEnd}</span>
        </Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card css={theme.borderColor500}>
              <ImageContainer css={[theme.borderColor500, theme.textColor500]}>
                {card.imageSrc}
              </ImageContainer>
              <span className="textContainer">
                <CardTitle css={theme.textColor500}>
                  {card.title || "Fully Secure"}
                </CardTitle>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};

export default DashedBorderSixFeatures;
