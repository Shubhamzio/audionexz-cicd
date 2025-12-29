import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename ="/https://shubhamzio.github.io/audionexz-cicd/">
    <App />
 </BrowserRouter>
  </StrictMode>,
)
