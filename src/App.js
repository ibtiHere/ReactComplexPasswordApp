import './App.css';
import { useCallback, useEffect, useState } from 'react';
function App() {

  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false);
  const [char, setchar] = useState(false);
  const [pass, setpass] = useState("");


  const passgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "012345678"
    if (char) str += "!@#$%^&*()}{[]?"
    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setpass(pass);
  }, [length, num, char, setpass])


  useEffect(() => { passgenerator() },
    [length, char, passgenerator, num])





  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px4 my-8 text-orange-500 bg-gray-800 '>
        <h1 className='text-white text-center my-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text'
            value={pass}
            className='outline-none w-full py-1 px-3 '
            placeholder='Password'
            readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0' >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2' >
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={50}
              value={length} onChange={(e) => setlength(e.target.value)}
              className='cursor-pointer'></input>

            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={num}
              onChange={() => {
                setnum((prev) => !prev)
              }}
              name=""
              id="" />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={char}
              onChange={() => {
                setchar((prev) => !prev)
              }}
              name=""
              id="" />
            <label htmlFor="charInput">Character</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
