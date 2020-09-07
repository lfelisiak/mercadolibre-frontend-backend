import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
const BreadCrumb = (props)=>{
    return (
        <>
           <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                    {
                        props.items && props.items.map((category,index,array) => (
                            <li className="breadcrumb-item pl-0 font-12" key={index}> 
                                <span>
                                    {category}
                                    { index !== array.length-1 && <FontAwesomeIcon className="font-12" icon={faChevronRight} />}
                                </span> 
                            </li>
                        ))
                    }
                </ol>
            </nav>
        </>
    )
}

export default BreadCrumb;