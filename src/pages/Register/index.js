import React from 'react'
import { useHistory } from 'react-router-dom'
import { regisBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss'

const Register = () => {
    const history = useHistory()
    return (
        <div className="main-page">
            <div className="left">
                <img src={regisBg} className="bg-image" alt=""/>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name"/>
                <Gap height={10} />
                <Input label="Email" placeholder="Email"/>
                <Gap height={10} />
                <Input label="Password " placeholder="Password"/>
                <Gap height={30} />
                <Button title="Register" onClick={() => history.push('/login') } />
                <Link title="Back to login" onClick={() => history.push('/login') }/>
            </div>
        </div>
    )
}

export default Register
