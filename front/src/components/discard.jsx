import React from "react";
import styled from "styled-components";

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: hsla(358, 67%, 6%, 0.5);
`;

const DiscardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
`;

const DiscardModal = styled.div`
    position: relative;
    padding: 24px;
    background: white;
    border-radius: 7px;
    div {
        font-size: 27px;
        color: #c22e32;
    }
    p {
        display: block;
        font-size: 13px;
        color: #3b4045;
        margin: 24px 0;
    }
`;

const DiscardBtn = styled.button`
    padding: 10px;
    margin: 0px 4px;
    background: hsl(358deg 62% 52%);
    color: white;
    border: none;
    font-size: 13px;
    border-radius: 3px;
    &:hover {
        background: hsl(358deg 62% 47%);
        cursor: pointer;
    }
`;

const CancelBtn = styled.button`
    padding: 10px;
    margin: 0px 4px;
    background: white;
    color: #6a737c;
    border: none;
    font-size: 13px;
    border-radius: 3px;
    &:hover {
        background: hsl(210deg 8% 98%);
        cursor: pointer;
    }
`;

const XBtn = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 10px;
    margin: 0px 4px;
    background: white;
    color: #6a737c;
    border: none;
    font-size: 13px;
    border-radius: 3px;
    &:hover {
        background: hsl(210deg 8% 98%);
        cursor: pointer;
    }
`;

function Discard({
    onDiscardModal,
    setProblemValue,
    setTryValue,
    setTitleValue,
}) {
    const handleDiscard = () => {
        setProblemValue("");
        setTryValue("");
        setTitleValue("");
    };

    return (
        <DiscardContainer>
            <Background onClick={onDiscardModal} />
            <DiscardModal>
                <div>Discard question</div>
                <p>
                    Are you sure you want to discard this question? This cannot
                    be undone.
                </p>
                <DiscardBtn onClick={handleDiscard}>
                    Discard question
                </DiscardBtn>
                <CancelBtn onClick={onDiscardModal}>Cancel</CancelBtn>
                <XBtn onClick={onDiscardModal}>X</XBtn>
            </DiscardModal>
        </DiscardContainer>
    );
}

export default Discard;
