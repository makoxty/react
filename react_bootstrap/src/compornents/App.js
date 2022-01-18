import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" />
        </div>

        <div classNameÏ="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea className="form-control" id="formEventBody" />
        </div>

        <div className='row pt-3'>
            <div className='col-4'>
              <button type="button" className='btn btn-primary'>イベントを作成する</button>
            </div>
            <div className='col-8'>
              <button type="button" className='btn btn-danger'>全てのイベントを削除する</button>
            </div>
            </div>
      </form>

      <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>内容</th>
            <th></th>
          </tr>
          <tbody>
          </tbody>
        </thead>
      </table>
    </div>
  );
}

export default App;
