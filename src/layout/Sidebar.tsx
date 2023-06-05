import { ReactNode } from 'react';

export type SidebarProps = {
  children: ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => <div>{children}</div>;
