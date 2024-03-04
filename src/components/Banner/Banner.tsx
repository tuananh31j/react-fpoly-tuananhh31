const Banner: React.FC<{ img: string }> = ({ img }) => {
    return (
        <div>
            <img className='w-full my-10' src={img} alt='' />
        </div>
    );
};
export default Banner;
