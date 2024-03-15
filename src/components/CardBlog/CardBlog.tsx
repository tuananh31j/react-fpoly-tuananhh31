import { Link } from 'react-router-dom';

interface ICardBlogProps {
    flex?: boolean;
    item: IBLog;
}
const CardBlog: React.FC<ICardBlogProps> = ({ flex, item }) => {
    const ImageBox: React.FC<{ img: string; id: string | number }> = ({ img, id }) => {
        return (
            <Link to={`blog/${id}`}>
                <img
                    className='w-full object-cover hover:scale-110 transition-transform ease-in-out'
                    src={img}
                    alt=''
                />
            </Link>
        );
    };
    return (
        <div className='my-8'>
            {flex && (
                <div className='lg:flex lg:justify-between lg:gap-x-10 lg:items-center'>
                    <div className='lg:w-[40%]'>
                        <h1 className='font-bold lg:text-3xl text-gray-600 lg:mb-8'>{item.title}</h1>
                        <div className='lg:w-full'>
                            <p className='text-gray-400  lg:pe-4 '>{item.description}</p>
                            <div className='lg:my-5 lg:flex lg:justify-between lg:items-center lg:pe-4'>
                                <p className='text-gray-400 font-sans lg:text-sm'>{item.date}</p>
                                <Link className='lg:text-sm font-bold text-gray-600' to='details/1'>
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[60%]'>
                        <ImageBox id={item.id} img={item.image} />
                    </div>
                </div>
            )}
            {!flex && (
                <div className='flex flex-col justify-center lg:mt-6'>
                    <div className='lg:my-4'>
                        <ImageBox id={item.id} img={item.image} />
                    </div>
                    <div className=''>
                        <h1 className='font-bold lg:text-2xl text-gray-600 lg:mb-5'>{item.title}</h1>
                        <div className='w-full'>
                            <p className='text-gray-400  lg:pe-4 lg:text-md'>{item.description}</p>
                            <div className='lg:my-5 lg:flex lg:justify-between lg:items-center lg:pe-4'>
                                <p className='text-gray-400 font-sans lg:text-sm '>{item.date}</p>
                                <Link className='lg:text-sm font-bold text-gray-600' to='details/1'>
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardBlog;
