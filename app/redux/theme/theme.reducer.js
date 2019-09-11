import { CHANGE_PRIMARY_COLOR } from './theme.actions';

const initialState = {
  primaryColor: '#4F6D7A',
};

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color,
      };

    default:
      return state;
  }
};
