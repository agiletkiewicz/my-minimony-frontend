import React from 'react';
import Board from './Board'


function Boards(props) {

    return (
        <>
            {props.boards.map( board => (
                <Board key={board.id} board={board.attributes} />
            ))}
        </>
    )

} 

export default Boards;