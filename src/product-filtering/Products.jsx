import React from 'react'
import { ProductData } from './Database'
import Cards from './Card'
import { createUseStyles } from 'react-jss'


const myStyle = createUseStyles({
    flex: {
        width:"100%",
        display: "flex",
        justifyContent: "center",
        gap:"3rem",
        flexWrap: "wrap"
    },
    width: {
        maxWidth: "90%"
    }
})

const Products = ({productNum}) => {
    const classes = myStyle()

    const filteredProducts = ProductData.filter(elem => elem.id.includes(productNum))

    // const handleAdd= (productid)=>{
    //    const addedProduct= ProductData.map((elem,index)=>{
    //      if (index === productid) {
    //         return elem.is_Add= true
    //      }
    //    })
    //    console.log(addedProduct)
    // }
   

    return ( 
        <div className={classes.width}>

            <div className={classes.flex}>
                {
                   filteredProducts.map((elem,index)=>{
                    return(
                        <Cards key={index}
                        title={elem.title}
                        image={elem.imageUrl}
                        productName={elem.title}
                      
                        />
                    )
                   })
                }
            </div>
        </div>
    )
}

export default Products
