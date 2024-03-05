import Images from '~/assets';

const Footer = () => {
    return (
        <div className='border-t-2 my-4 border-gray-200 mt-20'>
            <div className='lg:max-w-[1050px] mx-auto max-w-[580px] flex justify-between  py-10'>
                <div className='lg:flex leading-8 lg:gap-2 lg:w-full items-center '>
                    <img src={Images.logo} alt='' />{' '}
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
