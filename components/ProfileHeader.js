import { View, Text, StyleSheet, Image,} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BackButton from './basic-components/BackButton';
import Title from './basic-components/Title';

const ProfileHeader = ({ navigation }) => {
  return (
    <>
    <View style={{paddingLeft:20,paddingTop:20,backgroundColor:'white'}}>

      <View style={{ flexDirection: 'row', alignItems:'center',marginBottom:20}}>
        <BackButton navigation={navigation}/>
        <Title title="Profile"/>
      </View>

      <View style={{ flexDirection: 'row',alignItems:'center',marginBottom:20}}>
      <ProfileImage/>
      <ProfileInfo/>
      </View>

    </View>
    <Divider width={1} orientation="vertical" />
    </>
  )
}

const ProfileImage=()=>{
  return(
    <Image 
      source={require('../assets/Aman.jpg')}
      style={styles.profileImage}
      />
  )
}

const ProfileInfo=()=>{
  return (
    <View style={styles.profileINFO}>
      <Text style={{fontWeight:'bold',fontSize:18}}>AMAN RAJA</Text>
      <Text style={{marginTop:5,fontWeight:'bold',fontSize:14}}>COMPUTER SCIENCE AND ENGINEERING SEM 6</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#1e90ff'
  },
  
  profileImage:{
    width:80,
    height:80,
    borderRadius:50,
    borderWidth:2,
    borderColor:'#1e90ff',
  },

  profileINFO:{
    paddingLeft:30,
    maxWidth:200,
    
  }
})

export default ProfileHeader