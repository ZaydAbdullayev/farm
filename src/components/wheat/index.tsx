import React from 'react';
import wheat from "../../assets/bugday.gif";

export default function Wheat({ maked }) {
    return (
        <figure className={`wheat ${maked ? 'maked' : ''}`}>
            <img src={wheat} alt="Wheat" />
            <img src={wheat} alt="Wheat" />
            <img src={wheat} alt="Wheat" />
            <img src={wheat} alt="Wheat" />
            <img src={wheat} alt="Wheat" />
            <img src={wheat} alt="Wheat" />
        </figure>
    );
}