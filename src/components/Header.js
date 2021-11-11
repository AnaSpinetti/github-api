import React, {useState} from 'react';
import * as s from '../styles/HeaderStyle';
import useGitHub from '../hooks/GitHubHooks';

function Header() {

    const {getUser} = useGitHub();
    const [userNameForSearch, setUserNameForSearch] = useState('');

    const submitGetUser = () => {
        if(!userNameForSearch) return;
        return getUser(userNameForSearch);
    }

    return (
        <s.HeaderWrapper>
                <input type="text" placeholder="Digite o username para pesquisa" onChange={(event) => setUserNameForSearch(event.target.value)} />
                <button type="submit" onClick={submitGetUser}>Buscar</button>
        </s.HeaderWrapper>
    )
}

export default Header;
