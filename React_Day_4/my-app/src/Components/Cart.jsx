import React from 'react'
import { GrFacebookOption, GrInstagram, GrLinkedinOption } from "react-icons/gr";

const Cart = ({ name, image, designation, description }) => {
    return (
        <div className='cart-container'>
            <div>
                <img src={image} alt="" />
                <p style={{ fontSize: "13px" }}>{designation}</p>
                <h2>{name}</h2>
                <p className='des' style={{ fontSize: "13px" }}>{description}</p>
            </div>
            <div className='icon-conteiner'>
                <div>
                    <GrFacebookOption />
                </div>
                <div>
                    <GrInstagram />
                </div>
                <div>
                    <GrLinkedinOption />
                </div>
            </div>
        </div>
    )
}

export default Cart