import React from 'react';

export interface SidebarProps {
    position: string;
    contentSidebar: React.ReactNode | string;
}

export interface ContentProps {
    header: React.ReactNode | string;
    main: React.ReactNode | string;
    footer: React.ReactNode | string;
}

export interface PageLayoutProps {
    leftSidebarContent: React.ReactNode;
    rightSidebarContent: React.ReactNode;
    headerContent: React.ReactNode;
    mainContent: React.ReactNode;
    footerContent: React.ReactNode;
}
