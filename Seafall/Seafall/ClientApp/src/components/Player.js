import { useEffect, useState } from 'react';
import './Player.css'

export default function Player(props) {
    return (
        <div>
            {props.player.name}
        </div>
    )
}