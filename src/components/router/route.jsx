import React from 'react'
import { ReactDOM } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import HomePage from './homPage';

const router=createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>,
    }
]);

function Route() {
    return (
        <div>
        <RouterProvider router={router} />
        </div>
    )
}
export default  Route;