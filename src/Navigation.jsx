import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    padding: 10px;
    background: #d3d3ff;
`;

const Item = styled.div`
    > a {
        font-weight: bold;
    }

    &:not(:last-child)::after {
        content: "|";
        padding: 0px 10px 0px 10px;
    }
`;

export default function Navigation() {
    return (
        <Nav>
            <Item><Link to="/">Home</Link></Item>
            <Item><Link to="/pages">Pages</Link></Item>
            <Item><Link to="/users">Users</Link></Item>
            <Item><Link to="/about">About</Link></Item>
            <Item><Link to="/users/me">My Profile</Link></Item>
        </Nav>
    );
}
