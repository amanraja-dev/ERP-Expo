import { View, Text, StyleSheet, Image } from 'react-native'
import React,{ useState,useEffect } from 'react'
import { Divider } from 'react-native-elements'
import dayjs from 'dayjs';

const HomeHeader = ({navigation}) => {
  
  return (
    <>
      <View style={styles.container}>
        <View>
          <GreetMessage/>
          <Text style={{ fontSize: 18, fontWeight: '700' }} >Aman Raja</Text>
        </View>
        <View>
          <Image
            source={{ uri: "https://gyaanarth.com/wp-content/uploads/2022/06/SISTec_Logo.png", }}
          />
          <DateTime/>
        </View>
      </View>
      <Divider width={1} orientation="vertical"/>
    </>
  )
}

const DateTime =()=>{
  const [date,setDate] = useState(dayjs());

  useEffect(()=>{
    const interval = setInterval(()=>{
      setDate(dayjs());
    },1000*1);
    return ()=> clearInterval(interval);
  },[]);
  return(
    <View style={{alignItems:"flex-end"}}>
    <Text style={styles.font}>{date.format("hh:mm:ss")}</Text>
    <Text style={styles.font}>{date.format("dddd, DD MMMM")}</Text>
    </View>
  )
}

const GreetMessage =()=>{
  const [greet,setGreet]=useState('Morning');
  const [date,setDate] = useState(dayjs());
  const findGreet =()=>{
    const HH = date.format("hh");
    if(HH===0 || HH < 12) return setGreet('Morning');
    if(HH===13 || HH < 17) return setGreet('Afternoon');
    setGreet('Evening');
  };

  useEffect(()=>{
      findGreet();
  },[]);

  return(
    <Text style={{ fontSize: 14 }}>{greet}</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  font:{
    fontWeight:'500',
    color:"gray"
  }
})

export default HomeHeader