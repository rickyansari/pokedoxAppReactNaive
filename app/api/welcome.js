import HTTP from 'app/helpers/Networking/HTTP';
import i18n from 'app/config/i18n';
import {APIPath} from 'app/config/commonConstants';
import {getNestedObjectPropertyByPath} from 'app/helpers/Utils';
import {isArray, isEmptyArray} from 'app/helpers/Primitives';

async function fetchMasters() {
  try {
    // let {success = false, data: facility} = await HTTP.get(
    //   APIPath.welcomeScreenMasters,
    // );
    // // const success = true;
    // // facility = staticMasters;
    // if (success && isArray(facility) && !isEmptyArray(facility)) {
    //   return {success: true, data: facility};
    // } else {
    return {success: true};
    // }
  } catch (e) {
    return {success: false, errors: e.message};
  }
}
module.exports = {fetchMasters};
