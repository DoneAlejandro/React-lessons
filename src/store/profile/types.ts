import { CHANGE_PROFILE_NAME, TOGGLE_PROFILE } from "./actions";

export interface ToggleProfile {
  type: typeof TOGGLE_PROFILE;
}

export interface ChangeProfileName {
  type: typeof CHANGE_PROFILE_NAME;
  name: string;
}

export type ActionsProfileType = ToggleProfile | ChangeProfileName;
