import {isObject} from 'app/helpers/Primitives';
import {realm} from './schema';
var uuid = require('uuid');

function generatePrimaryKey() {
  return uuid.v1();
}

function createUser(user) {
  const primaryKey = generatePrimaryKey();
  const userData = {
    id: primaryKey,
    ...user,
  };
  try {
    let {success: userExists} = getCurrentUser();
    if (userExists) {
      const {success: allUserDeleted} = deleteAllUsers();
      if (!allUserDeleted) return {success: allUserDeleted};
    }
    realm.write(() => {
      realm.create('User', userData);
    });
    let {success, currentUser} = getCurrentUser();
    if (success) {
      return {success, currentUser};
    } else {
      return {success};
    }
  } catch (e) {
    return {success: false};
  }
}
function deleteAllUsers() {
  try {
    realm.write(() => {
      let allUsers = realm.objects('User');
      realm.delete(allUsers);
    });
    return {success: true};
  } catch (e) {
    return {success: false};
  }
}

function updateUser(updatedData) {
  try {
    let {success: userExists, currentUser} = getCurrentUser();
    if (userExists) {
      realm.write(() => {
        realm.create('User', {id: currentUser.id, ...updatedData}, 'modified');
      });
      let {success, currentUser: updatedUser} = getCurrentUser();
      if (success) {
        return {success, currentUser: updatedUser};
      } else {
        return {success};
      }
    } else {
      return {success: false};
    }
  } catch (e) {
    return {success: false};
  }
}

function getCurrentUser() {
  const currentUser = realm.objects('User').filtered('mobile !=$0', null)[0];
  if (currentUser && isObject(currentUser)) {
    return {success: true, currentUser};
  }
  return {success: false};
}

module.exports = {
  createUser,
  getCurrentUser,
  deleteAllUsers,
  updateUser,
};
