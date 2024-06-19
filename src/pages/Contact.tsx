import PageLayout from '../components/PageLayout';
const Contact: React.FC = (): JSX.Element => {
    return (
        <PageLayout
            leftSidebarContent='sidebar left from contact'
            rightSidebarContent='sidebar right from contact'
            headerContent='THANK YOU FOR BEING HERE'
            mainContent='Content from the props of the props from contact'
            footerContent='STICKITHOM'
        />
    );
};
export default Contact;
