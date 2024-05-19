import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage.jsx'
import QuotePage from './Pages/QuotePage/QuotePage.jsx'
import RestaurantPage from './Pages/RestaurantPage/RestaurantPage.jsx'
import Foodpage from './Pages/FoodPage/FoodPage.jsx'
import ContactPage from './Pages/ContactPage/ContactPage.jsx'
import Foodrecipe from './components/FoodCard/Foodrecipe.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<HomePage/>}/>
    <Route path='quote' element={<QuotePage/>}/>
    <Route path='restaurant' element={<RestaurantPage/>}/>
    <Route path='food' element={<Foodpage/>}/>
    <Route path='contact' element={<ContactPage/>}/>
    <Route path='food/:id' element={<Foodrecipe/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
