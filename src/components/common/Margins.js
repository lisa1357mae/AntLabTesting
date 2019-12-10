/**
 * @providesModule Margins
 */
import {Dimensions} from 'react-native';

const headerHeight = 63;
const footerHeight = 55;
const commonMargin = 23;
const commonMarginLeft = 18;
const commonMarginLeftSmall = 8;
const commonMarginRight = 18;
const commonMarginRightSmall = 8;
const commonMarginBottom = 23;
const commonMarginTop = 56;

const margins = {
  headerHeight,
  footerHeight,
  commonMargin,
  commonMarginTop,
  commonMarginBottom,
  commonMarginLeft,
  commonMarginLeftSmall,
  commonMarginRight,
  commonMarginRightSmall,
  viewHeight: Dimensions.get('screen').height - headerHeight,
  screenHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width,
};

export const isSmallDevice = () => margins.screenWidth < 375;

export default margins;
