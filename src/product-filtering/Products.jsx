import React from 'react'
import { ProductData } from './Database'
import Cards from './Card'
import { createUseStyles } from 'react-jss'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../redux/action/Index';

const myStyle = createUseStyles({
    flex: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        flexWrap: "wrap"
    },
    width: {
        maxWidth: "90%"
    }
})

const Products = ({ productNum }) => {
    const classes = myStyle()
    
    const addedProducts= useSelector((state)=>{
        return state.ADD_TO_CART
    })
    const filteredProducts = ProductData.filter(elem => elem.id.includes(productNum))
    const CartProducts= filteredProducts.filter((elem)=> addedProducts.some((addedElem) => addedElem.id === elem.id))
    // add product funtinality 
    const dispatch = useDispatch()
    const handleAdd = (id) => {
        filteredProducts.map((elem, index) => {
            if (index === id) {
                const isProductInCart = CartProducts.some((cartProduct) => cartProduct.id === elem.id);

                if (!isProductInCart) {
                    dispatch(addtocart(elem));
                  } else {
                    console.log("already added");
                  }

            }
        })
    }

    return (
        <div className={classes.width}>

            <div className={classes.flex}>
                {
                    filteredProducts.map((elem, index) => {
                        return (
                            <Cards key={index} 
                            title={elem.title} 
                            image={elem.imageUrl}  
                             productName={elem.title} 
                             onclick={()=>handleAdd(index)}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
