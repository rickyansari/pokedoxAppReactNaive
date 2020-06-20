import React, {PureComponent} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {getPokemonIcon, getPokemonBackgroundColor} from 'app/helpers/Utils';
import {PDText} from 'app/components';
import {rs, widthPercentageToDP} from 'app/theme/responsiveSize';
import {SCREEN_NAME} from 'app/config/commonConstants';
import colors from 'app/theme/colors';
import Images from 'app/config/Images';
import styled from 'styled-components';

export default class RenderItem extends PureComponent {
  render() {
    const {item, index} = this.props;
    const cardIcon = getPokemonIcon(item.id);
    const cardBackGroundColor = getPokemonBackgroundColor(item.type);
    return (
      <ListItemContainer
        cardBackGround={cardBackGroundColor}
        key={`${item.id}_${index}`}
        onPress={() => {
          const {navigation} = this.props;
          navigation.navigate(SCREEN_NAME.POKEMON_DETAIL, item);
        }}>
        <TouchableOpacity
          style={{
            padding: rs[12],
            alignSelf: 'flex-end',
            position: 'absolute',
          }}
          onPress={() => {
            this.props.removePokeMon();
          }}>
          <Image
            source={Images.cross}
            tintColor={colors.NATURAL_BLACK}
            style={{width: rs[10], height: rs[10], opacity: 0.6}}
          />
        </TouchableOpacity>
        <CardText
          textColor={colors.WHITE}
          ellipsizeMode="tail"
          shouldTranslate={false}>
          {item.name.english}
        </CardText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            {item.type.map(type => {
              return (
                <View
                  key={type}
                  style={{
                    width: rs[60],
                    height: rs[18],
                    margin: rs[4],
                    borderRadius: rs[30],
                  }}>
                  <PDText
                    textStyle={{
                      flex: 1,
                      marginHorizontal: rs[4],
                      fontSize: rs[13],
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
          <CardIcon resizeMode="contain" source={{uri: cardIcon}} />
        </View>
      </ListItemContainer>
    );
  }
}

const CardIcon = styled.Image`
  width: ${`${rs[80]}px`};
  align-self: flex-end;
  height: ${`${rs[90]}px`};
  margin: ${`${rs[10]}px`};
`;

const CardText = styled(PDText)`
  font-size: ${`${rs[20]}px`};
  align-self: flex-start;
  margin-top: ${`${rs[10]}px`};
  margin-left: ${`${rs[12]}px`};
  font-weight: bold;
  color: ${props => props.textColor};
`;

const ListItemContainer = styled.TouchableOpacity`
  width: ${`${widthPercentageToDP(48)}px`};
  height: ${`${rs[140]}px`};
  align-items: center;
  align-self: center;
  border-radius: ${`${rs[15]}px`};
  margin: ${`${widthPercentageToDP(1)}px`};
  background-color: ${props => props.cardBackGround};
`;
