import { NativeBaseProvider } from 'native-base'
import FlatListComp from '../components/FlatListComp'
import getUser from "../app/config/redux/actions/userAction";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const list = () => {
  const {user} = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getUser())
    },[])

    const getData =()=>{
      dispatch(getUser())
    }
  return (
    <NativeBaseProvider>
        <FlatListComp data={user} getData={getData}/>
    </NativeBaseProvider>
  )
}

export default list