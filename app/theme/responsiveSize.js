import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const figmaScreenHeight = 812;

function getResponsiveSize(size) {
  //converting size into percentage of figma height and than passing to the heightPercentageToDP.
  return Math.round(heightPercentageToDP((size / figmaScreenHeight) * 100));
}

const arrayOfSizeFigmaScreenHeight = [...Array(figmaScreenHeight)].map(
  (v, i) => i + 1,
);

const rs = arrayOfSizeFigmaScreenHeight.reduce((responsiveSizes, currSize) => {
  responsiveSizes[currSize] = getResponsiveSize(currSize);
  return responsiveSizes;
}, {});

module.exports = {
  widthPercentageToDP,
  heightPercentageToDP,
  getResponsiveSize,
  rs,
};
