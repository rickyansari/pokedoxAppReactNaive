import React, {pure, useEffect, useState} from 'react';
import {
  TextInput,
  FlatList,
  ImageBackground,
  View,
  Dimensions,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import RenderItem from './Listitem';
const {height} = Dimensions.get('window');
import {rs, widthPercentageToDP} from 'app/theme/responsiveSize';
import styled from 'styled-components';
import colors from 'app/theme/colors';
import pokeDoxData from 'app/constants/pokedex';
import {PDText, IBButton} from 'app/components';
import {set} from 'react-native-reanimated';

export default function Home(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [showAddPokemon, setShowAddPokemon] = useState(false);
  const [newPokemon, setNewPokemon] = useState({});

  function AddPokemnon() {
    function onChangeText(name, text) {
      const {[name]: oldValue, ...rest} = newPokemon;

      setNewPokemon({
        ...rest,
        [name]: text,
      });
    }

    return (
      <View style={{width: '80%', alignSelf: 'center', margin: rs[10]}}>
        {['name', 'HP', 'type', 'Attack', 'Defence', 'Speed'].map(item => {
          return (
            <TextInput
              key={item}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => onChangeText(item, text)}
              value={newPokemon[item]}
              placeholder={item}
            />
          );
        })}
        <Button onPress={onChangeText} title="Add" color="#841584" />
      </View>
    );
  }
  return (
    <Wrapper>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <PDText
          numberOfLines={1}
          ellipsizeMode="tail"
          shouldTranslate={false}
          textStyle={{
            color: colors.NATURAL_BLACK,
            fontSize: rs[25],
            fontWeight: 'bold',
            marginVertical: rs[10],
            marginLeft: rs[10],
          }}>
          {'Pokedex'}
        </PDText>
        <TouchableOpacity
          style={{
            backgroundColor: colors.GRASS_CARD,
            width: rs[40],
            height: rs[40],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: rs[60],
            marginRight: '8%',
          }}
          onPress={() => {
            setShowAddPokemon(oldValue => !oldValue);
          }}>
          <PDText
            textStyle={{fontSize: rs[35], color: colors.WHITE}}
            shouldTranslate={false}>
            {'+'}
          </PDText>
        </TouchableOpacity>
      </View>
      {showAddPokemon ? <AddPokemnon /> : null}
      <FlatList
        numColumns={2}
        extraData={pokeDoxData}
        data={pokeDoxData}
        refreshing={refreshing}
        initialNumToRender={20}
        maxToRenderPerBatch={10}
        removeClippedSubviews={true}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        renderItem={({item, index}) => (
          <RenderItem
            item={item}
            index={index}
            pokeDoxData={pokeDoxData}
            navigation={props.navigation}
          />
        )}
      />
    </Wrapper>
  );
}

const Wrapper = styled.KeyboardAvoidingView`
  padding-top: ${`${rs[5]}px`};
  height: 100%;
  width: 100%;
`;
