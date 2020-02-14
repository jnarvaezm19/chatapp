import React, {useState, useEffect, useRef} from 'react'
//import EmojiPicker from 'emoji-picker-react';
import Messages from './Messages'
import './chatStyle.css'

const styleFocus = {
    border: 'solid 1px #127ff7'
}
const styleBlur = {
    border: 'solid 1px #CCC'
}
const ChatBox = (props) => {

    const {userActual} = props
    const [message, setMessage] = useState([])
    const [onFocus, setOnFocus] = useState(false)
    const [messages, setMessages] = useState([])
    //const [users, setUsers] = useState([])
    const txtMessage = useRef()
    const chatFocused = useRef()
    const [date, setDate] = useState('')
    const box = useRef()

    useEffect(() => {
        document.addEventListener('focus', handleFocus)

        return () =>{
            document.removeEventListener('focus',handleFocus)
        }
    },[])
    
    /*const myCallback = (code) =>{
        console.log(code)
        //const emoji = String.fromCodePoint(`0x${code}`)
        //setMessage(message => [...message, emoji])
        //txtMessage.value += ` ${emoji}`
        //console.log(emoji)
    }*/

    const handleSubmit = (e) => {
        e.preventDefault()
        if(message.text !== ''){
            setDate(new Date().toDateString())
            setMessages(messages => [...messages, message])
            setMessage({text: ''})
        }
    }
    const handleChange = (e) => {
        e.preventDefault()
        let message = e.target.value
        setMessage({text: message, send: true})
    }
    const handleFocus = () =>{
        setOnFocus(true)
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
            {messages.map((message,index) =>
                <div key={index}>
                    <Messages
                        send={message.send}
                        userActual={userActual}
                        message={message.text}
                        date={date}
                    />
                </div>
            )
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