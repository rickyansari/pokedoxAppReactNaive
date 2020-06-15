import {CommonActions} from '@react-navigation/native';
import moment from 'moment';
import DocumentPicker from 'react-native-document-picker';
import {isString, isArray} from 'app/helpers/Primitives';
import colors from 'app/theme/colors';

function resetAndGoToScreen(routeName, navigation) {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: routeName}],
    }),
  );
}

function getNestedObjectPropertyByPath({
  object = {},
  path = [],
  defaultValue = null,
}) {
  return path.reduce(
    (acc, curr) => (curr && acc[curr] ? acc[curr] : defaultValue),
    object,
  );
}

function formatDate() {
  return moment().format('MMMM D YYYY LT');
}

function removeAllWhiteSpaces(str) {
  if (isString(str)) {
    return str.replace(/\s/g, '');
  }
  return '';
}
function getPokemonIcon(id) {
  let newId = String(id);
  if (newId) {
    if (newId.length === 1) {
      newId = '00' + id;
    }
    if (newId.length === 2) {
      newId = '0' + id;
    }
  } else {
    newId = '001';
  }
  return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${newId}.png`;
}

function getPokemonBackgroundColor(type = []) {
  if (isArray(type)) {
    switch (true) {
      case type.includes('Water'):
        return colors.WATER_CARD;
      case type.includes('Grass'):
        return colors.GRASS_CARD;
      case type.includes('Fire'):
        return colors.FIRE_CARD;
      case type.includes('Ground'):
        return colors.GROUND_CARD;
      case type.includes('Poison'):
        return colors.POISON_CARD;
      case type.includes('Flying'):
        return colors.FLYING_CARD;
      case type.includes('Normal'):
        return colors.NORMAL_CARD;
      case type.includes('Ghost'):
        return colors.GHOST_CARD;
      case type.includes('Psychic'):
        return colors.PSYCHIC_CARD;
      case type.includes('Fighting'):
        return colors.FIGHTING_CARD;
      case type.includes('Electric'):
        return colors.ELECTRIC_CARD;
      case type.includes('Bug'):
        return colors.BUG_CARD;
      case type.includes('Fairy'):
        return colors.FAIRY_CARD;
      case type.includes('Dragon'):
        return colors.DRAGON_CARD;
      case type.includes('Ice'):
        return colors.ICE_CARD;
      case type.includes('Rock'):
        return colors.ROCK_CARD;
      case type.includes('Steel'):
        return colors.STEEL_CARD;
      default:
        return colors.NORMAL_CARD;
    }
  } else {
    return colors.NORMAL_CARD;
  }
}
module.exports = {
  getPokemonIcon,
  getPokemonBackgroundColor,
  formatDate,
  resetAndGoToScreen,
  getNestedObjectPropertyByPath,
  removeAllWhiteSpaces,
};
