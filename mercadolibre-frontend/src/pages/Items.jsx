import React,{useState,useEffect} from "react";
import { withRouter,useHistory } from 'react-router-dom';
import Item from '../components/Item/Item';
import Breadcrumb from '../components/Breadcrumb';
import MeliService from "../services/MeliService";

const Items = (props) =>{

    const [items,setItems] = useState([]);
    const [categories,setCategories] = useState([]);
    let history = useHistory();
    useEffect(()=>{
        let urlParam = new URLSearchParams(props.location.search).get(
            "search"
        );
        const service = new MeliService();
        const fetchData = async ()=>{
            const apiResponse = await service.getItems(urlParam);
            return apiResponse;
        }
        (async () => {
            try{
                const res = (await fetchData()).data;
                if(!res.items)
                    throw new Error("No hay coincidencias con tu búsqueda.")
                setItems(res.items);
                setCategories(res.categories);
            }catch(error){
                history.push('error',{message:error.message});
            }
        })();
    },[props.location.search]);
    
    return (
        <>
            <Breadcrumb items={categories}></Breadcrumb>
            <div className="itemsContainer">
            {
                items && items.map(item => (
                    <Item key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        picture={item.picture}
                        address={item.address}
                        free_shipping={item.free_shipping}
                    />
                ))
            }
            </div>
        </>
    )
}

export default withRouter(Items);