import PageLayout from '../components/PageLayout';
const Aftercare: React.FC = (): JSX.Element => {
    return (
        <PageLayout
            leftSidebarContent='sidebar left aftercare'
            rightSidebarContent='sidebar right aftercare'
            headerContent='THANK YOU FOR BEING HERE'
            mainContent='Content from the props of the props for aftercare'
            footerContent='STICKITHOM'
        />
    );
};
export default Aftercare;
