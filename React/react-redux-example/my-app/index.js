const { createStore } = require("redux");

//!초기 state(데이터)를 정의한다.
const initState = {
  name: "김코딩",
  posts: [],
};

//!action creator
//!action 은 객체로 data 를 받으면 type 과 payload(여기에서 data) 가 reducer 에게 전달된다.
const changeUsername = (data) => {
  return {
    type: "CHANGE_NAME",
    data,
  };
};

const addPost = (post) => {
  return {
    type: "ADD_POST",
    post,
  };
};
//! reducer: 실제 메소드로 데이터를 변경해준다. 
//! initState(prevState)와 action 을 받아 type 에 따라 
//! payload를 활용하여 특정 method 를 실행시킨다. 
const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...prevState,
        name: action.data,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.post],
      };
    default:
      return prevState;
  }
};

//! Store
//! createStore 메소드를 활용. createStore(reducer, [preloadedState], [enhancer])
//! reducer: returns the next state tree, given the current state tree and an action to handle.
//! [preloadedState]: initState  
//! [enhandcer]: to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc.
const store = createStore(reducer, initState);

//! dispatch
//! The base dispatch function always synchronously sends an action to the store's reducer, 
//! along with the previous state returned by the store, to calculate a new state. 
//! It expects actions to be plain objects ready to be consumed by the reducer.
store.dispatch(changeUsername("김제이"));
store.dispatch(addPost("포스트1"));
store.dispatch(addPost("포스트2"));

console.log(store.getState());
