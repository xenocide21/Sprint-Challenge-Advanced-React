import React, { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Players from './Players'

const PlayersList = p => {
    const [data, setData] = useLocalStorage('data', {})
    useEffect(()=>{
        setData(p.data)
    }, [p.data])

    return (
        <div className='player-list'>
            {p.data ? p.data.map(player => <Players player={player}>{player.name}</Players>) : null}
        </div>
    )
}

export default PlayersList