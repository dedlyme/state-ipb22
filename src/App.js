
import Counter from "./Counter"
import Hello from "./Hello";
import Check from "./Check"
function App(){
  const names = ["Jekabins","kistapins","emilins"];
  const checks = [true, true, false];
  const namesJSX = names.map((name, index) => {
    return <Hello key={index} default={name} />

  })
  const checksJSX = checks.map((chec, indeks) => {
    return <Check key={indeks} default={chec} />
  })
  return (
    <>
    <Counter />
    {namesJSX}
    {checksJSX}
    </>
  )
}
export default App;