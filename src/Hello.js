import { useState } from "react";

function Hello(){
const [name, setName] = useState(props.default);
function changeName(event){
    setName(event.target.value);
}

return (
    <div key={props.default}>
        <input value={name} onChange={changeName}></input>
        <p>hello, {name}</p>
    </div>
);
}

export default Hello;