
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import ShopContextProvider from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter basename='/E-Commerce-site/'>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HashRouter>,
)

