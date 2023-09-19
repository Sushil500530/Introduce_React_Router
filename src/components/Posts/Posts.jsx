import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className="text-center">
           <h2 className="text-3xl">Post: {posts.length}</h2> 
           <div className="flex flex-wrap gap-3 mt-5 justify-center">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
           </div>
        </div>
    );
};

export default Posts;