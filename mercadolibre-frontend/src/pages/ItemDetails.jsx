import React,{useState,useEffect} from "react";
import { useHistory,useParams,withRouter } from 'react-router-dom';
import { Col,Row } from "react-bootstrap";
import ItemDetail from '../components/Item/ItemDetail';
import MeliService from "../services/MeliService";
import Breadcrumb from '../components/Breadcrumb';

const Details = (props)=>{
    const [item,setItem] = useState();
    const [categories,setCategories] = useState([]);
    let { id } = useParams();
    useEffect(()=>{
        const service = new MeliService();
        const fetchData = async ()=>{
            const apiResponse1 = await service.getItem(id);
            console.debug("ResponseDetail",apiResponse1);
            return apiResponse1;
        }
        (async ()=> {
            const res = (await fetchData()).data;
            setItem(res.item);
            setCategories(res.categories);
        })();
    },[id]);
    return (
        <>
            <Breadcrumb items={categories}></Breadcrumb>
            <div className="itemsContainer">
                {item && <ItemDetail detail={item}></ItemDetail> }
            </div>
        </>
    )
};

export default withRouter(Details);