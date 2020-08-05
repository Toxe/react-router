import React from "react";
import { Routes, Route, Link, useParams, Outlet } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./NotFound";

const Content = styled.div`
    background: #ffe392;
    padding: 10px;
`;

const User = styled.div`
    background: #ffecb6;
    padding: 10px;
`;

const users = ["1", "2", "3"];

export default function Users() {
    return (
        <Routes>
            <Route path="/" element={<AllUsers />}>
                <Route path="me" element={<MyProfile />} />
                <Route path=":userId" element={<SingleUser />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

function AllUsers() {
    return (
        <Content>
            <h1>Users</h1>
            <ul>
                {users.map((userId, idx) => (
                    <li key={idx}>
                        <Link to={userId}>User {userId}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </Content>
    );
}

function SingleUser() {
    const { userId } = useParams();

    if (!users.includes(userId)) return <NotFound />;

    return (
        <User>
            <h3>User {userId}</h3>
            <p>
                Username: user{userId}<br />
                eMail: user{userId}@example.com
            </p>
        </User>
    );
}

function MyProfile() {
    return (
        <User>
            <h3>My Profile</h3>
            <p>Oh my...!</p>
        </User>
    );
}
