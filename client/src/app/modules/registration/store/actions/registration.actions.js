import axios from 'axios';
import _ from '@lodash';

export const GET_STATUS = '[STAFF REGISTRATION] GET MODULE DATA';
export const SUBMIT_STEP = '[STAFF REGISTRATION] SUBMIT REGISTRATION STEP';
export const UPDATE_STATUS = '[STAFF REGISTRATION] UPDATE REGISTRATION STATUS';

export function getRegistrationStatus(user) {
  const request = axios.get(
    `/api/staff/registration/${user ? user.uid : null}`
  );

  return dispatch =>
    request.then(response => {
      dispatch({
        type: GET_STATUS,
        data: response.data
      });
    });
}

export function submitRegistrationStep() {}
