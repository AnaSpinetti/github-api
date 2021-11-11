import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 4px;
    margin-bottom: 50px;
    justify-content: center;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width:60%;
        height: 44px;
        outline: none;
        padding-left: 5px;
        font-weight: 500;
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
            background-color: #2c5289;
            box-shadows: 3px 2px 10px #ccc;
        }
    }
    
`;