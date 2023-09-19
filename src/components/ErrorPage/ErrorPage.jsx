import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError() ;
    // console.log(error);
    return (
        <div className="text-center mt-36">
            <h2 className="text-2xl font-bold">Oops <span className="text-red-500">!!!</span></h2>
            <p>Page not found!!</p>
            {/* <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go back where you from</p>
                    <Link to='/'><button className="bg-green-500 border px-5 py-1 font-semibold hover:bg-transparent hover:border-green-600 rounded hover:border hover:transition-all hover:text-blue-500">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;