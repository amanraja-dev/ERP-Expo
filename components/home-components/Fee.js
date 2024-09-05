import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Fee = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems:"center"}}>
        <Text style={{fontWeight:"500"}}>Outstanding Fees</Text>
      </View>
      <View style={styles.feeContainer}>
        <View style={styles.fee}>
          <Text style={{color:"green",fontWeight:"500",marginBottom:5}}>₹0</Text>
          <Text>Paid Fees</Text>
        </View>
        <View style={styles.fee}>
          <Text style={{color:"red",fontWeight:"500",marginBottom:5}}>₹0</Text>
          <Text>Remaining Fees</Text>
        </View>
        <View style={styles.fee}>
          <Text style={{color:"skyblue",fontWeight:"500",marginBottom:5}}>₹0</Text>
          <Text>Total Fees</Text>
        </View>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      margin:5,
      paddingVertical:10,
      borderRadius:10, 
      backgroundColor:'white', 
      elevation: 5,
      shadowColor: 'black',
    },
    feeContainer:{
      marginTop:5,flexDirection:"row",
      width:"100%"
    },
    fee:{
      alignItems:"center",
      backgroundColor:"#f2f2f2",
      paddingVertical:10,
      borderRadius:10,
      width:"30%",
      marginHorizontal:6,

      elevation:3,
      shadowColor:'Black'
    },

})
export default Fee