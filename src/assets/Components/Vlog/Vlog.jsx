import PropTypes from 'prop-types';

const Vlog = ({ blog }) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};

Vlog.propTypes = {
    blog :PropTypes.object.isRequired
}
export default Vlog;