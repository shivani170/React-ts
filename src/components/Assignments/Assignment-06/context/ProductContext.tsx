import { ChangeEvent, FormEvent, createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { getProductFromStorage, product, updateProductToStorage } from "../service/localStorage";

let initProduct: product = {
  id: 0,
  title: "",
  price: "",
  description: "",
  category: "",
  image: "/images/image_placeholder.png",
  rating: {
    rate: 0,
    count: 0,
  },
};

type ProductContextProps = {
  children: JSX.Element;
};

type pContext = {
  productList: product[];
  newProduct: product;
  changeInput?(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void;
  saveProduct?(event: FormEvent): void;
  updateProduct?(event: FormEvent): void;
  removeProduct(index: number): void;
  cloneProduct(index: number): void;
  setEditData?(id: number): void;
};

const ProductContext = createContext<pContext>({
  productList: [],
  newProduct: { ...initProduct },
  removeProduct: () => {},
  cloneProduct: () => {},
});

export const ProductContextProvider = ({ children }: ProductContextProps) => {
  let navigate = useNavigate();
  let [newProduct, saveNewProduct] = useState<product>({ ...initProduct });
  let [productList, setProductList] = useState<product[]>(
    getProductFromStorage()
  );

  useEffect(() => {
    updateProductToStorage(productList);
  }, [productList]);

  let changeInput = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    let { name, value } = event.target;
    saveNewProduct({ ...newProduct, [name]: value });
  };
  let saveProduct = (event: FormEvent) => {
    event.preventDefault();
    newProduct.id = Date.now();
    setProductList([...productList, { ...newProduct }]);
    saveNewProduct({ ...initProduct });
    alert("Product Added Successfully");
  };

  let removeProduct = (index: number) => {
    let wantToDel = window.confirm("Are your sure to remove ?");
    if (wantToDel) {
      let _productList = [...productList];
      _productList.splice(index, 1);
      setProductList([..._productList]);
    }
  };
  let cloneProduct = (index: number) => {
    let wantToDel = window.confirm("Are your sure create a clone ?");
    if (wantToDel) {
      let _product: product = { ...productList[index] };
      _product.id = Date.now();
      _product.title += "_clone";
      productList.splice(index + 1, 0, _product);
      setProductList([...productList]);
    }
  };

  let updateProduct = (event: FormEvent) => {
    event.preventDefault();
    newProduct.id = Date.now();
    let _productList = [...productList];
    saveNewProduct(newProduct)
    setProductList([..._productList]);
    alert("Product Added Successfully");
    navigate("/");
  };

  let setEditData = (id: number): void => {
    let result = productList.find((product) => id === product.id);
    if (result === undefined) {
        navigate("/");
      window.location.replace("/");

    } else {
      saveNewProduct({ ...result });
    }
  };
  let values: pContext = {
    productList,
    changeInput,
    saveProduct,
    newProduct,
    removeProduct,
    cloneProduct,
    updateProduct,
    setEditData,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
