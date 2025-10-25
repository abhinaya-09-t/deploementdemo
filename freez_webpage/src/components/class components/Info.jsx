import React from "react"
import './info.css'
class Info extends React.Component{
    render(){
        return <div className="info">
            <span><a href="">Products</a></span>
            <span><a href="">Our Story</a></span>
            <span><a href="">Flavours</a></span>
            <span><a href="">Our Location</a></span>
        </div>
    }

}
export default Info