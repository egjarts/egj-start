import jwt from 'jsonwebtoken';

import mock from './../mock';
import _ from '@lodash';

let registrationDB = {
  users: [
    {
      uid: 'data-model',
      modules: ['staff.registration'],
      moduleData: [
        {
          id: 'staff.registration',
          completed: false,
          steps: [{ id: 'x', completed: new Date(2018, 5, 5) }]
        }
      ]
    },
    {
      uid: 'BmSDAAm9pzOdRX0UTYPD81sXLuN2',
      moduleData: [
        {
          id: 'staff.registration',
          completed: false
        }
      ]
    }
  ]
};

mock.onGet(new RegExp('/api/staff/registration/*.*')).reply(request => {
  const token = request.headers['X-Auth-Token'];
  const uid = jwt.decode(token).sub;
  const user = _.find(registrationDB.users, { uid });
  const response =
    user && user.moduleData
      ? _.find(user.moduleData, { id: 'staff.registration' })
      : null;
  return [200, response];
});
