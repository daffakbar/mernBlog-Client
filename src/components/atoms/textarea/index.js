import React from 'react'
import './textarea.scss'

const TextArea = ({...res}) => {
    return (
        <div>
            <textarea className="text-area" {...res}>

            </textarea>
        </div>
    )
}

export default TextArea
