// @flow
import React from 'react';
import styled from 'styled-components';
import {rs} from 'app/theme/responsiveSize';
import {
  APP_HEADER,
  BUTTON_TEXT,
  DEFAULT_INPUT_TEXT,
  DEFAULT_TEXT,
  INPUT_HEADER,
  LIGHT_GRAY_TEXT,
  LOGIN_HEADER,
  LOGOUT_TEXT,
  MATERIAL_TAB_TEXT,
  MATERIAL_TITLE,
  PROFILE_MOBILE,
  PROFILE_NAME,
  PROFILE_TITLE,
  BRAND_CATEGORY,
  BRAND_NAME,
  CARD_HEADING,
} from 'app/config/commonConstants';
import i18n from 'app/config/i18n';
export default function IBText({
  textStyle = {},
  children,
  shouldTranslate = true,
  type = DEFAULT_TEXT,
  ...restProps
}) {
  let TextComponent;
  switch (type) {
    default:
      TextComponent = defaultText;
  }
  const textValue = shouldTranslate ? i18n.t(children) : children;
  return (
    <TextComponent style={{...textStyle}} {...restProps}>
      {textValue}
    </TextComponent>
  );
}
const defaultText = styled.Text`
  font-family: Roboto;
  color: ${props => props.theme.colors.NATURAL_BLACK};
  font-size: ${`${rs[16]}px`};
`;
