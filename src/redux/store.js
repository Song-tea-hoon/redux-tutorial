import {createStore} from "redux";
import {allReducer} from "./reducers";
// 1.초기화 reducer를 createStore함수 안에 넣어주면서 store를 생성한다.
export const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());