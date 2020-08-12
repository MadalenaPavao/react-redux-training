import React, { Fragment } from 'react'
import { JSON_PRODUCTS } from "../api/products"
import { Link, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import { connect } from 'react-redux'
import * as ActionType from '../store/action'

class ProductList extends React.Component {

    componentDidUpdate(){
        if(this.state.products.length !== this.props.products.length)
            this.setState({
                ...this.state,
                products : this.props.products
            })
    }

    state = {
        showImage : false,
        products : this.props.products
    }

    filterProduct = (search)=>{
        return this.props.products.filter(product => product.productName.toLowerCase().includes(search.toLowerCase()))
    }

    onChangeHandler = event => {
        const newProductList = 
        this.setState({
            products : (event.target.value.length === 0) ? this.props.products : this.filterProduct(event.target.value)
        })
    }


    onClichButtonShowImage = ()=> {
        this.setState({
            products : this.state.products,
            showImage : !this.state.showImage
        })
    }

    handleEdit = (productId)=> {
        this.props.history.push("/product/"+ productId + "?mode=edit")
    }

    render() {
        
        return (
            <Fragment>
                <div className="pageContainer">
                    <h1>Liste des produits</h1>
                    <div className="row" style={{margin:'20px 10px'}}>
                        <label className="col-2">Filter by :</label>
                        <input className="col-3 form-control mr-sm-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            onChange={(event)=>this.onChangeHandler(event)}
                        />
                        <button className="btn btn-success" onClick={()=> {this.props.history.push("/product/"+ 0 + "?mode=create")}}> Create product </button>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <button className="btn btn-primary"
                                            onClick={this.onClichButtonShowImage}>
                                        {this.state.showImage ? 'Hide image' : 'Show image'} 
                                    </button>
                                </th>
                                <th scope="col">Product </th>
                                <th scope="col">Available  </th>
                                <th scope="col">Price</th>
                                <th scope="col">5 star rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map(product => (
                                <tr key={product.productId}>
                                    <th scope="row">
                                        {
                                            this.state.showImage ?
                                                <img src={product.imageUrl} 
                                                    className ="productListImage"
                                                    height={100}
                                                    width={100}
                                                    alt=""
                                                    />
                                            : null
                                        }
                                    </th>
                                    <td>
                                        <Link to={"/product/"+ product.productId}>
                                            {product.productName} 
                                        </Link>
                                    </td>
                                    <td>{product.releaseDate} </td>
                                    <td>{product.price + ' €'} </td>
                                    <td>{product.starRating} </td>
                                    <td>
                                        <button onClick={()=> this.props.onDelete(product.productId)} className="btn btn-danger">delete</button>
                                        <button className="btn btn-primary" onClick={()=> this.handleEdit(product.productId)}>Edit</button>
                                    </td>
                                </tr>

                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}

const mapsStateToProps = state => {
    return {
        products : state.products
    }
}

const mapsDispatchToProps = dispatch => {
    return {
        onDelete : (selectedProductId) => dispatch({ type : ActionType.DELETE_PRODUCT, selectedProductId : selectedProductId})
    }
}
export default connect(mapsStateToProps, mapsDispatchToProps)(ProductList) 