import React,{useState,useEffect,useLayoutEffect} from 'react'
import './Background.css'
import Img1 from '../images/img1.jpg'
import Img2 from '../images/img2.jpg'

const urlIframeActual = "https://www.youtube-nocookie.com/embed/"
const footerIframeActual = "?controls=0"
const Background = () => {
    const [videos, setVideos] = useState({url:'imwmmv9r1oE'})
    const [iframeActual, setIframeActual] = useState('')
    const [btnKey, setBtnKey] = useState(false)
    useEffect(() => {
        setIframeActual(`${urlIframeActual}${videos.url}${footerIframeActual}`)
    },[])
    const handleBtnKey = () => {
        setBtnKey(!btnKey)
    }
    return(
        <div className="dv-iframes">
            <iframe id="slider"
                src={iframeActual}
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />
            <button
                className="btn-key"
                onClick={handleBtnKey}
            >
                +
            </button>
            {btnKey &&
                <div className="modal-iframe">
                    <p>Change Background Video</p>
                        <input 
                            type="text"
                        />
                        <button className="">
                            Change
                        </button>
                </div>
            }
        </div>
    )
}

export default Background