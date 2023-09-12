import PropTypes from 'prop-types';

const Vlog = ({ blog,handleBookmark}) => {
    const  {vlog_title,cover,author_img,author_name,reading_time,hash_tags} = blog
    // console.log(blog);
    return (
        <div className='mb-[72px]'>
            <img className='rounded-lg' src= {cover} alt="" />
            <div className='flex justify-between items-center my-6'>
                <div className='flex'>
                    <img className='rounded-full w-[60px]' src= {author_img} alt="" />
                    <div className='ml-6 '>
                         <h2 className='text-2xl'>{author_name}</h2>
                         <p>14 July 2023</p>
                    </div>
                </div>
                <div className='flex'>
                    <h3><span> {reading_time}</span> min read</h3>
                    <button onClick={ ( ) =>handleBookmark (blog)} className='ml-2 bg-blue-500 w-[100px] text-white rounded-md'> Book Mark</button>
                </div>
            </div>
            <h2 className='font-bold text-5xl'>{vlog_title}</h2>

            <p className='my-3'>
                 {
                    hash_tags.map ( (tag,idx) =>  <span key={idx}> <a href="">{ tag }</a></span>)
                 }
            </p>
            <p>
                <a className='text-blue-600' href="">Read More</a>
            </p>
            <hr />
            
        </div>
    );
};

Vlog.propTypes = {
    blog :PropTypes.object.isRequired,
    handleBookmark :PropTypes.func
}
export default Vlog;