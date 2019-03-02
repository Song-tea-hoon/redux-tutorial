import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";

//reducer는 순수 함수다. -> 이후에 코드가 집중 되는곳...
const reducer = (state, action) => {
  console.log(state, action)
  if(action.type == 'changeState') {
    return action.payload.newState;
  }
  return 'State'
}

// 1.초기화 reducer를 createStore함수 안에 넣어주면서 store를 생성한다.
const store = createStore(reducer);

// console.log(store, store.getState());

// action은 객체다.
const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
}

// 2. 가입
store.subscribe(() => console.log(store.getState()))

// 3. 액션 디스패치 : dispatch안에 action을 넣어준다. action을 dispatch해준다.
// -> reducer가 실행된다
store.dispatch(action);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
