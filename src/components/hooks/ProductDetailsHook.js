import React, { useState, useEffect } from 'react';
import { JSON_PRODUCTS } from '../../api/products';

const ProductDetailsHook = (props)=> {

    const getSelectedProduct = ()=>{
        return JSON_PRODUCTS.filter(product => product.productId == +props.match.params.id)[0]
    }

    const getSelectedProductIndex = (product)=>{
       return JSON_PRODUCTS.indexOf(product)
    }

    const [product, setProduct] = useState(getSelectedProduct())
    const [index, setProductIndex] = useState(getSelectedProductIndex(getSelectedProduct()))

    useEffect(()=>{
        setProduct(JSON_PRODUCTS[index])
    }, [index])

    useEffect(()=>{
        props.history.push('/product/'+product.productId)
    }, [product])
 

    return(
        <div className="pageContainer">

            <h1> Product Details Hook</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3">Name:</div>
                        <div className="col-md-6">{product.productName}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">Code:</div>
                        <div className="col-md-6">{product.productCode}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">Description:</div>
                        <div className="col-md-6">{product.description}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">Availability:</div>
                        <div className="col-md-6">{product.releaseDate}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">Price:</div>
                        <div className="col-md-6">{product.price + '€'}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">5 Star Rating:</div>
                        <div className="col-md-6">{product.starRating}</div>
                    </div>
                </div>

                <div className="col-md-6">
                    <img className="center-block img-responsive" 
                        width="200" 
                        src={product.imageUrl} />
                </div>
            </div>
            <div className="footer">
                <button className="btn btn-primary" onClick={()=> {props.history.push('/product')}}>Back</button>
                <button className="btn btn-primary" onClick={()=> {index - 1  === -1 ? setProductIndex(JSON_PRODUCTS.length-1): setProductIndex(index - 1)}}>Prev </button>
                <button className="btn btn-primary" onClick={()=> {index + 1  === JSON_PRODUCTS.length ? setProductIndex(0) : setProductIndex(index + 1)}}>Next </button>
            </div>
        </div>
    )
}
export default ProductDetailsHook
//