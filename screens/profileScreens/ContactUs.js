import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import SimpleHeader from '../../components/basic-components/SimpleHeader'
import BottomNav from '../../components/BottomNav'
import ContactUsItem from '../../components/contactUs/ContactUsItem'
const ContactUs = ({navigation},props) => {
  return (
    <>
      <SimpleHeader navigation={navigation} text="Contact Us"/>
      <ScrollView scroll showsVerticalScrollIndicator={false} >
        <ContactUsItem navigation={navigation}/>
      </ScrollView>
      <BottomNav navigation={navigation}/>
    </>
  )
}

export default ContactUs