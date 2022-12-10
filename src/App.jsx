import { useState } from 'react';
// import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='container'>
        <div className='grid gap-xs py-4'>
          <div className='col-md-4 bg-blue-500 shadow-sm my-4 p-4'>test 6</div>
          <div className='col-md-4 bg-blue-500 shadow-md my-4 p-4'>test 6</div>
          <div className='col-md-4 bg-blue-500 shadow-lg my-4 p-4'>test 6</div>
          <div className='col-md-3 bg-blue-500 shadow-xl my-4 p-4'>test 6</div>
          <div className='col-md-3 bg-blue-500 shadow-2xl my-4 p-4'>test 6</div>
          <div className='col-md-3 bg-blue-500 shadow-inner my-4 p-4'>test 6</div>
          <div className='col-md-3 bg-blue-500 shadow-none my-4 p-4'>test 6</div>

          {/* <div className='col-md-4 bg-blue-500 shadow-md'>test 6</div>
          <div className='col-md-4 bg-blue-500 shadow-lg'>test 6</div>
          <div className='col-md-8 bg-blue-500'>test 6</div>
          <div className='col-md-4 bg-blue-500'>test 6</div>
          <div className='col-md-12 bg-blue-500 shadow-2xl'>test 6</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
