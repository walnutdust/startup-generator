import React, { useContext } from "react";
import { ThemeContext } from "contexts/themeContext";
import styled from "styled-components";
import { StartupContext } from "contexts/startUpContext";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2  focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-200`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

const SimpleContactUs = () => {
  const theme = useContext(ThemeContext);
  // eslint-disable-next-line no-unused-vars
  const [random, startUp] = useContext(StartupContext);
  const contactUs = startUp.contactUs;
  const heading = contactUs.header;

  return (
    <Container>
      <Content>
        <FormContainer css={theme.bgColor900}>
          <div tw="mx-auto max-w-4xl">
            <h2>{heading}</h2>
            <form action="#">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="name"
                      placeholder="E.g. John Doe"
                      css={theme.hocusBorder500}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="E.g. john@mail.com"
                      css={theme.hocusBorder500}
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Your Message</Label>
                    <TextArea
                      id="message-input"
                      name="message"
                      placeholder="E.g. I would love to chat about ..."
                      css={theme.hocusBorder500}
                    />
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton
                css={[theme.textColor500, theme.hocusTextColor800]}
                type="submit"
                value="Submit"
              >
                Submit
              </SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 css={theme.textColor700} />
        </FormContainer>
      </Content>
    </Container>
  );
};

export default SimpleContactUs;
