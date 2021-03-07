import React from 'react'
import { loginBg } from '../../../assets'
import './upload.scss'

const Upload = () => {
    return (
        <div className="upload">
            <img src={loginBg} className="preview" alt="preview"/>
            <input type="file"/>
        </div>
    )
}

export default Upload
