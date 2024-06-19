import PageLayout from '../components/PageLayout';

const Home: React.FC = (): JSX.Element => {
    return (
        <PageLayout
            leftSidebarContent='sidebar left'
            rightSidebarContent='sidebar right'
            headerContent='THANK YOU FOR BEING HERE'
            mainContent='Content from the props of the props'
            footerContent='STICKITHOM'
        />
    );
};
export default Home;
