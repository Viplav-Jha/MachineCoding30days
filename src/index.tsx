import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 
    <App left={0} right={0} handleChecked={function (item: void): void {
    throw new Error('Function not implemented.');
  } } moveLeft={function (): void {
    throw new Error('Function not implemented.');
  } } moveRight={function (): void {
    throw new Error('Function not implemented.');
  } }/>
);

