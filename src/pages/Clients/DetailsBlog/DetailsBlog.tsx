import Images from '~/assets';
import Banner from '~/components/Banner';
import SectionBlog from '~/components/SectionBlog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const DetailsBlog = () => {
    const [blog, setBlog] = useState<IBLog>();
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const { data } = await axios.get<IBLog>(`http://localhost:3000/blogs/${id}`);
            setBlog(data);
        })();
    }, [id]);
    const [scrollHeigh, setScrollHeigh] = useState(0);
    const handleScrollHeigh = () => {
        setScrollHeigh(window.scrollY);
    };
    const handleScrollBack = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setScrollHeigh(0);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScrollHeigh);
        return () => window.removeEventListener('scroll', handleScrollHeigh);
    }, [scrollHeigh]);
    return (
        <div className='max-w-[580px] mx-auto lg:max-w-[1050px]'>
            <Banner img={blog?.image ? blog.image : ''} />
            <div>
                <div className='my-10 border-b-2 border-gray-200 pb-10'>
                    <h1 className='font-bold text-4xl text-gray-700 mb-2'>{blog?.title}</h1>
                    <div className='flex gap-5'>
                        <p className='font-semibold text-gray-700'>{blog?.author}</p>
                        <p className='font-normal text-gray-400'>{blog?.date}</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 text-sm'>{blog?.description}</p>
                </div>
                <SectionBlog />
                <SectionBlog />
                <SectionBlog />
                <SectionBlog />
                <SectionBlog />
                <SectionBlog />
            </div>
            {scrollHeigh > 900 && (
                <button onClick={handleScrollBack} className='fixed lg:top-[70vh] lg:right-14  top-[88vh] right-2'>
                    <FontAwesomeIcon
                        icon={faArrowUp}
                        className='bg-purple-600 text-white lg:w-8 lg:p-4 lg:h-8 w-6 h-6 p-2  box-content border-transparent rounded-full'
                    />
                </button>
            )}
        </div>
    );
};

export default DetailsBlog;
