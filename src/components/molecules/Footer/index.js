import React from 'react'
import { facebook, logoBlog, twitter, whatsapp, youtube } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img src={img} alt="icon-medsos" className="icon-medsos"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img src={logoBlog} alt="logo" className="logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={youtube} />
                    <Icon img={whatsapp} />
                    <Icon img={twitter} />
                    <Icon img={facebook} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
