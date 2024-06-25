

import './App.css';
import { ToastProvider } from './react-common/toast/ToastProvider.tsx';
import { Site } from './examples/Site.tsx';
import {   HashRouter } from 'react-router-dom';

function App() {

  return (

      <ToastProvider>
          <HashRouter  >

                  <Site />

          </HashRouter>
      </ToastProvider>
  )
}

export default App
