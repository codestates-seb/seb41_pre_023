import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import styled from "styled-components";

const Container = styled.div``;

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
