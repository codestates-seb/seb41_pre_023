import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
`;

const QuestionsAll = styled.div``;

export default function QuestionsList() {
  return (
    <>
      <Header />
      <Container>
        <LeftSidebar />
        <QuestionsAll />
      </Container>
      <Footer />
    </>
  );
}
