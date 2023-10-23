
import Counter from "./Counter"
import Hello from "./Hello";
import Check from "./Check"
  function App(){
    const masivs = [
      "skaititajs",
      "vistinasedajs",
      "arbuzedajs",
      "kokvilnas nemejs"
    ]
    const masivsJSX = masivs.map(entry =>{
      return <Counter name={entry} key={entry}/>
    })
  
  return (
    <>
    <h1>melno darbinieku skaititajs</h1>
    {masivsJSX}
    </>
  )
}
export default App;