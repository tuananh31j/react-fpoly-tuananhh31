import { Link } from 'react-router-dom';

const CardBlog: React.FC<{ flex?: boolean; img: string }> = ({ flex, img }) => {
    const ImageBox: React.FC<{ img: string }> = ({ img }) => {
        return (
            <Link to={'blog/1'}>
                <img className='w-full object-cover' src={img} alt='' />
            </Link>
        );
    };
    return (
        <>
            {flex && (
                <div className='flex justify-between gap-x-10 items-center'>
                    <div className='w-[40%]'>
                        <h1 className='font-bold text-3xl text-gray-600 mb-8'>Long time no see</h1>
                        <div className='w-full'>
                            <p className='text-gray-400  pe-4 '>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ad delectus eius
                                ullam iure facilis totam laboriosam amet.
                            </p>
                            <div className='my-5 flex justify-between items-center pe-4'>
                                <p className='text-gray-400 font-sans text-sm'>May 20th 2020</p>
                                <Link className='text-sm font-bold text-gray-600' to='details/1'>
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-[60%]'>
                        <ImageBox img={img} />
                    </div>
                </div>
            )}
            {!flex && (
                <div className='flex flex-col justify-center mt-6'>
                    <div className='my-4'>
                        <ImageBox img={img} />
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-2xl text-gray-600 mb-5'>Long time no see</h1>
                        <div className='w-full'>
                            <p className='text-gray-400  pe-4 text-md'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ad delectus eius
                                ullam iure facilis totam laboriosam amet.
                            </p>
                            <div className='my-5 flex justify-between items-center pe-4'>
                                <p className='text-gray-400 font-sans text-sm '>May 20th 2020</p>
                                <Link className='text-sm font-bold text-gray-600' to='details/1'>
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CardBlog;
