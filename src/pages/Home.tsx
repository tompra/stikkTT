import Sidebar from '../components/Sidebar';

const Home: React.FC = (): JSX.Element => {
    return (
        <section className='home-container'>
            <Sidebar position='left' />
            <div></div>
            <Sidebar position='right' />
        </section>
    );
};
export default Home;
