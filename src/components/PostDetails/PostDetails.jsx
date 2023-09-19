
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData() ;
    const navigate = useNavigate()
    const {postId} = useParams()
    const {id,title,body} = post ;
    const handleGoBack = () =>{
        navigate(-1)
    };
    console.log(postId);
    return (
        <div className='text-center w-[600px] mx-auto'>
            <h3 className='text-3xl font-bold'>Post Details About: {id}</h3>
            <h4 className='text-2xl font-semibold text-violet-500'>{title}</h4>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack} className="bg-green-500 border px-5 py-1 font-semibold hover:bg-transparent hover:border-green-600 rounded hover:border hover:transition-all hover:text-blue-500">Go Back</button>
        </div>
    );
};

export default PostDetails;