import { SidebarProps } from '../types';

const Sidebar: React.FC<SidebarProps> = ({
    position,
    contentSidebar,
}): JSX.Element => {
    return (
        <article className={`sidebar sidebar-${position}`}>
            <h3>{contentSidebar}</h3>
        </article>
    );
};
export default Sidebar;
