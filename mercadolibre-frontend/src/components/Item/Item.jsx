import React from "react";
import { useHistory } from 'react-router-dom'
import { Card,Row,Col,Image } from "react-bootstrap";
import {priceParser} from '../../helpers/Helpers';
import FreeShipping from "./FreeShipping";

const Item = ({id,title,price,address,picture,free_shipping})=>{
    let history = useHistory();
    const redirect = (id) => {
        if(id)
            history.push(`/items/${id}`,{id:id})
    } 
    return (
        <>
            <Card className="itemList" onClick={()=>redirect(id)}>
                <Row className="p-3 align-items-center">
                    <Col md={2} className="pt-16 pb-16">
                        <Image className="w-100 thumb" src={picture} alt={title}/>
                    </Col>
                    <Col md={8}>
                        <Row className="mb-32">
                            <Col className="text-left">
                                <span className="font-24">{priceParser(price.amount)}</span>
                                <FreeShipping freeShipping={free_shipping}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-left"><span className="font-18">{title}</span></Col>
                        </Row>
                    </Col>
                    <Col md={2} className="text-left"><span className="font-12">{address.state}</span></Col>
                </Row>
            </Card>
        </>
    )
}

export default Item;