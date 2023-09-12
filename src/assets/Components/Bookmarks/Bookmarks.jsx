import { PropTypes } from 'prop-types';
import BookMark from '../BookMark/BookMark';
const Bookmarks = ( {bookmarks}) => {


    return (
        <div className="bg-slate-200 text-center p-4 shadow-inner h-14 ml-6 rounded-xl">
            <h1 className="ml-5 text-2xl font-medium">Book Marked Blog : {bookmarks.length }</h1>
             {
                bookmarks.map ( (bookmark,idx) =>  <BookMark key={idx} bookmark= {bookmark}></BookMark>)
             }
        </div>
    );
};
Bookmarks.propTypes= {
    bookmarks :PropTypes.array
}

export default Bookmarks;