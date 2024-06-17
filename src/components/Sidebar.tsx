import { SidebarProps } from '../types';

const Sidebar: React.FC<SidebarProps> = ({ position }): JSX.Element => {
    return <article className={`sidebar sidebar-${position}`}>Sidebar</article>;
};
export default Sidebar;
