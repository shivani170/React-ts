import '../App.css';
import { useEffect} from 'react'
import { useCounterContext } from './context/CounterContext';

interface CounterProps {
  count: number
  index: number
}

function Counter(props: CounterProps) {
  let { count, index } = props;
  let { onClickIncrement } = useCounterContext();

    useEffect(() => {
      document.title = `My Page Title ${count}`;
    }, [count]);

  return (
    <div className="App">
      <header className="App-header">
          Hello Everyone <br/>
          Count : {count} <br/>
          <button style={{width: '200px', background:'blue', color: 'white', fontSize: '20px', cursor: 'pointer', margin: '32px', borderRadius:'4px', padding: '12px'}}
            onClick={() =>  onClickIncrement === undefined ? null : onClickIncrement(index)}>
             Increment
          </button>
      </header>
    </div>
  );
}

export default Counter;
