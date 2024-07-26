import Navbar from './components/navbar'
import Prescriptions from './components/prescriptions';
import { useEffect, useState } from 'react';

function App() {
  const [past, setPast] = useState(null)
  const [future, setFuture] = useState(null)
  const [current, setCurrent] = useState(null)

  useEffect(() => {
   async function effect(){
    getDash()
    return () => {}
   }
   effect()
  }, [])

  async function getDash(){
    try{
      await fetch('http://localhost:8000' + '/dashboard', {
      method: "POST",
      body: JSON.stringify({
        user_id: 1,
        date: "2024-07-26"
      }),
      headers: {
                    "Content-type": "application/json"
                }
    }).then((res) => res.json())
    .then((json) => {
      setPast(json.past)
      setFuture(json.future)
      setCurrent(json.current)
    })
    } catch (e) {
      console.log(e)
    }
  }

  async function sendMessage() {

  }

  if(current) {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Prescriptions name={'Past Prescriptions'} items={past}></Prescriptions>
      <Prescriptions name={'Current Prescriptions'} items={current}></Prescriptions>
      <Prescriptions name={'Future Prescriptions'} items={future}></Prescriptions>
    </div>
  );
} 
else{
  return (
    <div></div>
  )
}
}

export default App;
