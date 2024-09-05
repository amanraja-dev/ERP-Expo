import React from 'react'
import { ScrollView,StyleSheet } from 'react-native'

import SimpleHeader from '../../components/basic-components/SimpleHeader'
import BottomNav from '../../components/BottomNav'
import PostalDtlsItem from '../../components/postalDetail/PostalDtlsItem'

const PostalDetail = ({navigation},props) => {
  return (
    <>
      <SimpleHeader navigation={navigation} text="Postal Detail"/>
      <ScrollView scroll showsVerticalScrollIndicator={false} style={styles.scrollCSS} >
        <PostalDtlsItem navigation={navigation}/>
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


export default PostalDetail