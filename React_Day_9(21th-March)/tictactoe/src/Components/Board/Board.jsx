import React, { useState } from 'react'
import Squre from '../Squre/Squre'
import styles from "./Board.module.css"

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true)

    const handelClick = (index) => {
        if(state[index] !== null){
            return ;
        }
        state[index] = isXTurn ? "X" : "O";
        setState([...state, state[index]]);
        setIsXTurn(!isXTurn);
    }

    const CheckWinner = () => {
        const posibility = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < posibility.length; i++) {
            let [a, b, c] = posibility[i];
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false
    }

    const winner = CheckWinner()

    return (
        <div className={styles.Board}>
            {winner ? <div className={styles.winnerMessage}>
                <h1>{winner} Won The Game</h1>
                <button onClick={()=>setState(Array(9).fill(null))}>Play Again</button>
            </div> : <div className={styles.contain}>
                <h1>Player {isXTurn ? "X" : "O"} Now Your Turn</h1>
                <div className={styles.BoardContainer}>
                    <Squre handelClick={() => handelClick(0)} value={state[0]} borderRight="borderRight" borderBottom="borderBottom" />
                    <Squre handelClick={() => handelClick(1)} value={state[1]} borderRight="borderRight" borderBottom="borderBottom" />
                    <Squre handelClick={() => handelClick(2)} value={state[2]} borderBottom="borderBottom" />
                </div>
                <div className={styles.BoardContainer}>
                    <Squre handelClick={() => handelClick(3)} value={state[3]} borderRight="borderRight" borderBottom="borderBottom" />
                    <Squre handelClick={() => handelClick(4)} value={state[4]} borderRight="borderRight" borderBottom="borderBottom" />
                    <Squre handelClick={() => handelClick(5)} value={state[5]} borderBottom="borderBottom" />
                </div>
                <div className={styles.BoardContainer}>
                    <Squre handelClick={() => handelClick(6)} value={state[6]} borderRight="borderRight" />
                    <Squre handelClick={() => handelClick(7)} value={state[7]} borderRight="borderRight" />
                    <Squre handelClick={() => handelClick(8)} value={state[8]} />
                </div>

                <button onClick={()=>setState(Array(9).fill(null))}>Play Again</button>
            </div>}
        </div>
    )
}

export default Board