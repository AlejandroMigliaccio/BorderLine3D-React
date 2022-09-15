import './style.scss';

import { useState } from "react";
import { Button } from "react-bootstrap";
const ItemCounter =  ({stock, initial, onAdd}) =>{

    const [count,setCount] = useState(initial);

    const addOne = () => {
        count<stock?setCount(count + 1):null;
    }

    const takeOne = () =>{
        count>1?setCount(count - 1):null;
    }

    
    return(
        <div className="counter">
            <div className="counter___prodName">
                Item N° x
            </div>
            <div className="counter__count">
                <Button onClick={takeOne} variant="danger">
                    -
                </Button>{''}
                <div>
                    {count}
                </div>
                <Button onClick={addOne} variant="primary" >
                    +
                </Button>
            </div>
            <div className="counter__addtocart">
            <Button variant="success" onClick={()=>onAdd(count)} disabled={stock === 0}>
                agregar al carrito
            </Button>
            </div>
        </div>

    )
}

export default ItemCounter;
