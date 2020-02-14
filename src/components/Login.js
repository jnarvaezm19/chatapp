import React, {useState, useRef} from 'react'
import './Login.css'

const Login = (props) => {

    const usuario = useRef() 
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(usuario.current.value)
    }
    return(
        <div className="principal">
            <div className="contenedor">
                <div className="box">
                    <div className="contenido">
                        <h2>Login</h2>
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
                                    LogIn
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <svg>
                <filter id='wavy'>
                    <feTurbulence 
                        x='0'
                        y='0'
                        baseFrequency='0.02'
                        numOctaves='5'
                        seed='2'
                    >
                        <animate
                            attributeName='baseFrequency'
                            dur='60s'
                            values='0.02;0.05;0.02'
                            repeatCount='indefinite'
                        />
                    </feTurbulence>
                    <feDisplacementMap
                        in='SourceGraphic'
                        scale='30'/>
                </filter>
            </svg>
        </div>
    )
}

export default Login