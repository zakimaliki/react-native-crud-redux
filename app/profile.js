import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, useSearchParams } from 'expo-router'

const profile = () => {
const {name,age} = useSearchParams();
  return (
    <View style={styles.wrapper}>
      <Text>nama :{name}</Text>
      <Text>umur :{age}</Text>
      <Link href="/">Back to Home</Link>
   </View>
  )
}

// internal
const styles = StyleSheet.create({
    wrapper:{
        flex:1, 
        alignItems:'center',
        justifyContent:'center'
    }
})
export default profile

