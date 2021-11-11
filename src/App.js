import React  from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import useGithub from "./hooks/GitHubHooks";

function App() {
  const { githubstate } = useGithub();

  return (
    <Layout>
      {githubstate.hasUser ? <>    
        {githubstate.loading ? (
          <p>Loading</p>
          ) : (
          <>
            <Profile />
            <Repositories /> 
            </> 
          )}
        </> : <div>Nenhum usuário pesquisado</div>}
      </Layout> 
  );
}

export default App;
