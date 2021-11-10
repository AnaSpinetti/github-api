import { useContext } from "react";
import { GithubContext } from "../providers/GithubProvider";

const useGithub = () => {
    const {githubstate} = useContext( GithubContext );

    return {githubstate};
};

export default useGithub;