import React from 'react'
import EmojiPicker from 'emoji-picker-react';

const Emoji = (props) => {
    const {getEmoji} = props
    const onEmojiClick = (e, emojiObject) => {
        e.preventDefault()
        props.getEmoji(emojiObject)
    }
    return(
        <EmojiPicker onEmojiClick={onEmojiClick}/>
    )
}
export default Emoji