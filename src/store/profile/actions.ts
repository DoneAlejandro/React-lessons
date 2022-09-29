import { ChangeProfileName, ToggleProfile } from "./types";

export const TOGGLE_PROFILE = "PROFILE::TOGGLE_PROFILE";
export const CHANGE_PROFILE_NAME = "PROFILE::CHANGE_PROFILE_NAME";

export const toggleProfile = (): ToggleProfile => ({
  type: TOGGLE_PROFILE,
});

export const changeProfileName = (name: string): ChangeProfileName => ({
  type: CHANGE_PROFILE_NAME,
  name,
});
