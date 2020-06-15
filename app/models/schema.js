//@flow

import Realm from 'realm';

class User {}
User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
    mobile: {type: 'string'},
    name: {type: 'string', optional: true},
    email: {type: 'string', optional: true},
    facility: {type: 'int', optional: true},
    location: {type: 'int', optional: true},
    teleService: {type: 'int', optional: true},
    SXPFacility: {type: 'string', optional: true},
    SXPLocation: {type: 'string', optional: true},
    SXPTeleService: {type: 'string', optional: true},
  },
};

const realm = new Realm({
  schema: [User],
  schemaVersion: 5,
});

export {realm, User};
