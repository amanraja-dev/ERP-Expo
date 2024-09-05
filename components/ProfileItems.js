import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const ProfileItems = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.ProfileItem}>
        <Image source={require('../assets/details.png')} style={styles.Icon} />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Personal Detail</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PersonalDetails')}>
          <Image source={require('../assets/next.png')} style={styles.nextIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/contact.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Contact Detail</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ContactDetails')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/home-address.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Postal Detail</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PostalDetail')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/profile-photo.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Update Profile Photo</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePhoto')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/contact-us.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Contact Us</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/about-us.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>About Us</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/privacy-policy.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Privacy Policy</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/support.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Support</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Support')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/reset-password.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Change Password</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ChangePass')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/share.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Share App</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ShareApp')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/rating.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Rate App</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RateApp')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ProfileItem}>
        <Image
          source={require('../assets/logout.png')}
          style={styles.Icon}
        />
        <Text style={{ paddingLeft: 20, fontWeight: '500' }}>Logout</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>
    </View>


  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center'
  },

  ProfileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    borderWidth: 0,
    justifyContent: "space-between",

    elevation: 20,
    shadowColor: 'black',
  },

  Icon: {
    width: 30,
    height: 30,
  },

  nextIcon: {
    width: 17,
    height: 17,
  },
})
export default ProfileItems