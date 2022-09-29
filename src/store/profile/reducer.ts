import { Reducer } from "redux";
import { CHANGE_PROFILE_NAME, TOGGLE_PROFILE } from "./actions";
import { ActionsProfileType } from "./types";

export interface ProfileState {
  name: string;
  visible: boolean;
}
const initialState: ProfileState = {
  name: "Alex",
  visible: true,
};

export const profileReducer: Reducer<ProfileState, ActionsProfileType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TOGGLE_PROFILE: {
      return {
        ...state,
        visible: !state.visible,
      };
    }
    case CHANGE_PROFILE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }

    default:
      return state;
  }
};
