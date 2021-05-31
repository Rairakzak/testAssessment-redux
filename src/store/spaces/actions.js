import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS";

export const fetchSpacesSuccess = spaces => ({
  type: FETCH_SPACES_SUCCESS,
  payload: spaces,
});


export const fetchSpaces = () => {
    return async (dispatch, getState) => {
      const spacesCount = getState().spaces.length;
      const response = await axios.get(
        `${apiUrl}/spaces?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${spacesCount}`
      );

      dispatch(fetchSpacesSuccess(response.data.spaces.rows));
    };
  };