import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider } from 'react-router-dom'
import { router } from './Mainroute/Router.jsx'
import Authprovider from './Firebase/Authprovider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='bg-black'>
<Authprovider>
        <RouterProvider router={router} />

</Authprovider>
   </div>
  </React.StrictMode>,
)
