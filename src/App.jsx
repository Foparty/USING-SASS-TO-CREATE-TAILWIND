import { useState } from 'react';
// import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='container'>
        <div className='grid gap-xs w-full justify-center align-center'>
          <div className='test bg-blue-500'>test 6</div>
          <div className='test bg-blue-500'>test 6</div>
          <div className='test bg-blue-500'>test 6</div>
        </div>
      </div>
    </div>
  );
}

export default App;
