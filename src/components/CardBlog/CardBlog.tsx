import { Link } from 'react-router-dom';

const CardBlog: React.FC<{ flex?: boolean; img: string }> = ({ flex, img }) => {
    const ImageBox: React.FC<{ img: string }> = ({ img }) => {
        return (
            <Link to={'blog/1'}>
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
                        <h1 className='font-bold lg:text-3xl text-gray-600 lg:mb-8'>Long time no see</h1>
                        <div className='lg:w-full'>
                            <p className='text-gray-400  lg:pe-4 '>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ad delectus eius
                                ullam iure facilis totam laboriosam amet.
                            </p>
                            <div className='lg:my-5 lg:flex lg:justify-between lg:items-center lg:pe-4'>
                                <p className='text-gray-400 font-sans lg:text-sm'>May 20th 2020</p>
                                <Link className='lg:text-sm font-bold text-gray-600' to='details/1'>
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[60%]'>
                        <ImageBox img={img} />
                    </div>
                </div>
            )}
            {!flex && (
                <div className='flex flex-col justify-center lg:mt-6'>
                    <div className='lg:my-4'>
                        <ImageBox img={img} />
                    </div>
                    <div className=''>
                        <h1 className='font-bold lg:text-2xl text-gray-600 lg:mb-5'>Long time no see</h1>
                        <div className='w-full'>
                            <p className='text-gray-400  lg:pe-4 lg:text-md'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ad delectus eius
                                ullam iure facilis totam laboriosam amet.
                            </p>
                            <div className='lg:my-5 lg:flex lg:justify-between lg:items-center lg:pe-4'>
                                <p className='text-gray-400 font-sans lg:text-sm '>May 20th 2020</p>
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
