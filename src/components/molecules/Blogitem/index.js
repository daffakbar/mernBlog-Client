import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Gap } from '../../atoms'
import './blogitem.scss'

const Blogitem = (props) => {
    const history = useHistory()
    const {image, title, name, date, body} = props;
    return (
        <div className="blog-item">
            <img src={image} alt="post" className="image-thumb"/>
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={10}/>
                <Button title="View detail" onClick={() => history.push('/detail-blog')}/>
            </div>
        </div>
    )
}

export default Blogitem
