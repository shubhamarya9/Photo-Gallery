import { database } from "../database/config";

export function startAddingPost(post) {
  return dispatch => {
    return database
      .ref("posts")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPosts(post));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function uploadPosts(post) {
  return dispatch => {
    return database
      .ref("posts")
      .once("value")
      .then(snapshot => {
        let posts = [];
        snapshot.forEach(childSnapshot => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      });
  };
}
export function startLoadingComments() {
  return dispatch => {
    return database
      .ref("comment")
      .once("value")
      .then(snapshot => {
        let comments = {};
        snapshot.forEach(childSnapshot => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        dispatch(loadComments(comments));
      });
  };
}
export function loadComments(comments) {
  return {
    type: "LOAD_COMMENTS",
    comments
  };
}
export function removingPosts(index, id) {
  return dispatch => {
    return database
      .ref(`posts/${id}`)
      .remove()
      .then(() => {
        dispatch(removePosts(index));
      });
  };
}
export function startAddingComment(comment, postId) {
  return dispatch => {
    return database
      .ref("comment/" + postId)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postId));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function removePosts(index) {
  return {
    type: "REMOVE_POST",
    index
  };
}
export function addPosts(post) {
  return {
    type: "ADD_POST",
    post
  };
}
export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId
  };
}
export function loadPosts(posts) {
  return {
    type: "LOAD_PHOTOS",
    posts
  };
}
