import { useContext } from "react";
import { GithubContext } from "../providers/GithubProvider";

const useGithub = () => {
    const {githubstate, getUser} = useContext( GithubContext );

    return {githubstate, getUser};
};

export default useGithub;