import '@styles/index.css';
import 'react';
import ReactDom from 'react-dom';
import App from './App';

const root = document.getElementById('app');
if (root) {
  ReactDom.createRoot(root).render(
    <App />
  );
}