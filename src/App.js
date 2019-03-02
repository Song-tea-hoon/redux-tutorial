import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.props.username.user}</p>
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

// connect 함수를 통해  props에다가 store를 연결
export default connect(mapStateToProps)(App);
// export default App;
