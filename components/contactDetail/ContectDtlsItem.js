import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const ContectDtlsItem = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.titleCSS}>Contact Details</Text>
      <Divider width={1} orientation="vertical" style={styles.deviderCSS} />

      <View style={styles.viewDevider}>
        <View style={{width:'50%'}}>
          <Text style={styles.textCSS}>Student Mobile</Text>
          <Text style={styles.valueCSS}>9155244224</Text>

          <Text style={styles.textCSS}>Parent Mobile</Text>
          <Text>7970656807</Text>
        </View>

        <View style={{width:'50%'}}>
          <Text style={styles.textCSS}>Email</Text>
          <Text style={styles.valueCSS}>amansistec019@gmail.com</Text>

          <Text style={styles.textCSS}>Father Email</Text>
          <Text>-</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  titleCSS: {
    fontSize: 15,
    fontWeight: '600'
  },
  deviderCSS: {
    marginVertical: 20,
  },
  textCSS: {
    color: 'gray',
    marginBottom: 10
  },
  valueCSS: {
    marginBottom: 30
  },
  viewDevider: {
    flexDirection: 'row',
  }
})

export default ContectDtlsItem