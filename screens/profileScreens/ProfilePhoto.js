import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import SimpleHeader from '../../components/basic-components/SimpleHeader'
import BottomNav from '../../components/BottomNav'
import ProfilePhotoItem from '../../components/profilePhoto/ProfilePhotoItem'
const ProfilePhoto = ({navigation},props) => {
  return (
    <>
      <SimpleHeader navigation={navigation} text="Profile Photo"/>
      <ScrollView scroll showsVerticalScrollIndicator={false} >
        <ProfilePhotoItem navigation={navigation}/>
      </ScrollView>
      <BottomNav navigation={navigation}/>
    </>
  )
}

export default ProfilePhoto