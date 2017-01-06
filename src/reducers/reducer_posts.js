import { FETCH_POSTS, FETCH_POST, FETCH_STREAMS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null, all_str: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_STREAMS:
      return { ...state, all_str: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
