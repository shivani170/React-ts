import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClass from './components/CounterClass';
import Calculator from './components/Assignments/Assignment-03/Calculator';
import { User } from './components/Assignments/Assignment-02/User';
import { useCounterContext } from './components/context/CounterContext';
import Counter from './components/Counter';
import CounterFC from './components/CounterFC';
import UserRegistration from './components/project/UserRegistration';
import DisplayForm from './components/Assignments/Assignment-05/DisplayForm';
import FirstCheck from './components/Assignments/Assignment-05/FirstCheck';
import SecondCheck from './components/Assignments/Assignment-05/SecondCheck';
import { useUserFormContext } from './components/Assignments/Assignment-05/context/UserFormContext';
import EditProduct from './components/Assignments/Assignment-06/EditProduct';
import NavBar from './components/Assignments/Assignment-06/NavBar';
import PageNotFound from './components/Assignments/Assignment-06/PageNotFound';
import ProductList from './components/Assignments/Assignment-06/ProductList';
import AddProduct from './components/product/AddProduct';
import { Navigate, Route, Routes } from 'react-router';
import UseMemo from './components/useMemo/UseMemo';
import RefHooks from './components/useRef/RefHooks';
import ReducerHook from './components/useReducer/ReducerHook';
import InlineCSS from './components/Assignments/Assignment-04/08InlineCSS';
import WelcomeCSS from './components/Assignments/Assignment-04/07WelcomeCSS';
import OrderPlaced from './components/Assignments/Assignment-01/OrderPlaced';


function App()  {
//  let [count,setCount] = useState(0)
//   let [squareCount,setSquareCount] = useState(2)
  // const onClickIncrement = () => {
  //   setCount(++count)
  //   setSquareCount(Math.pow(squareCount,2))
  // }

  // let { counters } = useCounterContext();

  const [stepLabel, setStepLabel] = useState<number>(1)
  const {finalData} = useUserFormContext()

  const showStep = (step: number) => {
    switch(step){
        case 1:
          return <FirstCheck step={1} setStepLabel={setStepLabel}/>
        case 2:
        return <SecondCheck step={2} setStepLabel={setStepLabel}/>
    }
  }

  return (
    <div className="App">
{/* <ReducerHook/> */}
{/* <RefHooks/> */}
      {/* <UseMemo/> */}

{/* <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/project" />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes> */}

      {/* User registration form via context api*/}
      {/* <DisplayForm /> */}

     {/* { showStep(stepLabel)}
     {finalData && <DisplayForm/>} */}

      {/* <ThirdCheck step={3} setStepLabel={setStepLabel}/> */}

      {/* User registration form */}
      {/* <UserRegistration /> */}


      {/* Use context counter */}

      {/* {counters.map((counter: number, index: number) => {
        return <Counter key={index} count={counter} index={index} />;
      })} */}



     {/* <CounterClass
     start={2}
     onClickIncrement={onClickIncrement}
     count={count}
     squareCount={squareCount}
     /> */}

     {/* <CounterFC /> */}



     {/* <Calculator/> */}

     {/* <WelcomeCSS/> */}
     {/* <IterationArray />*/}
      {/* <FruitClass /> */}
      {/* <CarsClass /> */}
      {/* <Person/> */}
      {/* <Pets /> */}
      {/* <InlineCSS/> */}
      <OrderPlaced/>

      {/* <Counter start= {1}/> */}

    </div>
  );
}

export default App;

