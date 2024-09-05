import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const ImageSlider = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/sistec.jpg')}
        style={{
            height:150,
            width:"100%",
            borderRadius:10
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      marginVertical:0,
      marginHorizontal:10,
      padding:0,
      borderRadius:10, 
      backgroundColor:'white', 
      elevation: 5,
      shadowColor: 'black',
    }
  })

export default ImageSlider