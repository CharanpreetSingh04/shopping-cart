import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const things = [];
function Shop() {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        if(things.length === 0)
            fetchItems();
        else{
            setItems(things);
        }
    },[things]);

    

    const fetchItems = async () =>{
        const data = await fetch('https://fakestoreapi.com/products',{mode: 'cors'})
        const products = await data.json();
        setItems(products);
        products.forEach(product => {
            things.push(product);
        });
    }
    const listItems = items.map((item) =>
        <Link style={{ textDecoration: 'none' }} to={`/shop/${item.id}`}>
            <div className='item' key={item.id}>
                <img className='shop-image' src={item.image} alt=""/>
                <h2>{item.title}</h2>
            </div> 
        </Link>
    );
    return(
        <div>
            {items[0] === undefined&&<h1 style={{minHeight: "600px"}}>Fetching all products  ....</h1>}
            {
                listItems
            }
        </div>
    )
    
}

export default React.memo(Shop);