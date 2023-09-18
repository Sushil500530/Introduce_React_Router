import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData() ;
    // console.log(users);

    // ja ja kaj korbo
    // state ---> data
    // state ----> loader 
    // use use effect 
    // fetch ---> state set ---> set state
    return (
        <div className='text-center'>
            <h3 className='text-3xl'>Our Users: {users.length}</h3>
            <p>any user is valuable person but they connot think above one</p>
            <div className="flex gap-5 flex-wrap justify-center">
                {
                    users.map(user => <User key={user.id} user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;