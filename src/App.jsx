import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/Followers/User";
import Github, { githubInfoLoader } from "./components/Followers/GithubFollowers";

const router=createBrowserRouter([{
    path:'/',
    element:<ShoppingCart />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'about',
        element:<About />
      },{
        path:'contact',
        element:<Contact />
      },{
        path:'/user:/userId',
        element:<User />
      },
      {
        
        path:"github",
        element:<Github />,
        loader:githubInfoLoader
      }
    ]
}])

const App = () => {
  return (
   <RouterProvider router={router} >

   </RouterProvider>
  );
};

export default App;
