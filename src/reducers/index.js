import { ENABLE_SCROLL_PENDING, DISABLE_SCROLL_PENDING } from '../actions';

const initialState = {
  isScrollPending: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_SCROLL_PENDING:
      return Object.assign({ ...state, isScrollPending: true });
    case DISABLE_SCROLL_PENDING:
      return Object.assign({ ...state, isScrollPending: false });
    default:
      return state;
  }
};

export default reducer;
