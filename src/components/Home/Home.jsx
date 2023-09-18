
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
        <Header></Header>
            <h1 className='text-5xl my-5 text-violet-500 text-center'>Hellow React Router</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;