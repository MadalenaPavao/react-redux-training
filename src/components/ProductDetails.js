import React, { Component, Fragment } from 'react';
import { JSON_PRODUCTS } from '../api/products';
import { connect } from 'react-redux';
import * as ActionType from '../store/action'


class ProductDetails extends Component {

    componentDidUpdate() {
        console.log(this.state)
        if(this.state.goToBack){
            console.log("Go back");
            this.props.history.push("/product")

        }
    }

    filterProduct = (id)=>{
        const filtredProduct = this.props.products.filter(product => product.productId === +id)[0]
        return filtredProduct
    }

    state = {
        mode : '',
        goToBack : false,
        product : (this.filterProduct(this.props.match.params.id) ? this.filterProduct(this.props.match.params.id) :
            {
                productId: Date.now(),
                productName: "",
                productCode: "",
                releaseDate: "",
                description: "",
                price: 0,
                starRating: 0,
                imageUrl: ""
            }
        ),
    }

    componentDidMount(){
        const arrParams = this.props.location.search.split('=')
        console.log("mode ==> ", arrParams[arrParams.length-1])
        if(arrParams.length > 0)
            this.setState({ mode: arrParams[arrParams.length-1]})
    }

    getProductIndex = (product) => {
        return JSON_PRODUCTS.indexOf(product)
    }

    handleNextProduct = (index)=> {
        this.props.history.push("/product/"+ JSON_PRODUCTS[index].productId)
    }
    

    handleProductName = event => {
        const updatedProduct = this.state.product
        updatedProduct.productName = event.target.value
        this.setState({
            ...this.state,
            product : updatedProduct
        })
    }

    handleProductCode = event => {
        const updatedProduct = this.state.product
        updatedProduct.productCode = event.target.value
        this.setState({
            ...this.state,
            product : updatedProduct
        })
    }

    handleDescription = event => {
        const updatedProduct = this.state.product
        updatedProduct.description = event.target.value
        this.setState({
            ...this.state,
            product : updatedProduct
        })
    }

    handleReleaseDate = event => {
        const updatedProduct = this.state.product
        updatedProduct.releaseDate = event.target.value
        this.setState({
            ...this.state,
            product : updatedProduct
        })
    }

    handlePrice = event => {
        const updatedProduct = this.state.product
        updatedProduct.price = event.target.value
        this.setState({
            ...this.state,
            product : updatedProduct
        })
    }

    handleStarRating = event => {
        const updatedProduct = this.state.product
        updatedProduct.starRating = event.target.value
        this.setState({
            ...this.state,
            product : updatedProduct
        })
    }

    handleImageUrl = event => {
        const updatedProduct = this.state.product
        updatedProduct.imageUrl = event.target.value
        this.setState({
            ...this.state,
            product : updatedProduct
        })
    }

    handlerUpdateProduct = ()=>{

        //this.props.onUpdate(this.state.product)
        //this.setState({...this.state, goToBack:true})
        this.props.history.push('/product')
    }

    handlerCreateProduct = ()=>{
        this.props.onCreate(this.state.product)
        //this.setState({...this.state, goToBack:true})
        this.props.history.push('/product')
    }

    render(){
        console.log(this.state.product)
        const selectedProductIndex = this.getProductIndex(this.props.product)
        
        return(
            <div className="pageContainer">
                <h1>Product details</h1>

                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3">Name:</div>
                            <div className="col-md-6">{this.state.mode === 'edit' || this.state.mode === 'create' 
                                                        ?   
                                                            <input 
                                                                type="text"
                                                                className="form-control"
                                                                value={this.state.product.productName}
                                                                onChange={(event)=> this.handleProductName(event)}
                                                                />
                                                        :
                                                            this.state.product.productName}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">Code:</div>
                            <div className="col-md-6">{this.state.mode === 'edit' || this.state.mode === 'create' 
                                                        ?   
                                                            <input 
                                                                type="text"
                                                                className="form-control"
                                                                value={this.state.product.productCode}
                                                                onChange={this.handleProductCode}
                                                                />
                                                        :
                                                            this.state.product.productCode}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">Description:</div>
                            <div className="col-md-6">{this.state.mode === 'edit' || this.state.mode === 'create' 
                                                        ?   
                                                            <input 
                                                                type="text"
                                                                className="form-control"
                                                                value={this.state.product.description}
                                                                onChange={this.handleDescription}
                                                                />
                                                        :
                                                            this.state.product.description}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">Availability:</div>
                            <div className="col-md-6">{this.state.mode === 'edit' || this.state.mode === 'create' 
                                                        ?   
                                                            <input 
                                                                type="text"
                                                                className="form-control"
                                                                value={this.state.product.releaseDate}
                                                                onChange={this.handleReleaseDate}
                                                                />
                                                        :
                                                            this.state.product.releaseDate}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">Price:</div>
                            <div className="col-md-6">{this.state.mode === 'edit' || this.state.mode === 'create' 
                                                        ?   
                                                            <input 
                                                                type="text"
                                                                className="form-control"
                                                                value={this.state.product.price}
                                                                onChange={this.handlePrice}
                                                                />
                                                        :
                                                            this.state.product.price + '€'}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">5 Star Rating:</div>
                            <div className="col-md-6">{this.state.mode === 'edit' || this.state.mode === 'create' 
                                                        ?   
                                                            <input 
                                                                type="text"
                                                                className="form-control"
                                                                value={this.state.product.starRating}
                                                                onChange={this.handleStarRating}
                                                                />
                                                        :
                                                            this.state.product.starRating}</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img className="center-block img-responsive" 
                                        width="200" 
                                        src={this.state.product.imageUrl} 
                                        alt="" />
                        {this.state.mode === 'edit' || this.state.mode === 'create' 
                            ? 
                                <input 
                                    type="text"
                                    className="form-control"
                                    value={this.state.product.imageUrl}
                                    onChange={this.handleImageUrl}
                                    />
                            :
                               null
                        }
                    </div>
                </div>
                <div className="footer">
                    {this.state.mode === 'edit' || this.state.mode === 'create' 
                        ? 
                            <Fragment>
                                <button className="btn btn-primary" onClick={()=> {this.props.history.push('/product')}}>Back</button>
                                {this.state.mode === 'edit' 
                                    ? <button className="btn btn-primary" onClick={()=> this.handlerUpdateProduct()}>Enregistrer</button>
                                    : <button className="btn btn-primary" onClick={()=> this.handlerCreateProduct()}>Créer</button>
                                }
                            </Fragment>
                        : 
                            <Fragment>
                                <button className="btn btn-primary" onClick={()=> {this.props.history.push('/product')}}>Back</button>
                                <button className="btn btn-primary" onClick={()=> {selectedProductIndex - 1  === -1 ? this.handleNextProduct(JSON_PRODUCTS.length-1): this.handleNextProduct(selectedProductIndex - 1)}}>Prev </button>
                                <button className="btn btn-primary" onClick={()=> {selectedProductIndex + 1  === JSON_PRODUCTS.length ? this.handleNextProduct(0) : this.handleNextProduct(selectedProductIndex + 1)}}>Next </button>
                                <button className="btn btn-danger" onClick={()=> this.props.onDelete(this.state.product.productId) }>Delete </button>
                            </Fragment>

                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        products : state.products
    }
}

const mapsDispatchToProps = dispatch => {
    return {
        onUpdate : (selectedProduct) => dispatch({type : ActionType.UPDATE_PRODUCT, value : selectedProduct}),
        onCreate : (newProduct) => dispatch({type : ActionType.ADD_PRODUCT, value : newProduct}),
        onDelete : (selectedProductId) => dispatch({ type : ActionType.DELETE_PRODUCT, selectedProductId : selectedProductId})
    }
}
export default connect(mapStateToProps,mapsDispatchToProps)(ProductDetails)