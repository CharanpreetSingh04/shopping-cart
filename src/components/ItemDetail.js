import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import '../App.css';
function ItemDetail() {
    useEffect(() => {
        fetchItem();
    },[]);

    const [item,setItem] = useState({});
    const id = useParams();
    const fetchItem = async() => {
        const data = await fetch(`https://fakestoreapi.com/products/${id.id}`,{mode: 'cors'});
        const product = await data.json();
        setItem(product);
    }

    const { addItem } = useCart();
    const str = "->"
    return(
        <div className='item' style={{minHeight: "600px"}}>
            {item.rating === undefined&&<h1>Fetching product information  ....</h1>}
            <br/><br/>
            {item.rating !== undefined&&<img src={item.image} alt=""/>}
            {item.rating !== undefined&&<h2>{item.title+"   "} <div><span>{item.rating.rate+"✦ "}</span> rated by <span>{" "+item.rating.count+' '}</span> customers</div> </h2>}
            
            {item.rating !== undefined&&<div><h3><em>Price:</em><span>{" "+item.price+"$ "}</span></h3></div>}
            {item.rating !== undefined&&<div><h3><em>Category:</em><span>{" "+item.category}</span></h3></div>}
            <br/>
            {item.rating !== undefined&&<div><h3><em>Description:</em><span>{"  "+item.description}</span></h3></div>}
            
            <br/>
            {item.rating !== undefined&&<div>
                
                <Link style={{ textDecoration: 'none' }} to='/cart'><h2  style={{cursor: "pointer"}} onClick={()=> {addItem(item)}}>Add to cart{" "+str}</h2></Link>
                
            </div>}
            <br/>
            <br/>
        </div>
    )
    
}

export default React.memo(ItemDetail);