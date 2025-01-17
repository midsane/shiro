import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AvatarCustomizer />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>shiro</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}



const AvatarCustomizer = () => {
  const [bodyColor, setBodyColor] = useState('blue');
  const [hatColor, setHatColor] = useState('red');
  const [visorColor, setVisorColor] = useState('white');

  return (
    <div>
      <Avatar bodyColor={bodyColor} hatColor={hatColor} visorColor={visorColor} />

      <div>
        <label>Body Color:</label>
        <input type="color" onChange={e => setBodyColor(e.target.value)} value={bodyColor} />
      </div>

      <div>
        <label>Hat Color:</label>
        <input type="color" onChange={e => setHatColor(e.target.value)} value={hatColor} />
      </div>

      <div>
        <label>Visor Color:</label>
        <input type="color" onChange={e => setVisorColor(e.target.value)} value={visorColor} />
      </div>
    </div>
  );
};


const Body = ({ color = 'blue' }) => (
  <svg width="100" height="150" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="75" rx="40" ry="60" fill={color} />
  </svg>
);

const Visor = ({ color = 'white' }) => (
  <svg width="40" height="20" x="30" y="40" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="20" rx="10" ry="10" fill={color} />
  </svg>
);

const Hat = ({ color = 'red' }) => (
  <svg width="50" height="30" x="25" y="0" viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="15" fill={color} />
    <ellipse cx="25" cy="15" rx="25" ry="10" fill={color} />
  </svg>
);

const Avatar = ({ bodyColor, hatColor, visorColor }) => (
  <div style={{ position: 'relative', width: '100px', height: '150px' }}>
    <Body color={bodyColor} />
    <Visor color={visorColor} />
    <Hat color={hatColor} />
  </div>
);


export default App
