import React from "react";
import parse from 'html-react-parser';
import {convertNewLineToBr,priceParser} from '../../helpers/Helpers';
import { Row,Col,Image, Card, Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
const ItemDetail = ({detail})=>{
    const { t, i18n } = useTranslation();
    return (
        <>
            {
                <Card>
                    <Card.Body className="pt-0">
                        <Row>
                            <Col md={{order:'first',span:8}} xs={{ order: 'last' }} className="text-left pt-32">
                                <Image width="680" src={detail.picture} fluid ></Image>
                                <Row>
                                    <Col>
                                        <span className="font-28 d-flex mb-32">Descripción del producto</span>
                                        <div className="font-16 d-flex text-left mb-32 text-break">
                                            {detail.description ? parse(convertNewLineToBr(detail.description)) : "El vendedor no incluyó una descripción del producto"}
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4} className="text-left">
                                <div className="pt-32 pb-16 d-flex font-14">
                                    <span>{t(detail.condition)}</span> 
                                    {detail.sold_quantity && <span className="cantVendidos">{`${detail.sold_quantity} vendidos` }</span>}
                                </div>
                                <span className="font-24 d-flex font-weight-bold">{detail.title}</span>
                                <span className="font-46 d-flex mt-32 mb-32">{priceParser(detail.price.amount)} <sup>{detail.price.decimals}</sup> </span>
                                <Button className="buyIt mb-5" onClick={()=> window.open(detail.permalink,"_blank")} size="md" block>Comprar Ahora</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>               
            }
        </>
    )
}

export default ItemDetail;