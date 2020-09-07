import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./NotFound";

const Content = styled.div`
    background: #dcdeff;
    padding: 10px;
`;

const Page = styled.div`
    background: #babeff;
    padding: 10px;
`;

const Logo = styled.div`
    background: #454545;
    padding: 20px;
`;

const pages = ["1", "2", "3"];

export default function Pages() {
    return (
        <Routes>
            <Route path="/" element={<AllPages />} />
            <Route path=":pageId" element={<SinglePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

function AllPages() {
    return (
        <Content>
            <h1>Pages</h1>
            <ul>
                {pages.map((pageId, idx) => (
                    <li key={idx}>
                        <Link to={pageId}>Page {pageId}</Link>
                    </li>
                ))}
                <li><Link to="99">Page 99 (missing page)</Link></li>
            </ul>
        </Content>
    );
}

function SinglePage() {
    const { pageId } = useParams();

    if (!pages.includes(pageId)) return <NotFound />;

    return (
        <Page>
            <h1>Page {pageId}</h1>
            <p>Showing page {pageId}.</p>
            <Logo><img src="/logo192.png" alt="Logo" /></Logo>
            <p><a href="/logo192.png" download>download logo</a></p>
        </Page>
    );
}
