import profile from'../images/profile.png'
const Header = () => {
    return (
        <div className='flex mx-10 mt-4 justify-between border-b-2 p-2 items-center'>
             <h1 className='text-4xl font-bold'>Knowledge Chafe</h1>
             <img src= {profile} alt="" />
        </div>
    );
};

export default Header;