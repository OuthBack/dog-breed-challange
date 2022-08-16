import { AppProps } from "next/app";
import { NotificationCardOrganism } from "../atomic/organisms/NotificationCard";
import AppContext from "../hooks";
import GlobalStyle from "../styles/globals";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AppContext>
        <GlobalStyle />
        <NotificationCardOrganism></NotificationCardOrganism>
        <Component {...pageProps} />
      </AppContext>
    </>
  );
};

export default App;
