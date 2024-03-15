interface IBannerProps {
    img: string;
}
const Banner: React.FC<IBannerProps> = ({ img }) => {
    return (
        <div>
            <img className='w-full my-10' src={img} alt='' />
        </div>
    );
};
export default Banner;
