import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Title = ({title}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.Textcss}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    Textcss: {
      marginLeft: 20,
      fontWeight: 'bold',
      fontSize: 20,
    }
  })

export default Title