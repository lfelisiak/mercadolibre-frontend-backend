import React,{useState,useEffect} from "react"
import { useHistory,withRouter } from 'react-router-dom'
import {InputGroup,FormControl,Button,Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props)=>{
    let history = useHistory();
    const [search,setSearch] = useState("");
    useEffect(()=>{
        if(props.location && props.location.search)
        {
            let urlParam = new URLSearchParams(props.location.search).get(
                "search"
            );
            setSearch(urlParam);
        }
    },[]);
    const handleChange = (value) => {
        setSearch(value);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        redirect();
    }
    const redirect = () => {
        if(search)
            history.push(`/items?search=${search}`,{search:search})
    } 
    return (
        <>
            <Form className="form-inline w-100" onSubmit={(e) => handleSubmit(e)}>
                <InputGroup className="w-100">
                    <FormControl
                        placeholder="Nunca dejes de buscar..."
                        value={search}
                        aria-label="search"
                        aria-describedby="searchbar"
                        onChange={(e) => { handleChange(e.target.value) }}
                    />
                    <InputGroup.Append>
                        <Button variant="light" onClick={()=>{redirect()}}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </>
    )
};

export default withRouter(SearchBar);
