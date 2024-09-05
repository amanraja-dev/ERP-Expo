import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Schedule = () => {
  return (

    <View style={styles.container}>

      <View style={{ alignItems: "center", backgroundColor: "black", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingVertical: 5 }}>
        <Text style={{ color: "white", fontWeight: '500' }}>Lecture 1</Text>
      </View>
      <View style={{ padding: 10, alignItems: 'center', justifyContent: "center", flexDirection: 'row', backgroundColor: "#f2f2f2" }}>
        <Image
          source={require('../../assets/timer.png')}
          style={{
            width: 20,
            height: 20
          }}
        />
        <Text>10:00AM-11:00AM</Text>
      </View>

      <View style={{ flexDirection: "row", paddingVertical: 10 }}>
        <View style={{ width: "50%", alignItems: "center" }}>
          <Text style={styles.textTitle}>Faculty Name</Text>
          <Text style={styles.text}>Ruchi Jain Choudhary</Text>
        </View>
        <View style={{ width: "50%", alignItems: "center" }}>
          <Text style={styles.textTitle}>Subject Name</Text>
          <Text style={styles.text}>CS601 Machine Learning TH</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
  },
  textTitle: {
    color: "gray",
    fontWeight: "600",
    marginBottom: 10
  },
  text: {
    fontSize: 13,
    fontWeight: "500"
  }
})
export default Schedule