import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TextInput from "./Component/TextInput";
import BackWardsText from "./Component/BackwardsText";
import AllCaps from "./Component/AllCaps";
import IncreasedFont from "./Component/IncreasedFont";
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<TextInput />, document.getElementById('root'));
ReactDOM.render(<BackWardsText />, document.getElementById('not_root'));
ReactDOM.render(<AllCaps />, document.getElementById("maybe_branch"));
ReactDOM.render(<IncreasedFont />, document.getElementById("or_leaves"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
