import { useState } from 'react';
// import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='container'>
        <div className='grid gap-xs'>
          <div className='col-md-4 bg-blue-500'>test 6</div>
          <div className='col-md-4 bg-blue-500'>test 6</div>
          <div className='col-md-4 bg-blue-500'>test 6</div>
          <div className='col-md-8 bg-blue-500'>test 6</div>
          <div className='col-md-4 bg-blue-500'>test 6</div>
          <div className='col-md-12 bg-blue-500'>test 6</div>
        </div>
      </div>
    </div>
  );
}

export default App;
