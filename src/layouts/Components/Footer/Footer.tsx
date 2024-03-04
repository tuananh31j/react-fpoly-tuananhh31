import Images from '~/assets';

const Footer = () => {
    return (
        <div className='border-t-2 my-4 border-gray-200 mt-20'>
            <div className='container-box flex justify-between  py-10'>
                <div className='flex gap-2 w-full items-center '>
                    <img src='/public/logo.svg' alt='' />{' '}
                    <span className='font-normal text-sm'> 2020 copyright all rights reserved</span>
                </div>
                <div className='flex gap-6 item-center'>
                    <img src={Images.ig} alt='' />
                    <img src={Images.tw} alt='' />
                    <img src={Images.ld} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Footer;
