//create a context

import { createContext, useContext, useState } from "react";

type contextType = {
  counters: number[]
  onClickIncrement?:(index:number) => void
}

let CounterContext = createContext<contextType>({
  counters: []
})

//create a provider => component

type Props = {
  children?: JSX.Element
}
export const CounterContextProvider = (props: Props) => {
  let {children} = props
  let [counters, setCounters] = useState<number[]>([1,2,3]);

  const onClickIncrement = (index: number) => {
    counters[index] += 1;
    setCounters([...counters]);
  }

  let values: contextType = {
    counters,
    onClickIncrement
  }

return <CounterContext.Provider value={values}>{children}</CounterContext.Provider>

}

//create useContext=> consume

// create context Hook
export const useCounterContext = () => {
  return useContext(CounterContext);
};

