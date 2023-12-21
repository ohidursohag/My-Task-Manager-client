import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoutes from './Router/Routes'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'aos/dist/aos.css';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
      <HelmetProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={myCreatedRoutes} />
            <Toaster />
          </QueryClientProvider>
        </AuthProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
