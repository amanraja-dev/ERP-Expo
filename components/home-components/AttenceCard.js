import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const AttenceCard = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems:"center"}}>
      <Text style={{fontWeight:"600"}}>Attendence</Text>
      </View>
    </View>
  )
}

const pie = ()=>{
<View style={{ width: 175, alignItems: 'center' }}>
            <Pie
              radius={80}
              innerRadius={75}
              sections={[
                {
                  percentage: 60,
                  color: '#f00',
                },
              ]}
              backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>
                60%
              </Text>
            </View>
          </View>
}
const styles = StyleSheet.create({
    container:{
      margin:5,
      padding:10,
      borderRadius:10, 
      backgroundColor:'white', 
      elevation: 5,
      shadowColor: 'black',
    },
    gauge: {
        position: 'absolute',
        width: 140,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      },
      gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
      },
  })

export default AttenceCard