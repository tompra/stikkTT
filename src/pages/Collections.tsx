import PageLayout from '../components/PageLayout';
import { pagesContent } from '../helpers/content';

const Collections: React.FC = (): JSX.Element => {
    return (
        <PageLayout
            leftSidebarContent={pagesContent.collection.leftSidebar}
            rightSidebarContent={pagesContent.collection.rightSidebar}
            headerContent={pagesContent.collection.headerContent}
            mainContent={pagesContent.collection.mainContent}
            footerContent={pagesContent.collection.footerContent}
        />
    );
};
export default Collections;
