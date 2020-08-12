import React from 'react';
import './ImageCircle.css'

const ImageCircle = ({name, lastName, imageUrl, description, age})=> {

    const fullName = () => name + ' ' + lastName

    return (
        <div>
            <img src={imageUrl} alt=" "/>
            <p className='title'>{fullName()}</p>
            <p className='title'>{age}</p>
            <p className='title'>{description}</p>
        </div>
    )
}

export default ImageCircle