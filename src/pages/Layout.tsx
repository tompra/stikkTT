import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

const Layout: React.FC = (): JSX.Element => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';

    return (
        <>
            <Navbar />
            {isPageLoading ? <Loading /> : <Outlet />}
        </>
    );
};
export default Layout;
