import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import "antd/dist/antd.css";
import '../styles/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
  document.getElementById('root')
);
