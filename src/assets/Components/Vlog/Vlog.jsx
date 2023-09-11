import PropTypes from 'prop-types';

const Vlog = ({ blog }) => {
    const  {vlog_title,cover,author_img,author_name,reading_time} = blog
    console.log(blog);
    return (
        <div>
            <img src= {cover} alt="" />
            <div className='flex justify-between items-center my-6'>
                <div className='flex'>
                    <img className='rounded-full w-[60px]' src= {author_img} alt="" />
                    <div className='ml-6 '>
                         <h2 className='text-2xl'>{author_name}</h2>
                         <p>14 July 2023</p>
                    </div>
                </div>
                <div>
                    <h3><span> {reading_time}</span> min read</h3>
                </div>
            </div>
            <h2 className='font-bold text-5xl'>{vlog_title}</h2>
            
        </div>
    );
};

Vlog.propTypes = {
    blog :PropTypes.object.isRequired
}
export default Vlog;