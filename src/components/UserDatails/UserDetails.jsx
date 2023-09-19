import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData() ;
    // console.log(user);
    const {name,email,address,company,phone,username,website} = user ;
    return (
        <div className="text-center">
            <h2 className="text-3xl border-b-2 border-blue-600 w-[30%] mx-auto my-3 pb-3">User Details</h2>
            <h2 className="text-3xl">{name}</h2>
            <h2 className="text-3xl">email:{email}</h2>
            <h2 className="text-3xl">Company:{company.name}</h2>
            <h2 className="text-3xl">Phone:{phone}</h2>
           <h2 className="text-3xl">address:{address.city}</h2>
            <h2 className="text-3xl">user name:{username}</h2>
            <h2 className="text-3xl">website:{website}</h2>
        </div>
    );
};

export default UserDetails;