import React from 'react'

const Players = p => {
    return(
        <div>
                <h1>{p.player.name}</h1>
                <p>{p.player.id + 1}</p>
                <p>{p.player.country}</p>
        </div>
    )

}
export default Players