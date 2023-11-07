export const ActionTypes = {
  TOGGLE: 'DARK_MODE/TOGGLE',
  SET_DARK_MODE: 'DARK_MODE/SET_DARK_MODE'
};

type SetDarkModePayload = {
  isDarkMode: boolean
}

// actions
const toggle = () => ({
  type: ActionTypes.TOGGLE
});
const setDarkMode = (payload: SetDarkModePayload) => ({
  type: ActionTypes.SET_DARK_MODE,
  payload
});

export const actions = {
  toggle,
  setDarkMode
};

// action types
type Toggle = ReturnType<typeof toggle>;
type SetDarkMode = ReturnType<typeof setDarkMode>;

export type Action =
  & Toggle
  & SetDarkMode;

Object.freeze(ActionTypes);
