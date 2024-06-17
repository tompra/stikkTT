import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
    Layout,
    Error,
    Home,
    Collections,
    Contact,
    Aftercare,
} from './pages/index';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'collections',
                element: <Collections />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'aftercare',
                element: <Aftercare />,
            },
        ],
    },
]);

const App: React.FC = (): JSX.Element => {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
};
export default App;
