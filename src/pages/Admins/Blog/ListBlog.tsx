import { useEffect, useState } from 'react';
import FormBlog from './FormBlog';
import axios from 'axios';
import swal from 'sweetalert';

const ListBlog = () => {
    const [blogs, setBlogs] = useState<IBLog[]>([]);

    const [reRenderList, setReRenderList] = useState<boolean>(false);

    const handleDelete = (id: string | number) => {
        swal({
            title: 'Bạn có chắc là muốn xóa không?',
            icon: 'warning',
            buttons: ['Hủy', 'Ok'],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios
                    .delete(`http://localhost:3000/blogs/${id}`)
                    .then(() => setBlogs(blogs.filter((item) => item.id !== id)));
            }
        });
    };

    useEffect(() => {
        (async () => {
            const { data } = await axios.get<IBLog[]>('http://localhost:3000/blogs');
            setBlogs(data);
        })();
    }, [reRenderList]);
    const onReRender = () => {
        setReRenderList(!reRenderList);
    };
    return (
        <div className='m-2 w-full '>
            <div className='text-center my-8 font-semibold text-xl'>
                <button>Danh sách Blog</button>
            </div>
            <div>
                <FormBlog onReRender={onReRender}>
                    <button className='bg-green-400 border-transparent rounded-md p-2 my-4 text-white'>
                        Thêm Blog
                    </button>
                </FormBlog>

                <table className='min-w-full divide-y divide-gray-200 border border-gray-300'>
                    <thead className='bg-gray-50'>
                        <tr className='text-center'>
                            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300'>
                                STT
                            </th>
                            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300'>
                                Tiêu đề
                            </th>
                            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300'>
                                Ảnh
                            </th>
                            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300'>
                                Nội dung
                            </th>
                            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300'>
                                Ngày đăng
                            </th>
                            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300'>
                                Tác giả
                            </th>
                            <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Acions
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                        {blogs.map((item, i) => (
                            <tr>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300'>
                                    {i + 1}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300'>
                                    {item.title}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300'>
                                    <img src={item.image} alt='ok' className='h-10 w-10 rounded-full' />
                                </td>
                                <td className='px-6 py-4  text-sm text-gray-500 border-r border-gray-300 max-w-[200px]'>
                                    {item.description}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300'>
                                    {item.date}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300'>
                                    {item.author}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className='text-red-500 hover:text-red-700'
                                    >
                                        Xóa
                                    </button>
                                    <FormBlog onReRender={onReRender} id={item.id}>
                                        <button className='ml-4 text-blue-500 hover:text-blue-700'>Sửa</button>
                                    </FormBlog>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ListBlog;
