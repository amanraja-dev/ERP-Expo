import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const CollegeTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'700'}}>SAGAR INSTITUTE OF SCIENCE & TECHNOLOGY (SISTEC)</Text>
      <Text>2022-2023</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    paddingVertical:10,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,

    elevation: 5,
    shadowColor: 'black',
  }
})
export default CollegeTitle