import React from "react";
import styled from "styled-components";

const Message = styled.div`
    background: red;
    color: white;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px;
`;

export default function NotFound() {
    return <Message>Resource not found.</Message>;
}
