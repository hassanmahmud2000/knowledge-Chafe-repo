import { PropTypes } from 'prop-types';
import BookMark from '../BookMark/BookMark';
const Bookmarks = ( {bookmarks,readingTime}) => {


    return (
        <div className="">
            <div className='bg-orange-400 mb-4 ml-6 p-4 h-14 rounded-md'>
             <h1 className="text-2xl font-semibold text-center text-white">Reading Time: {readingTime } min</h1>
            </div>
            <h1 className="text-2xl font-semibold bg-slate-200 text-center p-4 shadow-inner ml-6 h-14 rounded-xl ">Book Marked Blog : {bookmarks.length }</h1>
             {
                bookmarks.map ( (bookmark,idx) =>  <BookMark key={idx} bookmark= {bookmark}></BookMark>)
             }
        </div>
    );
};
Bookmarks.propTypes= {
    bookmarks :PropTypes.array,
    readingTime :PropTypes.number
}

export default Bookmarks;