import React, { useState } from 'react';

import { CREATE_EVENT, DELETE_ALL_EVENT } from '../actions';

const EventForm = ({ state, dispatch }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addEvent = e => {
        e.preventDefault();
        dispatch({
            type: CREATE_EVENT,
            title,
            body
        })
        setTitle('');
        setBody('');
    }

    const deleteAllEvents = (e) => {
        e.preventDefault()
        const result = window.confirm('すべてのイベントを本当に削除しても良いですか？');
        if (result) dispatch({ type: DELETE_ALL_EVENT })
    }

    const unCreatable = title === '' || body === '';
    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div classNameÏ="form-group">
                    <label htmlFor="formEventBody">内容</label>
                    <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
                </div>

                <div className='row pt-3'>
                    <div className='col-4'>
                        <button type="button" className='btn btn-primary' onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>

                    </div>
                    <div className='col-8'>
                        <button type="button" className='btn btn-danger' onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default EventForm;