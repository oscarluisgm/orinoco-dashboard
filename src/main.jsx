import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrimeReactProvider} from 'primereact/api';
import 'primeicons/primeicons.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";

        

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider value={{ unstyled: false }}>
    <App />
  </PrimeReactProvider>
)
