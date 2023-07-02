import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, isOpen, closeModalFunc, art }){
    if(!isOpen) return null;
    return createPortal(
        <div id="art-window">
            <img src={require(`../../../media/artwork/${art}`)} />
            <br />
            <button onClick={closeModalFunc}>Close</button>
        </div>,
        document.getElementById(`portal`)
    )
}