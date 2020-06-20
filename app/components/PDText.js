// @flow
import React from 'react';
import styled from 'styled-components';
import {rs} from 'app/theme/responsiveSize';
import {DEFAULT_TEXT} from 'app/config/commonConstants';

export default function PDText({
  textStyle = {},
  children,
  type = DEFAULT_TEXT,
  ...restProps
}) {
  let TextComponent;
  switch (type) {
    default:
      TextComponent = defaultText;
  }

  return (
    <TextComponent style={{...textStyle}} {...restProps}>
      {children}
    </TextComponent>
  );
}
const defaultText = styled.Text`
  font-family: Roboto;
  color: ${props => props.theme.colors.NATURAL_BLACK};
  font-size: ${`${rs[16]}px`};
`;
