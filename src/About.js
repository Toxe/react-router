import React from "react";
import styled from "styled-components";

const Content = styled.div`
    background: #b6fdc7;
    padding: 10px;
`;

const Title = styled.h1``;

const Text = styled.p`
    background: #d6ffe0;
    padding: 10px 0px 10px 0px;
`;

export default function About() {
    return (
        <Content>
            <Title>About</Title>
            <Text>About us...</Text>
        </Content>
    );
}
