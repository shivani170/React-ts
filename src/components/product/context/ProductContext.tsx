import {ChangeEvent, createContext, useContext, useState} from 'react'

type ProductContextProps ={
  children: JSX.Element
}

type rating = {
  rate:number
  count:number
}
type product = {
  id: number;
  title: string;
  price: number;
  description: string
  image: string
  rating: rating
}

type pContext ={
  productList: product[]
  changeInput?(): void
}

const ProductContextProps = createContext<pContext>({
  productList: []
})


export const  ProductContextProviders = ({children}: ProductContextProps) =>{
  let initProduct:product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    image: '',
    rating: {
rate: 0,
count:0
    }
  }

  let [newProduct, saveNewProduct] = useState<product>({...initProduct})
  let [productList, setProductList]= useState<product[]>([])

  let changeInput = (event: ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.value)

  }

  let value: pContext = {
    productList,
    // changeInput
  }
  return <ProductContextProps.Provider value={value}>{children}</ProductContextProps.Provider>
}


// create context Hook
export const useProductContext = () => {
  return useContext(ProductContextProps);
};
