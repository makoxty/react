import React, { useState } from "react";

const FormHook = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <div style={{ paddingTop: 20 }}>
        <div>
          <p>First Name: - {name.firstName}</p>
          <p>Last Name: - {name.lastName}</p>
        </div>
        <form>
          {/* コメントアウトしたやり方だと、onChangeで片方setNameで上書きすると、もう片方が空白で上書きされる
        上書きされないためには、スプレッド構文で展開する必要がある */}
          {/* <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ firstName: e.target.value })}
          />
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ lastName: e.target.value })}
          /> */}
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
        </form>
        <div>
          <p>{JSON.stringify(name)}</p>
        </div>
      </div>
    </>
  );
};

export default FormHook;
