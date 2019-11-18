import axios from "axios";

export const GET_STATUS = "[STAFF REGISTRATION] GET STATUS";
export const SAVE_STATUS = "[STAFF REGISTRATION] SAVE STATUS";
export const UPDATE_STATUS = "[STAFF REGISTRATION] UPDATE STATUS";

export function getRegistrationStatus(user) {
  const request = axios.get("/api/staff/registration", { params: user });

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_STATUS,
        payload: response.data
      })
    );
}
