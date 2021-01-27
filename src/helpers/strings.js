// TODO: Documentation

const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.substring(1);
};

const titleCase = (string) => {
  const splitString = string.split(" ");
  return splitString.map((s) => capitalizeFirstLetter(s)).join(" ");
};

export { titleCase, capitalizeFirstLetter };
