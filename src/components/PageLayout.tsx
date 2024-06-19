import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const PageLayout: React.FC = ({
    leftSidebarContent,
    rightSidebarContent,
    headerContent,
    mainContent,
    footerContent,
}): JSX.Element => {
    return (
        <section className='home-container'>
            <Sidebar position='left' contentSidebar={leftSidebarContent} />
            <Content
                header={headerContent}
                main={mainContent}
                footer={footerContent}
            />
            <Sidebar position='right' contentSidebar={rightSidebarContent} />
        </section>
    );
};

export default PageLayout;
