import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import './play.css'
export default function play() {
    return (
        <div className="play_control">
            <IconButton>
               <PlayArrowIcon id="play_icon" fontSize="large" color="secondary"/>
            </IconButton>
        </div>
    )
}
