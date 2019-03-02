import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/store"; // store.js를 찾고 없으면 store/index.js파일을 찾는다.
import {updateUser} from "./redux/actions";

// HOC방식으로 app을 감싸서 store를 바인딩
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

store.dispatch(updateUser('jane'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
