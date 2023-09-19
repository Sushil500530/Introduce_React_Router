
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { RotatingLines } from  'react-loader-spinner'

const Home = () => {
    const navigation = useNavigation() ;
    const location = useLocation()
    console.log(location);
    return (
        <div>
        <Header></Header>
            <h1 className='text-5xl my-5 text-violet-500 text-center'>Hellow React Router</h1>
            {
                navigation.state === "loading" ? 
                <div className='flex justify-center items-center'>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                    />
                </div> : 
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;