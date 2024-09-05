import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import { Divider } from 'react-native-elements';
import BackButton from './basic-components/BackButton';
import Title from './basic-components/Title';

export default function MessageHeader({ navigation }) {
    const [activeTab,setActiveTab]= useState("Message");
    return (
        <>
            <View style={{ paddingLeft: 20, paddingTop: 20, backgroundColor: 'white' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <BackButton navigation={navigation}/>
                    <Title title='Message'/>
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity 
                        style={styles.btn}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}>
                        <Text style={{color:'white'}}>Message</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.btn}>
                        <Text style={{color:'white'}}>Broadcast</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Divider width={1} orientation="vertical" />
        </>
    )
}

const styles = StyleSheet.create({
    profileTextcss: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },

    btnContainer:{
        flexDirection:'row',
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f2f2f2',
        paddingVertical:10,
        borderRadius:10,
        marginRight:20,
    },

    btn:{
        paddingHorizontal:45,
        paddingVertical:10,
        backgroundColor:'black',
        borderRadius:10,
    }
})