import PageLayout from '../components/PageLayout';
import { pagesContent } from '../helpers/content';
const Contact: React.FC = (): JSX.Element => {
    return (
        <PageLayout
            leftSidebarContent={pagesContent.contact.leftSidebar}
            rightSidebarContent={pagesContent.contact.rightSidebar}
            headerContent={pagesContent.contact.headerContent}
            mainContent={pagesContent.contact.mainContent}
            footerContent={pagesContent.contact.footerContent}
        />
    );
};
export default Contact;
