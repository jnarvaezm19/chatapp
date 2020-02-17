import React, {useState, useRef} from 'react'
import './Login.css'
import BordeSvg from './BordeSvg'

const Login = (props) => {

    const usuario = useRef() 
    const handleSubmit = (e) => {
        e.preventDefault()
        const usr = usuario.current.value
        if(usr.trim() !== '')
            props.handleSubmit(usr)
    }
    
    return(
        <div className="principal">
            <BordeSvg/>
            <div className="contenedor">
                <div className="box">
                    <div className="contenido">
                        <h5>Login</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="dv-login">
                                <p>Nickname</p>
                                <input 
                                    className='txtLogin'
                                    type='text'
                                    placeholder='Type Your Nickname'
                                    ref={usuario}
                                />
                            </div>
                            <div className="dv-login">
                                <button
                                    type='submit'
                                    className="btn-login"
                                >
                                    Join
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login