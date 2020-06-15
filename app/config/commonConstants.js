const NetworkRequestTypes = {
  delete: 'DELETE',
  get: 'GET',
  post: 'POST',
  put: 'PUT',
};

const UIConstants = {
  APP_HEADER: 'appHeader',
  BUTTON_TEXT: 'buttonText',
  DEFAULT_INPUT_TEXT: 'inputText',
  DEFAULT_TEXT: 'defaultText',
  INPUT_HEADER: 'inputHeader',
  LIGHT_GRAY_TEXT: 'lightGrayText',
  LOGIN_HEADER: 'loginHeader',
  LOGOUT_TEXT: 'logoutText',
  MATERIAL_TAB_TEXT: 'materialTabText',
  MATERIAL_TITLE: 'materialTitle',
  PROFILE_MOBILE: 'profileMobile',
  PROFILE_NAME: 'profileName',
  PROFILE_TITLE: 'profileTitleText',
  BRAND_CATEGORY: 'brandCategory',
  BRAND_NAME: 'brandName',
  CARD_HEADING: 'cardHeading',
};

const Messages = {
  commonExceptionMessage: 'unable to process request please try again letter.',
};

const APIPath = {
  getOTP: 'otp/emailmobile',
  resendOTP: 'otp/emailmobile',
  verifyOTP: 'otp',
  welcomeScreenMasters: 'facilities',
};
const SCREEN_NAME = {
  SIGN_IN: 'SignIn',
  SPLASH: 'Splash',
  WELCOME: 'Welcome',
  HOME: 'Home',
  POKEMON_DETAIL: 'Detail',
};

module.exports = {
  ...Messages,
  ...NetworkRequestTypes,
  ...UIConstants,
  APIPath,
  SCREEN_NAME,
};
