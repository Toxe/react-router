import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

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
        <div>
            <h1>Pages</h1>
            <ul>
                <li><Link to="1">Page 1</Link></li>
                <li><Link to="2">Page 2</Link></li>
                <li><Link to="3">Page 3</Link></li>
            </ul>
        </div>
    );
}

function SinglePage() {
    const { pageId } = useParams();

    if (!pages.includes(pageId)) return <NotFound />;

    return (
        <div>
            <h1>Page {pageId}</h1>
            <p>Showing page {pageId}.</p>
        </div>
    );
}
