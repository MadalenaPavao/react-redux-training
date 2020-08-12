import React, { Fragment } from 'react';

//const CustomButton = ({buttonName = "Show description", children})=>{
const CustomButton = ({buttonName = "Hide description", children, onClickHandler, buttonType})=>{

    const buttonRender = (buttonType === 'delete') ? 
                        <button style={{marginTop : "10px"}} className="btn btn-danger" onClick={onClickHandler}>{ buttonName }</button>
                    :
                        <button style={{marginTop : "10px"}} className="btn btn-success" onClick={onClickHandler}>{ buttonName }</button>


    return (
        <Fragment>
            {buttonRender}
            <div>{children}</div>
        </Fragment>
    )
}

// <button style={{marginTop : "10px"}} className={buttonType === 'delete' ? "btn btn-danger" : "btn btn-success"} onClick={onClickHandler}>{ buttonName }</button>
export default CustomButton