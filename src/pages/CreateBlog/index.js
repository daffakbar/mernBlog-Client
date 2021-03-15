import React, { useEffect, useState } from 'react'
import  { Input, Button, Upload, TextArea, Gap, Link } from '../../components'
import './createblog.scss'
import {useHistory, withRouter} from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {postToAPI, setForm, setImgPreview, updateToAPI} from '../../config/redux/action'

const CreateBlog = (props) => {
    const{form, imgPreview} = useSelector(state => state.createBlogReducer);
    const {title, body, image} = form;
    const [isUpdate, setIsUpdate] = useState(false)
    const dispatch = useDispatch();

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    // const [image, setImage] = useState('');
    // const [imagePreview, setImagePreview] = useState(null);
    const history = useHistory();

    useEffect(() => {
        console.log('params: ',props)
        const id = props.match.params.id;
        if (id) {
            setIsUpdate(true)
            axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            // axios.get(`https://api-blog-mern.herokuapp.com/v1/blog/post/${id}`)
            .then(res => {
                const data = res.data.data;
                console.log('success: ', data)
                dispatch(setForm('title', data.title))
                dispatch(setForm('body', data.body))
                dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
                // dispatch(setImgPreview(`https://api-blog-mern.herokuapp.com/${data.image}`))
            })
            .catch(err => {
                console.log('err: ', err)
            })
        }
    }, [props])
    const onSubmit = () => {
        // console.log('title: ', title);
        // console.log('body: ', body);
        // console.log('Image: ', image);
        const id = props.match.params.id;
        if (isUpdate) {
            console.log('Update Data');
            updateToAPI(form, id);
        }else{
            console.log('Create Data')
            postToAPI(form);
        }

    }
    const onImageUpload = (e) => {
        const file  = e.target.files[0];
        dispatch(setForm('image',file));
        // dispatch(setForm)
        dispatch(setImgPreview(URL.createObjectURL(file)));
    }

    return (
        <div className="blog-post">
            {/* <div className="blog-link"> */}
                <Link title="kembali" onClick={() => history.push('/')} />
            {/* </div> */}
            <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
            <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview}/>
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
            <Gap height={20} />
            <div className="btn-create">
                <Button title={isUpdate ? 'Update': 'Simpan'} onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default withRouter(CreateBlog)
