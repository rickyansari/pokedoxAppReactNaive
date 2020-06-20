import {CommonActions} from '@react-navigation/native';
import {isArray} from 'app/helpers/Primitives';
import colors from 'app/theme/colors';
const ImageURL =
  'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/';

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

function getPokemonIcon(id) {
  let newId = String(id);
  if (newId) {
    newId = newId.padStart(3, '0');
  } else {
    newId = '001';
  }
  return `${ImageURL}${newId}.png`;
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
  resetAndGoToScreen,
  getNestedObjectPropertyByPath,
};
