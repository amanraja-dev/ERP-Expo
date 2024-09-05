import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import Home from './screens/Home';
import Message from './screens/Message';
import Notification from './screens/Notification';
import Profile from './screens/Profile';
import ID from './screens/ID';

import PersonalDetails from './screens/profileScreens/PersonalDetails';
import ContactDetails from './screens/profileScreens/ContactDetails';
import PostalDetail from './screens/profileScreens/PostalDetail';
import ProfilePhoto from './screens/profileScreens/ProfilePhoto';
import ContactUs from './screens/profileScreens/ContactUs';
import AboutUs from './screens/profileScreens/AboutUs';
import PrivacyPolicy from './screens/profileScreens/PrivacyPolicy';
import Support from './screens/profileScreens/Support';
import ChangePass from './screens/profileScreens/ChangePass';
import ShareApp from './screens/profileScreens/ShareApp';
import RateApp from './screens/profileScreens/RateApp';
import ClassSchedule from './screens/homeScreens/ClassSchedule';
import Attendence from './screens/homeScreens/Attendence';
import AttendenceDetails from './screens/homeScreens/AttendenceDetails';
import Login from './screens/forms/Login';
import Registration from './screens/forms/Registration';
import ForgetPass from './screens/forms/ForgetPass';

import BottomTabs from './routes/BottomTabs';
import TavNavigation from './routes/HomeStack';
const Stack = createNativeStackNavigator();

export default function App({navigation}) {

  return (
    <SafeAreaView style={styles.savCSS}>
      <NavigationContainer>
      <BottomTabs />
      </NavigationContainer>
    </SafeAreaView>
    )
}

const styles=StyleSheet.create({
  savCSS:{
    backgroundColor:"#f2f2f2",
    flex:1,
  }
})
