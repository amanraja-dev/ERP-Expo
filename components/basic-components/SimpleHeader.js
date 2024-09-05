import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BackButton from './BackButton';
import Title from './Title';

const SimpleHeader = ({ navigation, title }) => {
  return (

    <>
      <View style={{ paddingLeft: 20, paddingTop: 20, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <BackButton navigation={navigation}/>
          <Title navigation={navigation} title={title} />
        </View>
      </View>
      <Divider width={1} orientation="vertical" />
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  }
})

export default SimpleHeader