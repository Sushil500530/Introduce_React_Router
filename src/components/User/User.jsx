
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id,name,email,phone} = user ;
    // console.log(user);
    return (
        <div className='border border-red-500 p-3 space-y-2 m-2 w-96 rounded-xl'>
            {/* <h3 className='text-2xl font-bold'>User Name:<span className='text-xl'>{user.name}</span></h3> */}
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/users/${id}`} className='text-xl font-bold hover:text-blue-500 hover:transition-all'>Show Details</Link>
            {/* <Link to={`/users/${id}`}>Click Me</Link> */}
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired,
}
export default User;