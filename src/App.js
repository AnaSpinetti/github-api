import React  from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import GithubProvider from "./providers/GithubProvider";
import {ResetCss} from "./styles/ResetCss";

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCss />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
