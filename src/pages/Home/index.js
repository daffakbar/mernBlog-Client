import Axios from 'axios'
import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Blogitem, Button, Gap} from '../../components'
import './home.scss'

const Home = () => {
    // const [dataBlog, setDataBlog] = useState([]);
    const {dataBlog} =useSelector(state => state.homeReducer)
    const dispatch = useDispatch();

    console.log('state global: ', dataBlog);

    // get data with axios
    useEffect(() => {
        Axios.get('http://localhost:4000/v1/blog/posts')
        .then(result => {
            // console.log('data', result.data)
            const responAPI = result.data.data;

            dispatch({type: 'UPDATE_DATA_BLOG', payload:responAPI})
        })
        .catch(err => {
            console.log('Error :', err)
        })
    }, [dispatch])


    const history = useHistory()
    return (
        <div  className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Create blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog =>{
                    return <Blogitem 
                    key={blog._id} 
                    image={`http://localhost:4000/${blog.image}`} 
                    title={blog.title} 
                    name={blog.author.name} 
                    date={blog.updatedAt} 
                    body={blog.body} />
                })}
                
                
                {/* <Blogitem/>
                <Blogitem/>
                <Blogitem/> */}
            </div>
            <div className="pagination">
                <Button title="Previous"/>
                <Gap width={20}/>
                <Button title="Next"/>
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default Home
