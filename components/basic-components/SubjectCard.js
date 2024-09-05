import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';


const subjects = [
    {
        subject_code: 'CS601',
        subject_name: 'Machine Learning TH',
        faculty_name: 'Rahul Dubey',
    },
    {
        subject_code: 'CS602',
        subject_name: 'Computer Network TH',
        faculty_name: 'Pushraj singh chauhan',
    },
    {
        subject_code: 'CS603',
        subject_name: 'Compiler Design TH',
        faculty_name: 'Bhavna gupta',
    },
    {
        subject_code: 'CS604',
        subject_name: 'Project Management TH',
        faculty_name: 'Sweta singh',
    },
    {
        subject_code: 'CS605',
        subject_name: 'Skill Development LAB',
        faculty_name: 'Sweta singh',
    },
    {
        subject_code: 'CS606',
        subject_name: 'Data Analytic LAB',
        faculty_name: 'Ghanshyam dhubey',
    }
];

const SubjectCard = ({navigation}) => {
    return (
        <>
            {subjects.map((subject, index) => (
                <View style={styles.container} key={index}>
                    <CardTitle name={subject.subject_name} />
                    <CardInfo navigation={navigation}/>
                    <Divider width={1} orientation="vertical" />
                    <CardFooter name={subject.faculty_name} />
                </View>
            ))}
        </>
    )
}

const CardTitle = (props) => {
    return (
        <View style={styles.cardTitle}>
            <Text style={styles.titleText}>{props.name}</Text>
        </View>
    )
}

const CardInfo = ({navigation}) => {
    return (
        <View style={styles.cardInfo}>
            <View style={{ width: '30%' }}>

            </View>
            <View style={{ flexDirection: 'row', width: '60%' }}>
                <View style={{ width: '60%' }}>
                    <Text>Total</Text>
                    <Text>Present</Text>
                    <Text>Absent</Text>
                </View>
                <View style={{ width: '40%' }}>
                    <Text>00</Text>
                    <Text>00</Text>
                    <Text>00</Text>
                </View>
            </View>
            <TouchableOpacity style={{ width: '20%', alignItems: 'flex-end' }} onPress={() => navigation.navigate('AttendenceDetails')}>
                <Image
                    source={require('../../assets/next.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

const CardFooter = (props) => {
    return (
        <View style={styles.footer}>
            <Text style={{color:'black'}}>Faculty Name     {props.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: 'white',
    },
    cardTitle: {
        alignItems: "center",
        backgroundColor: "black",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 8
    },
    titleText: {
        color: "white",
        fontWeight: '500'
    },
    cardInfo: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
    },
    footer: {
        padding: 10
    }
})
export default SubjectCard