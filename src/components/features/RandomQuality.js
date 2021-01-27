import DashedBorderSixFeatures from "components/features/DashedBorderSixFeatures";
import ThreeColSimple from "components/features/ThreeColSimple";
import ThreeColWithSideImage from "components/features/ThreeColWithSideImage";
import ThreeColWithSideImageWithPrimaryBackground from "components/features/ThreeColWithSideImageWithPrimaryBackground";
import TwoColWithTwoFeaturesAndButtons from "components/features/TwoColWithTwoFeaturesAndButtons";
import TwoColWithTwoHorizontalFeaturesAndButton from "components/features/TwoColWithTwoHorizontalFeaturesAndButton";
import ThreeColContactDetails from "components/features/ThreeColContactDetails";

import { useContext } from "react";
import { StartupContext } from "contexts/startUpContext";

const RandomQuality = () => {
  const [random, startUp] = useContext(StartupContext);
  const qualities = startUp.qualities;

  const qualityComponents = [
    DashedBorderSixFeatures,
    ThreeColSimple,
    ThreeColWithSideImage,
    ThreeColWithSideImageWithPrimaryBackground,
    ThreeColContactDetails,
    TwoColWithTwoFeaturesAndButtons,
    TwoColWithTwoHorizontalFeaturesAndButton,
  ];

  const SelectedQuality =
    qualityComponents[random.nextInt() % qualities.length];

  return qualityComponents.map((SelectedQuality) => {
    return (
      <SelectedQuality
        heading={qualities.header}
        subheading={qualities.subHeader}
        description={qualities.description}
        cards={qualities.qualities}
      />
    );
  });
};

export default RandomQuality;
