import React from "react";
import { useDispatch } from "react-redux";
import { buttonSlice } from "../redux/store";
import { useSelector } from "react-redux";

function Button() {
    const data = useSelector((state) => state.buttons);
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    const dispatch = useDispatch();
    const handleClick = (value) => {
        const obj = {
            char: value,
            count: 0,
        };
        dispatch(buttonSlice.actions.addButtoncount(obj));
    };

    return (
        <div>
            <div className="btn">
                {buttons.map((value, index) => {
                    return (
                        <button key={index} onClick={() => handleClick(value)}>
                            {`Button ${value}`}
                        </button>
                    );
                })}
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Buttons</th>
                        <th>Click Counts</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((char) => {
                        return (
                            <tr>
                                <td>{`Button ${char.char} clicked`}</td>
                                <td>{char.count}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Button;