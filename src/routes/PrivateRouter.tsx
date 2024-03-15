import AdminLayout from '~/layouts/AdminLayout';
import ListBlog from '~/pages/Admins/Blog/ListBlog';

const PrivateRouter = [
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            { index: true, element: <ListBlog /> },
            { path: 'blogs', element: <ListBlog /> },
            { path: 'users', element: <div>user</div> },
        ],
    },
];

export default PrivateRouter;
