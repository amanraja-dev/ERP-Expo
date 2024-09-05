import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const PersonalDtlsItem = () => {
  return (
    <View>
      <Text style={styles.titleCSS}>Personal Details</Text>
      <Divider width={1} orientation="vertical" style={styles.deviderCSS} />

      <View style={styles.viewDevider}>
        <View style={{width:'50%', paddingRight:10}}>
          <Text style={styles.textCSS}>Name</Text>
          <Text style={styles.valueCSS}>Aman Raja</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>0187CS201019</Text>

          <Text style={styles.textCSS}>Student ID</Text>
          <Text style={styles.valueCSS}>4296977</Text>

          <Text style={styles.textCSS}>Father Name</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Father Mobile</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Branch</Text>
          <Text style={styles.valueCSS}>Computer Science And Engineering</Text>

          <Text style={styles.textCSS}>Section</Text>
          <Text style={styles.valueCSS}>A</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>-</Text>

        </View>

        <View style={{width:'50%'}}>
          <Text style={styles.textCSS}>Roll No</Text>
          <Text style={styles.valueCSS}>019</Text>

          <Text style={styles.textCSS}>Registration No</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Mobile</Text>
          <Text style={styles.valueCSS}>9155244224</Text>

          <Text style={styles.textCSS}>Mother Name</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Mother Mobile</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Semester</Text>
          <Text style={styles.valueCSS}>06</Text>

          <Text style={styles.textCSS}>Medium</Text>
          <Text style={styles.valueCSS}>English</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>-</Text>

          <Text style={styles.textCSS}>Enrollment No</Text>
          <Text style={styles.valueCSS}>-</Text>

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
  viewDevider:{
    flexDirection:'row',
  }
})

export default PersonalDtlsItem