import React from 'react'

const Messages = (props) => {
    const {send, userActual, message, date} = props
    let styleClass = '-message'
    
    if(send)
        styleClass = `${styleClass}-send`

    return(
        <div>
            <div className={`dv${styleClass}`}>
                    <label className={`lbl${styleClass}`}>
                        {userActual} (yo)
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