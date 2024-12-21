import styled from "styled-components";

const Content = styled.div`
    background:rgb(227, 197, 255);
    padding: 10px;
`;

const Title = styled.h1``;

const Text = styled.p`
    background:rgb(234, 216, 250);
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
