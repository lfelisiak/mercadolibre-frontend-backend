import React from "react";
import { useHistory,withRouter } from 'react-router-dom';
import {Button} from 'react-bootstrap';

const ErrorPage = (props)=>{

    let history = useHistory();
    const redirectHome = ()=>{
        history.push("/");
    }
    return (
        <>
            <p>{props.location && props.location.message}</p>
            <p>No encontró lo que busca?</p>
            <Button variant="light" block onClick={redirectHome}>Volver</Button>
        </>
    )
};

export default withRouter(ErrorPage);