import React from 'react'
import  { Input, Button, Upload, TextArea, Gap, Link } from '../../components'
import './createblog.scss'
import {useHistory} from 'react-router-dom'

const CreateBlog = () => {
    const history = useHistory()
    return (
        <div className="blog-post">
            {/* <div className="blog-link"> */}
                <Link title="kembali" onClick={() => history.push('/')} />
            {/* </div> */}
            <p className="title">Create Blog Post</p>
            <Input label="Post Title"/>
            <Upload/>
            <TextArea />
            <Gap height={20} />
            <div className="btn-create">
                <Button title="Save"/>
            </div>
        </div>
    )
}

export default CreateBlog
