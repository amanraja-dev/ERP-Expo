import React from 'react'
import { ScrollView,StyleSheet } from 'react-native'

import SimpleHeader from '../../components/basic-components/SimpleHeader'
import BottomNav from '../../components/BottomNav'
import PersonalDtlsItem from '../../components/personalDetail/PersonalDtlsItem'

const PersonalDetails = ({navigation}) => {
  return (
    <>
      <SimpleHeader navigation={navigation} text="Personal Info"/>
      <ScrollView scroll showsVerticalScrollIndicator={false} style={styles.scrollCSS}>
        <PersonalDtlsItem navigation={navigation}/>
      </ScrollView>
      <BottomNav navigation={navigation}/>
    </>
  )
}

const styles = StyleSheet.create({
  scrollCSS:{
    margin:10,
    padding:20,
    backgroundColor:'white',
    borderRadius:10,

    elevation: 10,
    shadowColor: 'black',
  }
})

export default PersonalDetails