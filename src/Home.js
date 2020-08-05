import React from "react";
import styled from "styled-components";

const Content = styled.div`
    background: #fdb6b6;
    padding: 10px;
`;

const Title = styled.h1``;

const Text = styled.p`
    background: #ffcece;
    padding: 10px 0px 10px 0px;
`;

export default function Home() {
    return (
        <Content>
            <Title>Home</Title>
            <Text>Content.</Text>
        </Content>
    );
}
