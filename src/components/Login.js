import React, {useState, useRef} from 'react'
import './Login.css'
import BordeSvg from './BordeSvg'

const Login = (props) => {

    const usuario = useRef() 
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(usuario.current.value)
    }
    
    return(
        <div className="principal">
            <BordeSvg/>
            <div className="contenedor">
                <div className="box">
                    <div className="contenido">
                        <h2>LOGIN</h2>
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
                                    JOIN
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