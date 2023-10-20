
import Counter from "./Counter"
import Hello from "./Hello";
function App(){
  const allNames = ["Jekabins","kistapins","emilins"];
  const namesJSX = names.map((name, index) => {
    return <Hello key={index} default={name} />
  })
  return (
    <>
    <Counter />
    {namesJSX}
    </>
  )
}
export default App;