import React from "react";
import { Container } from "react-bootstrap";
const Content = (props)=>{
    return (
        <main className="h-75">
            <Container>
                {props.children}
            </Container>
        </main>
    )
}

export default Content;