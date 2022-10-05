import { StoreOfState } from "src/store";

export const selectVisible = (state: StoreOfState) => state.profile.visible;
export const selectName = (state: StoreOfState) => state.profile.name;
