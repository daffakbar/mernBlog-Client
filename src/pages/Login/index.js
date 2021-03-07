import React from 'react'
import { useHistory } from 'react-router-dom'
import { loginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = () => {
    const history = useHistory()
    return (
        <div className="main-page">
            <div className="left">
                <img src={loginBg} className="bg-image" alt=""/>
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email"/>
                <Gap height={10} />
                <Input label="Password " placeholder="Password"/>
                <Gap height={30} />
                <Button title="Login" onClick={() => history.push('/')} />
                <Link title="Belum punya akun? silahkan daftar" onClick={() => history.push('/register')}  />
            </div>
        </div>
    )
}

export default Login
