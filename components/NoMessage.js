import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const NoMessage = () => {
  return (
    <View style={styles.NoNotMess}>
    <Image 
        source={require('../assets/nomess.png')}
        style={styles.NoNotImage}
    />
    <Text>Message will be avilable after you send to some one.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    NoNotMess: {
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
        height:555,
    },
    NoNotImage:{
        width:120,
        height:100,
    },
})

export default NoMessage