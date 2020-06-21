import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import styled from 'styled-components';
import {PDText} from 'app/components';
import {CommonActions} from '@react-navigation/native';
import Images from 'app/config/Images';
import {resetAndGoToScreen} from 'app/helpers/Utils';
import {SCREEN_NAME} from 'app/config/commonConstants';
import {SafeAreaView, useSafeArea} from 'react-native-safe-area-context';
import {rs} from 'app/theme/responsiveSize';
import colors from 'app/theme/colors';
import {getPokemonIcon, getPokemonBackgroundColor} from 'app/helpers/Utils';

export default function PokemonDetail(props) {
  const {
    route: {params = {}},
    navigation,
  } = props;

  const insets = useSafeArea();
  function AppLogo() {
    return (
      <View
        style={{
          flex: 1,
          marginLeft: rs[20],
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginVertical: rs[25],
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.dispatch(CommonActions.goBack());
          }}>
          <BackIcon source={Images.backIcon} />
          <PDText
            numberOfLines={1}
            ellipsizeMode="tail"
            shouldTranslate={false}
            textStyle={{
              color: colors.WHITE,
              fontSize: rs[25],
              fontWeight: 'bold',
              marginLeft: rs[15],
            }}>
            {params.name.english}
          </PDText>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginBottom: rs[30]}}>
          {params.type.map(type => {
            return (
              <View
                key={type}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: rs[90],
                  height: rs[28],
                  margin: rs[4],
                  borderRadius: rs[30],
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                }}>
                <PDText
                  textStyle={{
                    marginHorizontal: rs[4],
                    fontSize: rs[15],
                    color: colors.WHITE,
                  }}
                  ellipsizeMode="tail"
                  shouldTranslate={false}>
                  {type}
                </PDText>
              </View>
            );
          })}
        </View>
        <CardIcon
          resizeMode="contain"
          source={{uri: getPokemonIcon(params.id)}}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: getPokemonBackgroundColor(params.type),
        justifyContent: 'flex-end',
      }}>
      <AppLogo />
      <Card>
        {Object.entries(params.base).map(([key, value]) => {
          return (
            <View
              key={key}
              style={{
                flexDirection: 'row',
                margin: rs[10],
              }}>
              <PDText
                textStyle={{
                  width: rs[150],
                  marginHorizontal: rs[4],
                  fontSize: rs[15],
                  color: colors.NATURAL_BLACK,
                }}
                ellipsizeMode="tail"
                shouldTranslate={false}>
                {key}
              </PDText>
              <PDText
                textStyle={{
                  marginHorizontal: rs[4],
                  fontSize: rs[15],
                  color: colors.NATURAL_BLACK,
                }}
                ellipsizeMode="tail"
                shouldTranslate={false}>
                {value}
              </PDText>
            </View>
          );
        })}
      </Card>
    </View>
  );
}
const Card = styled.View`
  padding: ${`${rs[42]}px`};
  background: ${props => props.theme.colors.WHITE};
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
`;

const CardIcon = styled.Image`
  width: ${`${rs[250]}px`};
  align-self: center;
  height: ${`${rs[250]}px`};
`;
const BackIcon = styled.Image`
  height: 15px;
  width: 7.5px;
`;
