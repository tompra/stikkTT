import PageLayout from '../components/PageLayout';
import { pagesContent } from '../helpers/content';
const Aftercare: React.FC = (): JSX.Element => {
    return (
        <PageLayout
            leftSidebarContent={pagesContent.aftercare.leftSidebar}
            rightSidebarContent={pagesContent.aftercare.rightSidebar}
            headerContent={pagesContent.aftercare.headerContent}
            mainContent={pagesContent.aftercare.mainContent}
            footerContent={pagesContent.aftercare.footerContent}
        />
    );
};
export default Aftercare;
