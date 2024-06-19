import PageLayout from '../components/PageLayout';

const Collections: React.FC = (): JSX.Element => {
    return (
        <PageLayout
            leftSidebarContent='sidebar left collections'
            rightSidebarContent='sidebar right collections'
            headerContent='THANK YOU FOR BEING HERE'
            mainContent='Content from the props of the props for collections'
            footerContent='STICKITHOM'
        />
    );
};
export default Collections;
