import React from 'react'

const Messages = (props) => {
    //destructuring a las props
    const {userMessage, userActual, message, date} = props

    //definimos el estilo de cada mensaje
    let styleClass = '-message'
    
    //verificamos la forma en que se mostrara el mensaje en pantalla
    if(userActual === userMessage)
        styleClass = `${styleClass}-send`
        
    return(
        <div>
            <div className={`dv${styleClass}`}>
                    <label className={`lbl${styleClass}`}>
                        {userMessage}
                    </label>
                    <div className={`img${styleClass}`}></div>
                    <p className={`text${styleClass}`}>
                        {message}
                    </p>
                    <p className={`lbl-date${styleClass}`}>
                        {date}
                    </p>
                </div>
                <hr/>
        </div>
    )
}

export default Messages