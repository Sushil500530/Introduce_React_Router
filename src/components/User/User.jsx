
import PropTypes from 'prop-types';
const User = ({user}) => {
    const {id,name,email,phone} = user ;
    console.log(user);
    return (
        <div className='border border-red-500 p-3 space-y-2 m-3 w-96 rounded'>
            {/* <h3 className='text-2xl font-bold'>User Name:<span className='text-xl'>{user.name}</span></h3> */}
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired,
}
export default User;