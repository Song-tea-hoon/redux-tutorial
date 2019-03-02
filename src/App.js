import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.props.username.user}</p>
          <button onClick={() => this.props.updateUser('kim')}>KIM</button>
        </header>
      </div>
    );
  }
}

// props에 store를 맵핑
// [props name] : state.[store name]
const mapStateToProps = (state) => ({
  products: state.productReducer,
  username: state.userReducer
});

// props에 action을 dispath하는 function을 내려받는다.
// const mapActionToProps = (dispatch) => ({
//   modifyUser: (name) => dispatch(updateUser(name))
// })

// connect 함수를 통해  props에다가 store를 연결
export default connect(mapStateToProps, {updateUser})(App);
// export default App;
