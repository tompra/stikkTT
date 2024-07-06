import { SidebarProps } from '../types';

const Sidebar: React.FC<SidebarProps> = ({
    position,
    contentSidebar,
}): JSX.Element => {
    return (
        <article className={`sidebar sidebar-${position}`}>
            {contentSidebar}
        </article>
    );
};
export default Sidebar;
