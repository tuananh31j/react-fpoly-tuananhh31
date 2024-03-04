import MainLayout from '~/layouts/MainLayout';
import DetailsBlog from '~/pages/DetailsBlog';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';

const PublicRouter = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'blog/:id', element: <DetailsBlog /> },
        ],
    },
    { path: '*', element: <NotFound /> },
];

export default PublicRouter;
