import React, { useContext } from "react";

import AppContext from "../contexts/AppContext";
import Event from './Event';

const Events = () => {
    const { state } = useContext(AppContext);
    return (
        <>
            <div>
                <h4>イベント一覧</h4>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>タイトル</th>
                            <th>内容</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.events.map((event, index) => <Event key={index} event={event} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Events;