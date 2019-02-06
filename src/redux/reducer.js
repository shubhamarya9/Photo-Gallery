import _posts from "../data/posts";
import { combineReducers } from "redux";

function comments(state = {}, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.postId]) {
        return { ...state, [action.postId]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment]
        };
      }

    default:
      return state;
    case "LOAD_COMMENTS":
      return action.comments;
  }
}
function posts(state = _posts, action) {
  switch (action.type) {
    case "REMOVE_POST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case "ADD_POST":
      return [...state, action.post];
    default:
      return state;
    case "LOAD_PHOTOS":
      return action.posts;
  }
}
const rootReducer = combineReducers({ comments, posts });
export default rootReducer;
