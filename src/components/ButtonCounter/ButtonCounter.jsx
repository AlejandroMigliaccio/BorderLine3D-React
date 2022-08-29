import { useState } from "react";
import './style/style.scss';
import { Button } from "react-bootstrap";
const ButtonCounter =  ({stock, initial}) =>{
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
            <Button variant="success" >
                agregar al carrito
            </Button>
            </div>
        </div>

    )
}

export default ButtonCounter;