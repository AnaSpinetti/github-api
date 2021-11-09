import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import styled from 'styled-components';

export const WrapperTabs = styled(Tabs) `
    font-size: 16px;
    width: 50%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList) `
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab) `
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    margin-right: 10px;
    z-index: 9999999;
    background-color: '#fff';

    &:focus{
        outline: none;
        box-shadows: 0 0 1em #ccc;
    }

    &.is-selected{
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom: 1px solid white;
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel) `
    padding: 8px;
    border: 1px solid #ccc;
    box-shadows: 0 0 0.3em rgba(0,0,0,0.3);
    display: none;
    margin: -5px;

    &.is-selected{
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';