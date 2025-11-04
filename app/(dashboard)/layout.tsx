interface DashboardLayoutProps {
  children: React.ReactNode;
}

import React from "react";

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <div>{children}</div>;
};

export default DashboardLayout;
