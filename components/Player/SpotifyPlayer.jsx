// components/SpotifyPlayer.js

// const SpotifyPlayer = () => (
//     <div
//         dangerouslySetInnerHTML={{
//             __html: '',
//         }}
//     />
// )

// export default SpotifyPlayer
import React from "react"

function SpotifyEmbed() {
    return (
        <div>
            <iframe
                // style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/3Ds5rNkwD81PzP4732D1KE?utm_source=generator"
                width="100%"
                height="100"
                frameBorder="0"
                allowfullscreen=""
                allowtransparency="true"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default SpotifyEmbed
