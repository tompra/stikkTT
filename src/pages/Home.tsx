import Sidebar from '../components/Sidebar';

const Home: React.FC = (): JSX.Element => {
    return (
        <section className='home-container'>
            <Sidebar position='left' />
            <div className='home-content'>
                <div className='home-content__header'>
                    <h3>THANK YOU TO BE HERE</h3>
                </div>
                <div className='home-content__main'>
                    <h3>Content</h3>
                </div>
                <div className='home-content__footer'>
                    <h3>STICKITHOM</h3>
                </div>
            </div>
            <Sidebar position='right' />
        </section>
    );
};
export default Home;
