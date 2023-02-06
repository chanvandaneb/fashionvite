import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../Layout';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductList from '../pages/ProductList';
import Cart from '../pages/Cart';

import SignIn from '../pages/SignIn'
import Register from '../pages/Register'

const router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "product",
                element: <Product/>
            },
            {
                path: "about-us",
                element: <ProductList/>
            },
            {
                path: "news-event",
                element: <Cart/>
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    },
    {
        path: '/sign-in',
        element: <SignIn/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
])

export default router