import axios from 'axios';
import { useEffect, useState } from 'react';
import Images from '~/assets';
import Banner from '~/components/Banner';
import CardBlog from '~/components/CardBlog';
import useWindowSize from '~/hooks/useWindowSize';

const Home = () => {
    const windowSize = useWindowSize();
    const [blogs, setBlogs] = useState<IBLog[]>([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get<IBLog[]>(`http://localhost:3000/blogs`);
                console.log(data);

                setBlogs(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <div>
            <Banner img={Images.banner} />
            <div className='max-w-[580px] mx-auto lg:max-w-[1050px] pb-20'>
                <div>
                    {blogs.length >= 1 && <CardBlog item={blogs[0]} flex={windowSize.windowWidth > 640} />}
                    <div className='lg:grid lg:grid-cols-3 lg:gap-6 lg:my-10'>
                        {blogs.map((item, index) => {
                            if (index !== 0 && index !== blogs.length - 1) {
                                return <CardBlog key={index} item={item} />;
                            }
                        })}
                    </div>
                    {blogs.length >= 5 && (
                        <CardBlog flex={windowSize.windowWidth > 640} item={blogs[blogs.length - 1]} />
                    )}
                </div>
                <button className='border-transparent rounded-md float-right my-4 bg-purple-600 text-white flex items-center gap-2 p-3'>
                    See more <img src={Images.vector} alt='' />
                </button>
            </div>
        </div>
    );
};

export default Home;
