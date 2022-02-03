import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';
function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const [orderPlaced,setOrderPlaced] = useState(false);

    const emptyShopCart = () =>{
        setInterval(emptyCart,2000);

    }
    if(isEmpty) 
        return (
            <div>
                <h1 style={{minHeight: "430px"}}>
                    Your cart is empty
                </h1> 
                <hr/>
                <Link style={{ textDecoration: 'none', fontFamily: 'monospace', color: 'rgb(77, 152, 182)'}} to='/shop'>
                    <label className="go-to-shop" style={{cursor: "pointer"}}>
                        Shop now
                    </label>
                </Link>
                <hr/>
            </div>
        );
    return(
        <div style={{minHeight: "600px"}}>
                <div className='total-and-clear'>
                    <h2> Cart ({totalUniqueItems}) total items: ({totalItems})</h2>
                    <div>
                            <button className="clear" onClick={()=> emptyShopCart()}>Clear cart</button>
                    </div>
                </div>
                
                <div className="cart">
                    <table>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Update</th>
                        <tbody>
                            {items.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img style={{height: "200px",width: "200px"}} src={item.image} alt=""/>
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {item.price+"$"}
                                        </td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td className='update-buttons'>
                                            <button onClick={()=> updateItemQuantity(item.id,item.quantity - 1)}>-</button>
                                            <button onClick={()=> updateItemQuantity(item.id,item.quantity + 1)}>+</button>
                                            <button onClick={()=> removeItem(item.id)}>🗑</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='display-right'>
                        <h1><span style={{fontSize: "30px"}}>Total Price = {"  " + cartTotal + "$"}</span></h1>
                    </div>
                    <div className='display-right'>
                        <button className="clear" onClick={()=> {setOrderPlaced(true);emptyShopCart();}}>Place Order</button>
                        {orderPlaced && <div><span>Order Placed Successfully!</span></div>}                        
                    </div>
                    
                    
                </div>
        </div>
    )
    
}

export default React.memo(Cart);