import { useState } from "react";

function Hello(props){
const [name, setName] = useState(props.default);
function changeName(event){
    setName(event.target.value);
}

return (
    <div key={props.index}>
        <input value={name} onChange={changeName}></input>
        <p>vai sis cilveks ir sekmigs programmesana(, {name})</p>
    </div>
);
}

export default Hello;