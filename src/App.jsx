import { useState } from 'react';
// import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='container'>
        <div className='grid py-4'>
          <div className='col-md-9 bg-red-500  my-4 p-4 rounded-l-xl'>test 6</div>
          <div className='col-md-3 bg-blue-500  my-4 p-4 rounded-r-xl'>test 6</div>
          <div className='col-md-4 bg-blue-500 shadow-lg my-4 p-4 rounded-bl-xl'>test 6</div>
          <div className='col-md-3 bg-blue-500 shadow-xl my-4 p-4'>test 6</div>
          <div className='col-md-3 bg-blue-500 shadow-2xl my-4 p-4'>test 6</div>
          <div className='col-md-3 bg-blue-500 shadow-inner my-4 p-4 rounded-b-3xl'>test 6</div>
          <div className='col-md-3 bg-blue-500 shadow-none my-4 p-4'>test 6</div>

          {/* <div className='col-md-4 bg-blue-500 shadow-md'>test 6</div>
          <div className='col-md-4 bg-blue-500 shadow-lg'>test 6</div>
          <div className='col-md-8 bg-blue-500'>test 6</div>
          <div className='col-md-4 bg-blue-500'>test 6</div>
          <div className='col-md-12 bg-blue-500 shadow-2xl'>test 6</div> */}
        </div>

        <div className='test-outline'>
          <h2 className='my-1 py-2 border-xl'>item 1</h2>
          <h2 className='my-1 py-2 border-xl'>item 2</h2>
          <h2 className='my-1 py-2 border-xl'>item 3</h2>
          <h2 className='my-1 py-2 border-xl'>item 4</h2>
          <h2 className='my-1 py-2 border-xl'>item 5</h2>
          <h2 className='my-1 py-2 border-xl-yellow-500'>item 6</h2>
          <h2 className='my-1 py-2 border-xl'>item 7</h2>
          <h2 className='my-1 py-2 border-xl'>item 8</h2>
          <h2 className='my-1 py-2 border-xl'>item 9</h2>
          <h2 className='my-1 py-2 border-xl'>item 10</h2>
        </div>
        <div className='test-outline'>
          <h2 className='my-1 py-2 outline-xl'>item 1</h2>
          <h2 className='my-1 py-2 outline-xl-green-300 rounded-base'>item 2</h2>
          <h2 className='my-1 py-2 outline-xl'>item 3</h2>
          <h2 className='my-1 py-2 outline-xl'>item 4</h2>
          <h2 className='my-1 py-2 outline-xl'>item 5</h2>
          <h2 className='my-1 py-2 outline-xl'>item 6</h2>
          <h2 className='my-1 py-2 outline-xl'>item 7</h2>
          <h2 className='my-1 py-2 outline-xl'>item 8</h2>
          <h2 className='my-1 py-2 outline-xl'>item 9</h2>
          <h2 className='my-1 py-2 outline-xl'>item 10</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
