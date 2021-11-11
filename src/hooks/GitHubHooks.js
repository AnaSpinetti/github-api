import { useContext } from "react";
import { GithubContext } from "../providers/GithubProvider";

const useGithub = () => {
    const {githubstate, getUser, getUserRepos, getUserStarred} = useContext( GithubContext );

    return {githubstate, getUser, getUserRepos, getUserStarred};
};

export default useGithub;