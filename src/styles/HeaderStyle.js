import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        outline: none;
        padding-left: 5px;
    }
    
    button{
        background-color: #225ed8;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        color: white;   

        &:hover{
            background-color: #225ed9;
            box-shadows: 3px 2px 10px #ccc;
        }
    }
    
`;