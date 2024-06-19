import PageLayout from '../components/PageLayout';
import { pagesContent } from '../helpers/content';

const Home: React.FC = (): JSX.Element => {
    return (
        <PageLayout
            leftSidebarContent={pagesContent.home.leftSidebar}
            rightSidebarContent={pagesContent.home.rightSidebar}
            headerContent={pagesContent.home.headerContent}
            mainContent={pagesContent.home.mainContent}
            footerContent={pagesContent.home.footerContent}
        />
    );
};
export default Home;
