import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/reducer";

const LogoutBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f1f2f4;
    min-height: 100vh;
`;

const LogoutContainer = styled.div`
    h3 {
        font-size: 22px;
        margin-bottom: 24px;
        line-height: 28px;
        text-align: center;
        color: #232629;
    }
`;

const LogoutFormBox = styled.main`
    width: 100%;
    max-width: 268px;
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
        0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    padding: 24px;
    margin: 0 auto;
    background-color: white;
    border-radius: 7px;
    @media screen and (min-width: 641px) {
        max-width: 316px;
    }
`;

const ULBox = styled.ul`
    padding-bottom: 12px;
    margin-bottom: 16px;
    border-bottom: 1px solid hsl(210, 8%, 85%);
`;

const Lists = styled.li`
    display: flex;
    padding: 5px 0;
`;

const ListLogo = styled.img`
    display: inline-block;
    margin-right: 6px;
    margin-bottom: -2px;
`;

const ListLink = styled.a`
    display: flex;
    align-items: center;
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: hsl(206, 100%, 52%);
    }
`;

const CheckingLogoutBox = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

const CheckBox = styled.input`
    margin-right: 4px;
    vertical-align: middle;
    border-radius: 3px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 1em;
    height: 1em;
    border: 1px solid hsl(210, 8%, 75%);
    background-color: white;
    outline: 0;
`;

const CheckboxText = styled.label`
    padding-top: 4px;
    font-weight: 400;
    font-size: 13px;
    color: black;
`;

const BtnContainer = styled.div`
    display: flex;
    margin: -2px;
`;

const LogoutBtn = styled.button`
    margin: 2px;
    background-color: hsl(206, 100%, 52%);
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
    padding: 0.8em;
    font-size: 13px;
    color: white;
    display: inline-block;
    font-weight: normal;
    position: relative;
    outline: none;
    line-height: calc(15 / 13);
    text-align: center;
    &:hover {
        background-color: hsl(209, 100%, 37.5%);
    }
`;

const CancelBtn = styled(LogoutBtn)`
    background-color: transparent;
    color: hsl(206, 100%, 40%);
    &:hover {
        background-color: hsl(205, 53%, 88%);
    }
`;

const ReminderText = styled.div`
    text-align: left;
    color: hsl(210, 8%, 45%);
    margin-top: 32px;
    font-size: 12px;
    line-height: 14px;
`;

export default function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.clear();
        navigate("/");
    };
    return (
        <>
            <LogoutBox>
                <LogoutContainer>
                    <h3>
                        Clicking “Log out” will log you out of the following
                        <br />
                        domains on this device:
                    </h3>
                    <LogoutFormBox>
                        <ULBox>
                            <Lists>
                                <ListLogo
                                    src="https://cdn.sstatic.net/Sites/askubuntu/img/apple-touch-icon.png"
                                    alt="Ask Ubuntu"
                                    height="16"
                                    width="16"
                                ></ListLogo>
                                <ListLink href="https://askubuntu.com/">
                                    askubuntu.com
                                </ListLink>
                            </Lists>
                            <Lists>
                                <ListLogo
                                    src="https://cdn.sstatic.net/Sites/mathoverflow/img/apple-touch-icon.png"
                                    alt="MathOverflow"
                                    height="16"
                                    width="16"
                                ></ListLogo>
                                <ListLink href="https://mathoverflow.net/">
                                    mathoverflow.net
                                </ListLink>
                            </Lists>
                            <Lists>
                                <ListLogo
                                    src="https://cdn.sstatic.net/Sites/serverfault/img/apple-touch-icon.png"
                                    alt="Server Fault"
                                    height="16"
                                    width="16"
                                ></ListLogo>
                                <ListLink href="https://serverfault.com/">
                                    serverfault.com
                                </ListLink>
                            </Lists>
                            <Lists>
                                <ListLogo
                                    src="https://cdn.sstatic.net/Sites/stackapps/img/apple-touch-icon.png"
                                    alt="Stack Apps"
                                    height="16"
                                    width="16"
                                ></ListLogo>
                                <ListLink href="https://stackapps.com/">
                                    stackapps.com
                                </ListLink>
                            </Lists>
                            <Lists>
                                <ListLogo
                                    src="https://stackoverflow.design/assets/img/logos/se/se-icon.png"
                                    alt="Stack Apps"
                                    height="16"
                                    width="16"
                                ></ListLogo>
                                <ListLink href="https://stackexchange.com/">
                                    stackexchange.com
                                </ListLink>
                            </Lists>
                            <Lists>
                                <ListLogo
                                    src="https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png"
                                    alt="Stack Overflow"
                                    height="16"
                                    width="16"
                                ></ListLogo>
                                <ListLink href="https://stackoverflow.com/">
                                    stackoverflow.com
                                </ListLink>
                            </Lists>
                            <Lists>
                                <ListLogo
                                    src="https://cdn.sstatic.net/Sites/superuser/img/apple-touch-icon.png"
                                    alt="Super User"
                                    height="16"
                                    width="16"
                                ></ListLogo>
                                <ListLink href="https://superuser.com/">
                                    superuser.com
                                </ListLink>
                            </Lists>
                        </ULBox>
                        <CheckingLogoutBox>
                            <CheckBox type="checkbox"></CheckBox>
                            <CheckboxText>Log out on all devices</CheckboxText>
                        </CheckingLogoutBox>
                        <BtnContainer>
                            <LogoutBtn onClick={handleLogout}>
                                Log out
                            </LogoutBtn>

                            <CancelBtn
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                Cancel
                            </CancelBtn>
                        </BtnContainer>
                        <ReminderText>
                            If you’re on a shared computer, remember to log out
                            of your Open ID provider (Facebook, Google, Stack
                            Exchange, etc.) as well.
                        </ReminderText>
                    </LogoutFormBox>
                </LogoutContainer>
            </LogoutBox>
        </>
    );
}
