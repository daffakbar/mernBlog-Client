import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Blogitem, Button, Gap} from '../../components'
import './home.scss'
import { setDataBlog } from '../../config/redux/action/homeAction'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios'

const Home = () => {
    // const [dataBlog, setDataBlog] = useState([]);
    const [counter, setCounter] = useState(1);
    const {dataBlog, page} =useSelector(state => state.homeReducer)
    const dispatch = useDispatch();

    console.log('state global: ', dataBlog);
    console.log('page: ', page);

    // get data with axios
    useEffect(() => {
        dispatch(setDataBlog(counter))
    }, [counter, dispatch])
    
    const history = useHistory();

    const previous = () => {
        setCounter(counter <=1 ? 1 : counter - 1)
        console.log(counter)
    }
    const next = () =>{
        // if counter = totalpage maka return totalpage else counter + 1
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
        console.log(counter)
    }
    const confirmDelete = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Apakah anda yakin akan menghapus post ini?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
                    .then(res => {
                        console.log('success :', res.data)
                        dispatch(setDataBlog(counter))
                    })
                    .catch(err => {
                        console.log('err :', err)
                    })
                }
              },
              {
                label: 'No',
                onClick: () => console.log('use disagree')
              }
            ]
          });
    }

    return (
        <div  className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Create blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog =>{
                    return (
                        <Blogitem 
                            key={blog._id} 
                            image={`http://localhost:4000/${blog.image}`} 
                            title={blog.title} 
                            name={blog.author.name} 
                            date={blog.updatedAt} 
                            body={blog.body} 
                            _id= {blog._id}
                            onDelete={confirmDelete}
                        />
                    )
                })}
                
                
                {/* <Blogitem/>
                <Blogitem/>
                <Blogitem/> */}
            </div>
            <div className="pagination">
                <Button title="Previous" onClick={previous}/>
                <Gap width={20}/>
                <p className="text-page">{page.currentPage} / {page.totalPage}</p>
                <Gap width={20}/>
                <Button title="Next" onClick={next}/>
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default Home
