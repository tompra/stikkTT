import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import { PageLayoutProps } from '../types';

const PageLayout: React.FC<PageLayoutProps> = ({
    leftSidebarContent,
    rightSidebarContent,
    headerContent,
    mainContent,
    footerContent,
}): JSX.Element => {
    return (
        <section className='layout-container'>
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
