import { Link } from 'react-router-dom';
import Images from '~/assets';
import Banner from '~/components/Banner';
import CardBlog from '~/components/CardBlog';

const Home = () => {
    return (
        <div>
            <Banner img={Images.banner} />
            <div className='container-box'>
                <div>
                    <CardBlog img={Images.card} flex />
                    <div className='grid grid-cols-3 gap-6 my-10'>
                        <CardBlog img={Images.card} />
                        <CardBlog img={Images.card} />
                        <CardBlog img={Images.card} />
                    </div>
                    <CardBlog flex img={Images.card2} />
                </div>
                <button className='border-transparent rounded-md float-right my-4 bg-purple-600 text-white flex items-center gap-2 p-3'>
                    See more <img src='/public/Vector.svg' alt='' />
                </button>
            </div>
        </div>
    );
};

export default Home;
