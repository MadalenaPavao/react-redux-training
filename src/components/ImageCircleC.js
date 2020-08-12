import React, {Component} from 'react';
import CustomButton from './CustomButton';
import './ImageCircle.css';

class ImageCircleC extends Component {

    render(){
        const fullName = () => this.props.name + ' ' + this.props.lastName



        return (

            <div id='itemContainer' style={{margin:'10px', display:'flex', flexDirection : 'column', alignItems : 'center' }}>
                <img src={this.props.imageUrl} onClick={()=> this.props.onClick()} alt=""/>
                <p >{fullName()}</p>
                <p >{this.props.age}</p>
                <p >{this.props.description}</p>
                <CustomButton>
                    {/*<div>
                        <p>Nous sommes en formation !</p>
                        <p>J'envoie un children avec plusieurs</p>
                    </div>*/}
                </CustomButton>
                <CustomButton onClickHandler={this.props.deleteUserHandler} buttonType='delete' buttonName="Delete"/>
            </div>
        )
    }
}

export default ImageCircleC