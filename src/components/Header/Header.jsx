import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center mt-12 mb-8 max-w-screen-xl mx-auto'>
            <h2 className='text-4xl font-bold '>Knowledge Cafe</h2>
            <img src={Profile} alt="Profile picture" />
        </div>
    );
};

export default Header;