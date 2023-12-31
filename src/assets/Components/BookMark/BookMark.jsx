
import { PropTypes } from 'prop-types';
const BookMark = ( {bookmark}) => {
    const {vlog_title} = bookmark
    return (
        <div className='text-xl font-medium bg-orange-300 ml-6 mt-5 rounded-xl h-[72px] w-[380px]'>
            <h3 className='text-center p-4'> { vlog_title}</h3>
        </div>
    );
};
BookMark.propTypes= {
    bookmark :PropTypes.object
}

export default BookMark;