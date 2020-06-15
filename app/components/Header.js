// @flow

import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import IBText from 'app/components/IBText';
import styled from 'styled-components/native';
import Images from 'app/config/Images';
import {rs, heightPercentageToDP} from 'app/theme/responsiveSize';
import {APP_HEADER} from 'app/config/commonConstants';
import colors from 'app/theme/colors';

const {width} = Dimensions.get('window');

export default function Header({scene, navigation, previous}) {
  const {options} = scene.descriptor;
  return (
    <Wrapper dimensions={{width: width}}>
      <TitleAndBack
        dimensions={{width: width}}
        onPress={previous ? navigation.goBack : () => {}}>
        {previous ? <BackIcon source={Images.backIcon} /> : null}
      </TitleAndBack>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  justify-content: space-between;
  height: 60px;
  background-color: ${props => props.theme.colors.WHITE};
  flex-direction: row;
`;

const TitleAndBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.WHITE};

  height: 60px;
  padding-left: 22px;
  width: ${({dimensions}) => `${dimensions.width - 100}px`};
`;

const BackIcon = styled.Image`
  tint-color: black;
  height: 15px;
  width: 7.5px;
`;
