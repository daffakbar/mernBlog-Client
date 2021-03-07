import React from 'react'
import {regisBg} from '../../assets'
import './detailblog.scss'
import { Gap, Link } from '../../components'
import { useHistory } from 'react-router-dom'


const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={regisBg} alt="thumb"/>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo voluptate eveniet nisi sint ipsum nobis perferendis obcaecati! Iusto quos delectus sed sint nemo beatae eius velit autem maxime voluptates!</p>
            <Gap height={20} />
            <Link title="Kembali ke Home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
