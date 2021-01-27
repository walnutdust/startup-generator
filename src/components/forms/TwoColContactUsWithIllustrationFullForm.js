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
import { ReactComponent as EmailIllustrationSrc } from "images/email-illustration.svg";

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

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

const TwoColContactUsWithIllustrationFullForm = ({
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
}) => {
  const theme = useContext(ThemeContext);

  const [random, startUp] = useContext(StartupContext);
  const contactUs = startUp.contactUs;
  const heading = contactUs.header;
  const subheading = contactUs.subHeader;
  const description = contactUs.description;
  const textOnLeft = random.nextBool();

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <EmailIllustrationSrc
            css={[
              theme.textColor500,
              tw`w-full rounded bg-contain bg-no-repeat bg-center h-full`,
            ]}
          />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && (
              <Subheading css={theme.textColor500}>{subheading}</Subheading>
            )}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod}>
              <Input
                css={theme.hocusBorder500}
                type="email"
                name="email"
                placeholder="Your Email Address"
              />
              <Input
                css={theme.hocusBorder500}
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <Input
                css={theme.hocusBorder500}
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <Textarea
                css={theme.hocusBorder500}
                name="message"
                placeholder="Your Message Here"
              />
              <SubmitButton
                css={[theme.bgColor500, theme.hocusBgColor700]}
                type="submit"
              >
                {submitButtonText}
              </SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default TwoColContactUsWithIllustrationFullForm;
