import { Link } from 'react-router-dom';
import Images from '~/assets';
import Banner from '~/components/Banner';
import CardBlog from '~/components/CardBlog';
import useWindowSize from '~/hooks/useWindowSize';

const Home = () => {
    const windowSize = useWindowSize();
    console.log(windowSize);

    return (
        <div>
            <Banner img={Images.banner} />
            <div className='max-w-[580px] mx-auto lg:max-w-[1050px]'>
                <div>
                    <CardBlog img={Images.card} flex={windowSize.windowWidth > 640} />
                    <div className='lg:grid lg:grid-cols-3 lg:gap-6 lg:my-10'>
                        <CardBlog img={Images.card} />
                        <CardBlog img={Images.card} />
                        <CardBlog img={Images.card} />
                    </div>
                    <CardBlog flex={windowSize.windowWidth > 640} img={Images.card2} />
                </div>
                <button className='border-transparent rounded-md float-right my-4 bg-purple-600 text-white flex items-center gap-2 p-3'>
                    See more <img src={Images.vector} alt='' />
                </button>
            </div>
        </div>
    );
};

export default Home;
