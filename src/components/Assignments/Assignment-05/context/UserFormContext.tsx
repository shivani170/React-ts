// create context

import { ChangeEvent, createContext, FormEvent, useContext, useState } from "react";

export interface userFormType {
    userName: string
    email: string
    mobile: number
    address: string
    dob: string
    password: string
    confirmPwd: string
}

export interface userContextType {
  userData:  userFormType  ,
  inputOnChange?:(event:  ChangeEvent<HTMLInputElement>)=> void
  finalData?: userFormType,
  userFormSubmit?: (event: FormEvent) => void
  setUserData?: (React.Dispatch<React.SetStateAction<userFormType>>)
  index?: number
}

const UserFormContext = createContext<userContextType>({
  userData: {
  userName: '',
  email: '',
  mobile: 0,
  address: '',
  dob: '',
  password: '',
  confirmPwd: '',
},
})

//create provider
type Props = {
  children: JSX.Element;
};


const UserFormProvider = (props: Props) => {
  const [userData, setUserData]= useState<userFormType>({
    userName: '',
    email: '',
    mobile: 0,
    address: '',
    dob: '',
    password: '',
    confirmPwd: '',
  })
  const [finalData, setFinalData]= useState<userFormType>({
    userName: '',
    email: '',
    mobile: 0,
    address: '',
    dob: '',
    password: '',
    confirmPwd: '',
  })

  let inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  let userFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    setFinalData(userData)
    setUserData({
      userName: '',
    email: '',
    mobile: 0,
    address: '',
    dob: '',
    password: '',
    confirmPwd: '',
    })

  };

  const userValue = {
    userData,
    inputOnChange,
    finalData,
    userFormSubmit,
    setUserData,
  }

  return <UserFormContext.Provider value={userValue}>
        {props.children}
    </UserFormContext.Provider>

}

export default UserFormProvider

//consume

export const useUserFormContext = () => {
  return useContext(UserFormContext);
};