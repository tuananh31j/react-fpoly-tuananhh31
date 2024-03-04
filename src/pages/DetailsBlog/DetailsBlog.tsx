import Images from '~/assets';
import Banner from '~/components/Banner';
import SectionBlog from '~/components/SectionBlog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
const DetailsBlog = () => {
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
        <div className='container-box'>
            <Banner img={Images.card} />
            <div>
                <div className='my-10 border-b-2 border-gray-200 pb-10'>
                    <h1 className='font-bold text-4xl text-gray-700 mb-2'>Long time no see</h1>
                    <div className='flex gap-5'>
                        <p className='font-semibold text-gray-700'>Written by John doe</p>
                        <p className='font-normal text-gray-400'>Monday May 20</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus facere, quibusdam nulla
                        repellendus alias iusto dolores fuga itaque consectetur officia eveniet corporis ab rerum quis
                        laboriosam dignissimos provident. Repellat? Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Non perspiciatis, modi voluptatem expedita dignissimos animi voluptatibus reiciendis
                        similique harum, saepe voluptate quam repudiandae sed nesciunt unde reprehenderit tenetur,
                        voluptates quae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
                        repudiandae obcaecati veritatis tenetur quas provident impedit recusandae, soluta, accusamus
                        voluptates illum magnam error temporibus neque nobis expedita ipsa alias quosLorem ipsum dolor
                        sit amet consectetur adipisicing elit. Magnam natus facere, quibusdam nulla repellendus alias
                        iusto dolores fuga itaque consectetur officia eveniet corporis ab rerum quis laboriosam
                        dignissimos provident. Repellat? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                        perspiciatis, modi voluptatem expedita dignissimos animi voluptatibus reiciendis similique
                        harum, saepe voluptate quam repudiandae sed nesciunt unde reprehenderit tenetur, voluptates
                        quae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae
                        obcaecati veritatis tenetur quas provident impedit recusandae, soluta, accusamus voluptates
                        illum magnam error temporibus neque nobis expedita ipsa alias quos Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Magnam natus facere, quibusdam nulla repellendus alias iusto
                        dolores fuga itaque consectetur officia eveniet corporis ab rerum quis laboriosam dignissimos
                        provident. Repellat? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non perspiciatis,
                        modi voluptatem expedita dignissimos animi voluptatibus reiciendis similique harum, saepe
                        voluptate quam repudiandae sed nesciunt unde reprehenderit tenetur, voluptates quae. Lorem
                        ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae obcaecati veritatis
                        tenetur quas provident impedit recusandae, soluta, accusamus voluptates illum magnam error
                        temporibus neque nobis expedita ipsa alias quos Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magnam natus facere, quibusdam nulla repellendus alias iusto dolores fuga
                        itaque consectetur officia eveniet corporis ab rerum quis laboriosam dignissimos provident.
                        Repellat? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non perspiciatis, modi
                        voluptatem expedita dignissimos animi voluptatibus reiciendis similique harum, saepe voluptate
                        quam repudiandae sed nesciunt unde reprehenderit tenetur, voluptates quae. Lorem ipsum, dolor
                        sit amet consectetur adipisicing elit. Voluptatibus repudiandae obcaecati veritatis tenetur quas
                        provident impedit recusandae, soluta, accusamus voluptates illum magnam error temporibus neque
                        nobis expedita ipsa alias quos!
                    </p>
                </div>
                <SectionBlog />
                <SectionBlog />
                <SectionBlog />
                <SectionBlog />
                <SectionBlog />
                <SectionBlog />
            </div>
            {scrollHeigh > 900 && (
                <button onClick={handleScrollBack} className='fixed top-[70vh] right-14 '>
                    <FontAwesomeIcon
                        icon={faArrowUp}
                        className='bg-purple-600 text-white w-8 p-4 h-8 box-content border-transparent rounded-full'
                    />
                </button>
            )}
        </div>
    );
};

export default DetailsBlog;
