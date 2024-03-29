import React, { useState } from "react";
import styled from "styled-components";
import DefaultAvatar from "../assets/default-avatar.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//아이콘 로그인 수정할것

const HeaderBar = styled.header`
    display: flex;
    position: fixed; //고정
    background-color: hsl(210, 8%, 97.5%);
    width: 100%;
    height: 47px;
    border-top: 3px solid #f48223; //height 총 50px
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
        0 2px 8px hsla(0, 0%, 0%, 0.05);
    min-width: auto; // 길이변화
    z-index: 5050; // 가장 높이
    align-items: center; //중앙정렬
`;

const HeaderBarContainer = styled.div`
    width: 100%;
    display: flex;
    max-width: 1264px;
    height: 100%;
    align-items: center;
    margin: 0 auto;
`;

const MenuNav = styled.nav`
    margin-top: 4px; //logo에서 margin-top -4px 있어서 맞춰줌
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    font-size: 14px;
    color: hsl(210, 8%, 35%);
    &:hover {
        color: hsl(210, 8%, 15%);
    }
    > p {
        display: none;
        padding: 8px 12px;
        border-radius: 1000px;
        white-space: nowrap;
        cursor: pointer;
        &:hover {
            background-color: hsl(210, 8%, 90%);
        }
        &:nth-child(2) {
            display: inline-block;
        }
        @media screen and (min-width: 880px) {
            display: inline-block;
        }
    }
`;

const HeaderSearch = styled.form`
    margin-top: 1px;
    margin-left: -20px; //옆 공간 채워주기
    display: flex;
    justify-content: flex-end; //641px이하일때 돋보기 끝으로 붙이기
    align-items: center;
    flex-grow: 1; // 남은 공간 채우기
    box-sizing: border-box; // 벗어나지 않고 안에 넣기
    height: 50px; // 확실하게 벌려줌
    font: inherit; //부모꺼 씀
    position: relative;
`;
const HeaderSearchBar = styled.input`
    margin: 5px;
    width: 100%;
    padding: 0.6em 0.7em;
    border: 1px solid hsl(210deg 8% 75%);
    border-radius: 3px;
    padding-left: 33px; //돋보기와 거리
    font-family: inherit;
    display: ${(props) => (props.visible ? "block" : "none")};
    &:focus-visible {
        width: 100%;
        border: none;
        outline: 1px solid hsl(206, 90%, 69.5%);
        box-shadow: 0 0 0 4px #d7e5f2;
    }
    &::placeholder {
        color: hsl(210, 8%, 55%);
    }
    @media screen and (min-width: 641px) {
        position: relative;
        top: unset;
        left: unset;
        display: inline-block;
        transform: unset;
        width: 100%;
    }
    &:focus ~ div {
        display: block;
    }
`;

const MobileSearchButton = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 100%;
    opacity: 0.7;
    cursor: pointer;
    @media screen and (min-width: 641px) {
        display: none;
    }
`;

const SearchGlass = styled.div`
    /* position: absolute; //돋보기 안에 들어가게해줌
    left: 0.7em;
    right: auto; */
    display: ${(props) => (props.visible ? "block" : "none")};
    position: absolute;
    left: 19px;
    top: 65px;
    z-index: 1;
    opacity: 0.5;
    @media screen and (min-width: 641px) {
        display: block;
        position: unset;
        left: unset;
        top: 1px;
        transform: translate(177%, 1px);
    }
`;

const Logo = styled.svg`
    padding: 0px 8px;
    margin-left: 0;
    margin-top: -4px;
    cursor: pointer;
`;

const HeaderButton = styled.button`
    cursor: pointer;
    background-color: ${(props) => props.BgColor};
    padding: 8px 10px;
    border: 1px solid transparent;
    margin: 0 0 0 4px;
    height: 33px;
    min-width: 58px;

    border-color: ${(props) => props.BoColor};
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4); // 안쪽에주는 명암
    color: ${(props) => props.Color};
`;

const RightsideLogos = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0 8px;
    cursor: pointer;
    > a {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`;

const ProfileIcon = styled.p`
    width: 24px;
    height: 24px;
    border-radius: 3px;
    background-image: ${(props) =>
        props.img ? `url(${props.img})` : `url(${DefaultAvatar})`};
`;

const LogoutPop = styled.div`
    cursor: pointer;
    position: absolute;
    right: 90px;
    top: 44px;
    width: 100vw;
    background-color: hsl(210, 8%, 95%);
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
        0 2px 8px hsla(0, 0%, 0%, 0.05);
    @media screen and (min-width: 641px) {
        width: 363px;
    }
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 10px;
        p {
            font-size: 11px;
            font-weight: 800;
            color: #0074cc;
            &:hover {
                color: rgb(10, 149, 255);
            }
        }
        svg {
            width: 18px;
            height: 18px;
        }
    }
`;

const LogoutMenu = styled.div`
    top: 47px;
    right: 12px;
    display: block;
    background-color: hsl(205, 47%, 97%);
`;

const MenuRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 6px;
    padding: 8px;
    font-size: 12px;
    color: #0074cc;
`;

export default function Header() {
    const navigate = useNavigate();

    //현재 상태값 조회 = useSelector()
    const isLogin = useSelector((state) => state.isLogin);

    const [togglePopUp, setTogglePopUp] = useState(false);
    return (
        <HeaderBar>
            <HeaderBarContainer>
                <Logo
                    onClick={() => navigate("/")}
                    width="166"
                    height="30"
                    viewBox="0 0 146 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M21 27V19H24V30H0V19H3V27H21Z" fill="#BCBBBB" />
                    <path
                        d="M5.4021 19.1011L18.9631 21.061L19.127 18.6804L5.87134 16.134L5.4021 19.1011ZM7.2 12.3L19.2 17.9L20.3 15.5L8.3 9.9L7.2 12.3ZM10.6 6.4L20.8 14.9L22.5 12.9L12.3 4.4L10.6 6.4ZM17.1 0.199997L15 1.8L22.9 12.4L25 10.8L17.1 0.199997ZM5 25H19V22H5V25Z"
                        fill="#F48024"
                    />
                    <path
                        d="M33.9092 18.8975L32.2784 18.7056C31.0313 18.6097 30.4558 18.1301 30.4558 17.1708C30.4558 16.1156 31.2232 15.4441 32.758 15.4441C33.8133 15.4441 34.7725 15.7319 35.444 16.2115L36.4033 15.2522C35.444 14.4848 34.197 14.197 32.758 14.197C30.5517 14.197 29.0168 15.3481 29.0168 17.1708C29.0168 18.8975 30.0721 19.7608 32.0865 19.9527L33.8133 20.1446C34.9644 20.2405 35.54 20.7201 35.54 21.6794C35.54 22.9265 34.4848 23.502 32.854 23.502C31.6069 23.502 30.4558 23.2143 29.6883 22.3509L28.7291 23.3102C29.8802 24.3654 31.2232 24.7491 32.9499 24.7491C35.444 24.7491 37.0748 23.598 37.0748 21.6794C36.883 19.7608 35.6359 19.0893 33.9092 18.8975ZM46.6676 14.2929C45.0369 14.2929 43.9817 14.5807 43.1183 15.7319L44.0776 16.6911C44.6532 15.8278 45.3246 15.54 46.6676 15.54C48.4903 15.54 49.2577 16.3074 49.2577 17.7463V18.7056H46.188C43.8857 18.7056 42.6387 19.8568 42.6387 21.6794C42.6387 22.4468 42.9264 23.2143 43.4061 23.7898C44.0776 24.4613 44.845 24.7491 46.2839 24.7491C47.6269 24.7491 48.3944 24.4613 49.2577 23.6939V24.6532H50.7926V17.7463C50.6966 15.4441 49.3536 14.2929 46.6676 14.2929ZM49.2577 21.0079C49.2577 21.8713 49.0659 22.4468 48.7781 22.7346C48.1066 23.3102 47.3391 23.4061 46.4758 23.4061C44.845 23.4061 44.1735 22.8305 44.1735 21.6794C44.1735 20.5283 44.9409 19.8568 46.4758 19.8568H49.3536L49.2577 21.0079ZM56.5483 15.6359C57.5075 15.6359 58.0831 15.9237 58.8505 16.7871L59.8098 15.8278C58.7546 14.6766 57.8913 14.2929 56.4523 14.2929C53.8623 14.2929 51.9437 16.0196 51.9437 19.569C51.9437 23.0224 53.8623 24.845 56.4523 24.845C57.8913 24.845 58.7546 24.4613 59.8098 23.3102L58.7546 22.3509C57.9872 23.2143 57.4116 23.502 56.4523 23.502C55.493 23.502 54.6297 23.1183 54.0541 22.3509C53.5745 21.6794 53.3826 20.912 53.3826 19.569C53.3826 18.3219 53.5745 17.4586 54.0541 16.7871C54.7256 16.0196 55.589 15.6359 56.5483 15.6359ZM69.4026 14.3889H67.58L62.9755 18.8975V9.7843H61.4406V24.5573H62.9755V20.8161L64.7981 18.9934L68.2515 24.5573H70.0742L65.8533 17.9382L69.4026 14.3889ZM76.4054 14.1011C74.8706 14.1011 73.8153 14.6766 73.1439 15.4441C72.1846 16.4034 71.8968 17.6504 71.8968 19.569C71.8968 21.4876 72.1846 22.7346 73.1439 23.6939C73.8153 24.3654 74.8706 25.0369 76.4054 25.0369C77.9403 25.0369 79.0914 24.4613 79.667 23.6939C80.6263 22.7346 80.914 21.4876 80.914 19.569C80.914 17.6504 80.6263 16.4034 79.667 15.4441C79.0914 14.6766 78.0362 14.1011 76.4054 14.1011ZM77.6525 22.0631C77.3647 22.3509 76.981 22.5428 76.4054 22.5428C75.8298 22.5428 75.4461 22.3509 75.1583 22.0631C74.5828 21.4876 74.5828 20.5283 74.5828 19.4731C74.5828 18.3219 74.6787 17.4586 75.1583 16.883C75.4461 16.5952 75.8298 16.4034 76.4054 16.4034C76.981 16.4034 77.3647 16.5952 77.6525 16.883C78.2281 17.4586 78.2281 18.3219 78.2281 19.4731C78.324 20.6242 78.2281 21.5835 77.6525 22.0631ZM88.0127 14.197L85.9023 20.8161L83.696 14.197H80.914L84.8471 24.845H86.9575L90.8906 14.197H88.0127ZM95.3033 14.1011C92.5214 14.1011 90.6987 16.0196 90.6987 19.569C90.6987 23.8858 93.0969 25.0369 95.5911 25.0369C97.5096 25.0369 98.5648 24.4613 99.6201 23.4061L97.9893 21.8713C97.3178 22.5428 96.7422 22.8305 95.5911 22.8305C94.0562 22.8305 93.2888 21.8713 93.2888 20.4323H99.9078V19.2812C99.9078 16.2115 98.2771 14.1011 95.3033 14.1011ZM93.2888 18.5138C93.2888 18.0341 93.3847 17.7463 93.5766 17.3626C93.8644 16.6911 94.4399 16.2115 95.3992 16.2115C96.2626 16.2115 96.9341 16.6911 97.2219 17.3626C97.4137 17.7463 97.4137 18.0341 97.5096 18.5138H93.2888ZM103.841 15.2522V14.197H101.251V24.845H103.937V18.4178C103.937 17.0749 104.8 16.4993 105.664 16.4993C106.335 16.4993 106.623 16.6911 107.102 17.1708L109.117 15.1563C108.35 14.3889 107.678 14.197 106.623 14.197C105.376 14.1011 104.416 14.5807 103.841 15.2522ZM109.23 13.0459V24.845H111.916V16.4034H113.835V14.3889H111.916V13.2377C111.916 12.6621 112.204 12.2784 112.876 12.2784H113.931V10.0721H112.396C110.19 10.0721 109.23 11.6069 109.23 13.0459ZM125.425 14.1011C123.89 14.1011 122.835 14.6766 122.163 15.4441C121.204 16.4034 120.916 17.6504 120.916 19.569C120.916 21.4876 121.204 22.7346 122.163 23.6939C122.835 24.3654 123.89 25.0369 125.425 25.0369C126.96 25.0369 128.111 24.4613 128.686 23.6939C129.646 22.7346 129.933 21.4876 129.933 19.569C129.933 17.6504 129.646 16.4034 128.686 15.4441C128.111 14.6766 126.96 14.1011 125.425 14.1011ZM126.672 22.0631C126.384 22.3509 126 22.5428 125.425 22.5428C124.849 22.5428 124.465 22.3509 124.178 22.0631C123.602 21.4876 123.602 20.5283 123.602 19.4731C123.602 18.3219 123.698 17.4586 124.178 16.883C124.465 16.5952 124.849 16.4034 125.425 16.4034C126 16.4034 126.384 16.5952 126.672 16.883C127.247 17.4586 127.247 18.3219 127.247 19.4731C127.247 20.6242 127.247 21.5835 126.672 22.0631ZM142.5 14.197L140.773 20.8161L138.567 14.197H136.648L134.442 20.8161L132.715 14.197H129.933L133.195 24.845H135.401L137.608 18.1301L139.814 24.845H142.02L145.282 14.197H142.5ZM117.933 21.5835V9.97616H115.247V21.7753C115.247 23.3102 116.206 24.845 118.316 24.845H119.851V22.6387H118.892C118.221 22.6387 117.933 22.255 117.933 21.5835ZM41.0079 16.0196L42.3509 14.6766H39.473V11.3192H37.9382V21.9672C37.9382 23.502 38.8015 24.7491 40.5282 24.7491H41.5834V23.502H40.816C39.8567 23.502 39.3771 22.9265 39.3771 21.9672V16.1156L41.0079 16.0196Z"
                        fill="#222426"
                    />
                </Logo>
                <MenuNav>
                    {isLogin ? (
                        <p className="disabled">Products</p>
                    ) : (
                        <>
                            <p className="disabled">About</p>
                            <p className="disabled">Products</p>
                            <p className="disabled">For Teams</p>
                        </>
                    )}
                </MenuNav>
                <HeaderSearch>
                    <MobileSearchButton>
                        <svg
                            className="prevent-searchbar"
                            aria-hidden="true"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                        >
                            <path
                                className="prevent-searchbar"
                                d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
                            ></path>
                        </svg>
                    </MobileSearchButton>
                    <SearchGlass>
                        <svg
                            className="prevent-searchbar"
                            aria-hidden="true"
                            width="17"
                            height="17"
                            viewBox="0 0 18 18"
                        >
                            <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
                        </svg>
                    </SearchGlass>
                    <HeaderSearchBar
                        type="text"
                        placeholder="Search..."
                    ></HeaderSearchBar>
                </HeaderSearch>
                {isLogin ? (
                    <>
                        <RightsideLogos className="disabled">
                            <ProfileIcon img={""}></ProfileIcon>
                        </RightsideLogos>
                        <RightsideLogos className="disabled">
                            <svg width="18" height="16" viewBox="0 0 20 18">
                                <path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"></path>
                            </svg>
                        </RightsideLogos>
                        <RightsideLogos className="green disabled">
                            <svg width="17" height="17" viewBox="0 0 18 18">
                                <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"></path>
                            </svg>
                        </RightsideLogos>
                        <RightsideLogos className="disabled">
                            <svg width="16" height="16" viewBox="0 0 18 18">
                                <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z"></path>
                            </svg>
                        </RightsideLogos>
                        <RightsideLogos
                            className="popup-btn prevent-popup"
                            onClick={() => {
                                setTogglePopUp(!togglePopUp);
                            }}
                        >
                            <span>
                                <svg
                                    aria-hidden="true"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                                </svg>
                            </span>

                            {togglePopUp ? (
                                <LogoutPop>
                                    <header>
                                        <p>CURRENT COMMUNITY</p>
                                        <svg
                                            onClick={() => {
                                                setTogglePopUp(!togglePopUp);
                                            }}
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                        >
                                            <path d="M15 4.41 13.59 3 9 7.59 4.41 3 3 4.41 7.59 9 3 13.59 4.41 15 9 10.41 13.59 15 15 13.59 10.41 9 15 4.41Z"></path>
                                        </svg>
                                    </header>
                                    <LogoutMenu>
                                        <MenuRow>
                                            <div>
                                                <Link to="/logout">
                                                    log out
                                                </Link>
                                            </div>
                                        </MenuRow>
                                    </LogoutMenu>
                                </LogoutPop>
                            ) : (
                                ""
                            )}
                        </RightsideLogos>
                    </>
                ) : (
                    <div display="inline-flex">
                        <HeaderButton
                            onClick={() => navigate("/login")}
                            BgColor="hsl(205deg 46% 92%)"
                            Color="hsl(205deg 47% 42%)"
                            BoColor="hsl(204, 41%, 63%)"
                        >
                            Log in
                        </HeaderButton>

                        <HeaderButton
                            onClick={() => navigate("/signup")}
                            BgColor="hsl(206deg 100% 52%)"
                            Color="hsl(0deg 0% 100%)"
                            BoColor="hsl(204, 41%, 63%)"
                        >
                            Sign up
                        </HeaderButton>
                    </div>
                )}
            </HeaderBarContainer>
        </HeaderBar>
    );
}
