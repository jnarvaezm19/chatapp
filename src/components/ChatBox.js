import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
//import EmojiPicker from 'emoji-picker-react';
import Messages from './Messages'
import './chatStyle.css'
import io from "socket.io-client";

const styleFocus = {
    border: 'solid 1px #127ff7'
}

const styleBlur = {
    border: 'solid 1px #CCC'
}

//declaracion de variable que consume el socket
const socket = io("http://localhost:1337/");

const ChatBox = (props) => {
    //declaracion de props
    const {userActual} = props
    //declaracion de useState
    const [message, setMessage] = useState([])
    const [onFocus, setOnFocus] = useState(false)
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState(0)
    const [date, setDate] = useState('')
    //declaracion de refs
    const txtMessage = useRef()
    const chatFocused = useRef()
    const box = useRef()
    
    useEffect(() => {
        //cargamos los usuarios online
        socket.on("usersonline", onlineUsers => {
            console.log('user',onlineUsers)    
        })

        //cargamos los mensajes que se envien
        socket.on("sendsmessages", mes => {
            setMessages(messages => [...messages,{
                text: mes.text, 
                userM: mes.userM,
                date: mes.date
            }])
        })
    },[])

    //evento que envia los mensajes
    const handleSubmit = (e) => {
        e.preventDefault()
        if(message.text.trim() !== ''){
            socket.emit("message", message)
            setMessage({text: ''})
        }
    }
    
    //evento para cambio de estado del mensaje
    const handleChange = (e) => {
        e.preventDefault()
        let message = e.target.value
        getDateMessage()
        setMessage({
            text: message, 
            userM: userActual,
            date: date
        })
    }

    //evento focus / blur
    const handleFocus = () =>{
        setOnFocus(true)
    }

    //funcion para obtener la fecha actual formateada
    const getDateMessage = () => {
        let date2 = new Date()
        let hour = date2.getDay()
        let min = date2.getMinutes()
        let seg = date2.getSeconds()
        let day = date2.getDay()
        let month = date2.getMonth() + 1
        let year = date2.getFullYear()
        let fecha = `${hour}:${min}:${seg} ${day}-${month}-${year}`
        setDate(fecha)
    }
    
    return(
        <div className="chatBox" ref={box}>
            <div className="dv-user">
                <h4> {userActual} </h4>
            </div>
            <div className="chat"
                onClick={handleFocus}
                style={onFocus ? styleFocus : styleBlur}
                ref={chatFocused}
            >
            {messages.map((msg,index) => (
                <div key={index}>
                    <Messages
                        userMessage={msg.userM}
                        userActual={userActual}
                        message={msg.text}
                        date={msg.date}
                    />
                </div>
            ))
            }
            </div>
            <div className="chatInput">
                <form
                    onSubmit={handleSubmit}
                >
                    <input
                        type='text'
                        name='message'
                        value={message.text}
                        onChange={handleChange}
                        ref={txtMessage}
                        placeholder='Type your message'
                    />
                    <button type='submit'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ChatBox