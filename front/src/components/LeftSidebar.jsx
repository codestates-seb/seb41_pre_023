import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Sidebar = styled.nav`
    width: 164px;
    position: relative;
    font-size: 100%;
    height: auto;
    max-height: 3000px;
    z-index: 1000;
`;

const SidebarContainer = styled.div`
    padding-top: 74px;
    position: fixed;
    width: 164px;
    height: 360px;
`;

const ListContainer = styled.ol``;

const ListTitle = styled.li`
    color: hsl(210deg 8% 45%);
    font-size: 11px;
    margin: 16px 0px 4px 8px;
`;

const List = styled.li`
    padding: 8px 6px 8px 8px;
    display: flex;
    color: hsl(210deg 8% 35%);
    font-size: 13px;
    height: 34px;
    font-family: Liberation Sans 200;
`;

const ChoiceList = styled.li`
    width: 100%;
    font-weight: bold; //선택효과
    background: hsl(210deg 8% 95%);
    color: hsl(210deg 8% 5%); // 회색효과
    border-right: 3px solid hsl(27deg 90% 55%); //주황줄 선택
    padding: 4px 4px 4px 8px;
    height: 34px;
    font-family: Liberation Sans 700;
    font-size: 13px;
    display: flex;
    align-items: center; //중앙정렬
    cursor: pointer;
`;

const Icon = styled.svg`
    margin: -1px 4px 0px 0px;
`;

export default function LeftSidebar() {
    const navigate = useNavigate();
    return (
        <Sidebar>
            <SidebarContainer>
                <ListContainer>
                    <List className="disabled">Home</List>
                    <ListTitle>PUBLIC</ListTitle>
                    <ChoiceList onClick={() => navigate("/")}>
                        <Icon
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 1C4.64267 1 1 4.64267 1 9C1 13.3573 4.64266 17 9 17C13.3573 17 17 13.3573 17 9C17 4.64266 13.3573 1 9 1ZM8 15.32C6.26864 15.0438 4.68393 14.0332 3.70319 12.58C2.72245 11.1267 2.37828 9.27893 2.77 7.57L7 11.68V12.48C7 13.36 7.12 13.8 8 13.8V15.32ZM13.72 13.32C13.52 12.66 12.72 12 12 12H11V10C11 9.56 10.44 9 10 9H6V7H7C7.44 7 8 6.44 8 6V5H10C10.88 5 11.4 4.28 11.4 3.4V3.07C13.3216 3.85114 14.7733 5.56167 15.2317 7.5847C15.69 9.60773 15.1173 11.7769 13.72 13.31V13.32Z"
                                fill="hsl(210deg 8% 55%)"
                            />
                        </Icon>
                        Questions
                    </ChoiceList>
                    <List className="disabled">
                        <Icon width="18" height="18" viewBox="0 0 18 18"></Icon>
                        Tags
                    </List>
                </ListContainer>
            </SidebarContainer>
        </Sidebar>
    );
}
