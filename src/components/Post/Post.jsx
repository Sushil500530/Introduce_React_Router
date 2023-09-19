import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title} =post ;
    // const navigate = useNavigate()

    // const handleShowDetails = () =>{
    //     navigate(`/post/${id}`)
    // }
    return (
        <div className="text-center border-2 p-5 border-green-500 w-[350px] rounded-lg">
            <h3 className="text-3xl font-bold">Post of id: {id}</h3>
            <p className="mb-5 font-semibold">{title}</p>
            <Link to={`/post/${id}`} className="bg-green-500 px-5 py-1 font-semibold hover:bg-transparent hover:border-green-600 rounded hover:border hover:transition-all hover:text-blue-500">Post Details</Link>
            {/* <button onClick={handleShowDetails}>Show Details</button> */}
        </div>
    );
};

export default Post;