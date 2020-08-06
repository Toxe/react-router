import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Message = styled.div`
    background: red;
    color: white;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px;
`;

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Message>
            <div>Resource not found.</div>
            <div>
                <button type="button" onClick={() => navigate(-1)}>
                    go back
                </button>
            </div>
        </Message>
    );
}
