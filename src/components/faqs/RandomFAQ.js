import SimpleWithSideImage from "components/faqs/SimpleWithSideImage";
import SingleCol from "components/faqs/SingleCol";
import TwoColumnPrimaryBackground from "components/faqs/TwoColumnPrimaryBackground";

import React, { useContext } from "react";
import { StartupContext } from "contexts/startUpContext";

const RandomFAQ = () => {
  // eslint-disable-next-line no-unused-vars
  const [random, startUp] = useContext(StartupContext);
  const faqObject = startUp.faqs;
  const faqs = faqObject.faqs;
  const heading = faqObject.header;
  const subheading = faqObject.subHeader;
  const description = faqObject.description;

  const faqComponents = [
    SimpleWithSideImage,
    SingleCol,
    TwoColumnPrimaryBackground,
  ];

  const SelectedFAQ = faqComponents[random.nextInt() % faqComponents.length];

  return (
    <SelectedFAQ
      heading={faqs.header}
      subheading={faqs.subHeader}
      description={faqs.description}
      faqs={faqs.faqs}
    />
  );
};

export default RandomFAQ;
