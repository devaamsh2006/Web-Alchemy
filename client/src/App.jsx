import { useState } from 'react'
import User from './components/User'
import Rental from './components/Rental'
import Farmer from './components/Farmer'
import Home from './components/Common/Home'
import Orders from './components/User/Orders'
import Products from './components/User/Products'
import Signout from './components/Common/Signout'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'

const browserRouter=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"signin",
        element:<Signin/>
      },
      {
        path:"signup",
        element:<Signup/>
      },
      {
        path:"user-Profile/:email",
        element:<User/>,
        children:[
          {
            path:"products",
            element:<Products/>
          },
          {
            path:"",
            element:< Navigate to="products"/>
          },
          {
            path:"orders",
            element:<Orders/>
          },
          {
            path:"signout",
            element:<Signout/>
          }
        ]
      },
      {
        path:"admin-Profile/:email",
        element:<Farmer/>,
        children:[
          {
            path:"shop",
            element:<Articles/>
          },
          {
            path:"products",
            element:<UserProfiles/>
          },
          {
            path:"",
            element:< Navigate to="shop"/>
          },
          {
            path:"signout",
            element:<Signout/>
          },{
            path:"orders",
            element:<Orders/>
          }
        ]
      },
      {
        path:"author-Profile/:email",
        element:<Rental/>,
        children:[
          {
            path:"rent",
            element:<Articles/>
          },
          {
            path:"orders",
            element:<Articlesbyid/>
          },
          {
            path:"",
            element:< Navigate to="rent"/>
          },
          {
            path:"signout",
            element:<PostArticle/>
          }
        ]
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UserAuthor>
        <RouterProvider router={browserRouter} />
    </UserAuthor>
  </StrictMode>,
)

