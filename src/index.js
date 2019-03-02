import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";

//reducer는 순수 함수다. -> 이후에 코드가 집중 되는곳
// 다중 reducer -> state가 key:value 쌍으로 바뀐다.
const productReducer = (state = [], action) => {
  return state;
}

const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'updateUser':
      return action.payload;
    case 'addUser':
      return 'addUser'
  }
  return state;
}

const allReducer =  combineReducers({productReducer, userReducer})

// 1.초기화 reducer를 createStore함수 안에 넣어주면서 store를 생성한다.
// chrome reduxdev tool용 script추가
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log(store, store.getState());

// action은 객체다.
const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
}

const updateUserAction = {
  type: 'updateUser',
  payload: {user: 'Tom'}
}

// 2. 가입 -> 액션이 실행되어 값이 변하면 자동으로 구독한다.
store.subscribe(() => console.log(store.getState()))
// 3. 액션 디스패치 :
// dispatch안에 action을 넣어준다.
// 새로운 state, action을 dispatch해준다.
// -> reducer가 실행된다
store.dispatch(updateUserAction);

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
