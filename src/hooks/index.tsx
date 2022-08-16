import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import DefaultTheme from "../styles/theme/default";
import { NotificationProvider } from "./useNotification";

const AppContext: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => (
  <>
    <NotificationProvider>
      <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
    </NotificationProvider>
  </>
);

export default AppContext;
