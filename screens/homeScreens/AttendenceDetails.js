import { View, Text, ScrollView, StyleSheet,Image } from 'react-native'
import React from 'react'
import SimpleHeader from '../../components/basic-components/SimpleHeader'
import BottomNav from '../../components/BottomNav'
import { Divider } from 'react-native-elements'

const attendences = [
    {
        sno: '1',
        date: '16/01/2023',
        lecno: 'P1',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '2',
        date: '17/01/2023',
        lecno: 'P1',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '3',
        date: '18/01/2023',
        lecno: 'P3',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '4',
        date: '19/01/2023',
        lecno: 'P4',
        status: 'Present',
        image: require("../../assets/check-mark.png")
    },
    {
        sno: '5',
        date: '16/01/2023',
        lecno: 'P1',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '6',
        date: '17/01/2023',
        lecno: 'P1',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '7',
        date: '18/01/2023',
        lecno: 'P3',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '8',
        date: '19/01/2023',
        lecno: 'P4',
        status: 'Present',
        image: require("../../assets/check-mark.png")
    },
    {
        sno: '1',
        date: '16/01/2023',
        lecno: 'P1',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '2',
        date: '17/01/2023',
        lecno: 'P1',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '3',
        date: '18/01/2023',
        lecno: 'P3',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '4',
        date: '19/01/2023',
        lecno: 'P4',
        status: 'Present',
        image: require("../../assets/check-mark.png")
    },
    {
        sno: '5',
        date: '16/01/2023',
        lecno: 'P1',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '6',
        date: '17/01/2023',
        lecno: 'P1',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '7',
        date: '18/01/2023',
        lecno: 'P3',
        status: 'Absent',
        image: require("../../assets/wrong.png")
    },
    {
        sno: '8',
        date: '19/01/2023',
        lecno: 'P4',
        status: 'Present',
    },
];

const AttendenceDetails = ({ navigation }) => {

    return (
        <>
            <ScrollView scroll showsVerticalScrollIndicator={false}>
                <Messages navigation={navigation} />
            </ScrollView>
        </>
    )
}

const Messages = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>Sr. No.</Text>
                <Text>Date</Text>
                <Text>Period</Text>
                <Text>Status</Text>
            </View>
            <Divider />
            {attendences.map((attendence, index) => (
                <View style={styles.messsages} key={index}>
                    <Text style={styles.text}>{attendence.sno}</Text>
                    <Text>{attendence.date}</Text>
                    <Text>{attendence.lecno}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>{attendence.status}</Text>
                    <Image source={attendence.image} style={{width:15, height:15}}/>
                    </View>
                </View>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,

        elevation: 5,
        shadowColor: 'black'
    },
    title: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: "space-around"
    },
    messsages: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical:10
    },
})
export default AttendenceDetails