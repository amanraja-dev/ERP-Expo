import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const PostalDtlsItem = ({navigation}) => {
  return (
    <View>
      <Text style={styles.titleCSS}>Local Address</Text>
      <Divider width={1} orientation="vertical" style={styles.deviderCSS} />

      <View style={styles.viewDevider}>
        <View style={{width:'50%'}}>
          <Text style={styles.textCSS}>Address</Text>
          <Text style={styles.valueCSS}>Karond</Text>

          <Text style={styles.textCSS}>State</Text>
          <Text style={styles.valueCSS}>MP</Text>

          <Text style={styles.textCSS}>City</Text>
          <Text style={styles.valueCSS}>Bhopal</Text>
        </View>

        <View>
          <Text style={styles.textCSS}>Country</Text>
          <Text style={styles.valueCSS}>India</Text>

          <Text style={styles.textCSS}>District</Text>
          <Text style={styles.valueCSS}>Bhopal</Text>

          <Text style={styles.textCSS}>Pin Code</Text>
          <Text style={styles.valueCSS}>462038</Text>
        </View>
      </View>


      <Text style={styles.titlePOS}>Permanent Address</Text>
      <Divider width={1} orientation="vertical" style={styles.deviderCSS} />

      <View style={styles.viewDevider}>
        <View style={{width:'50%'}}>
        <Text style={styles.textCSS}>Address</Text>
          <Text style={styles.valueCSS}>Kolgama</Text>

          <Text style={styles.textCSS}>State</Text>
          <Text style={styles.valueCSS}>Bihar</Text>

          <Text style={styles.textCSS}>City</Text>
          <Text style={styles.valueCSS}>Sultanganj</Text>
        </View>

        <View style={{width:'50%'}}>
        <Text style={styles.textCSS}>Country</Text>
          <Text style={styles.valueCSS}>India</Text>

          <Text style={styles.textCSS}>District</Text>
          <Text style={styles.valueCSS}>Bhagalpur</Text>

          <Text style={styles.textCSS}>Pin Code</Text>
          <Text style={styles.valueCSS}>813228</Text>
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
  },
  titlePOS: {
    fontSize: 15,
    fontWeight: '600',
    marginTop:100,
  },
})

export default PostalDtlsItem