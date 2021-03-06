import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './test';
import Table from './table';
import Update from './update';

ReactDOM.render(
  <React.StrictMode>
    <Test />
    <Table />
    <Update />
  </React.StrictMode>,
  document.getElementById('root')
);
