
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
   const allRatios = [7,43,101];
   const counterJSX = allRatios.map ((ratio,index) => (
     <Counter key={index}/>
   ));
  
  return (
    <>
    <h1>melno darbinieku skaititajs</h1>
    {masivsJSX}
    </>
  )
}
export default App;