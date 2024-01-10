import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider } from 'react-router-dom'
import { router } from './Mainroute/Router.jsx'
import Authprovider from './Firebase/Authprovider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
<QueryClientProvider client={queryClient}>
      <div className='bg-black'>
        <Authprovider>
          <RouterProvider router={router} />

        </Authprovider>
      </div>
</QueryClientProvider>

  </React.StrictMode>,
)
