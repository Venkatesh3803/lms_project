import React from 'react'

const Video = ({url}) => {
    return (
        <div>
            <iframe
                width="660"
                height="360"
                src={`https://www.youtube.com/embed/${url.split("/")[3]}`}
                title="YouTube Video"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Video