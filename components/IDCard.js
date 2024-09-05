import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const IDCard = ({ navigation }) => {
    return (
        <>
            <View style={styles.Card}>
                <CardImage />
                <CardDetails />
                <CardCode />
            </View>
            <View>
                <Sign />
            </View>
        </>
    )
}

const CardImage = ({ navigation }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={require('../assets/Aman.jpg')}
                style={styles.CardImage}
            />
            <Text style={styles.CardName}>AMAN RAJA</Text>
        </View>
    )
}
const CardDetails = () => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{ width: '40%' }}>
                <Text style={{ marginBottom: 5 }}>Student ID</Text>
                <Text style={{ marginBottom: 20 }}>Branch</Text>
                <Text style={{ marginBottom: 5 }}>Semester</Text>
                <Text style={{ marginBottom: 5 }}>Session</Text>
                <Text style={{ marginBottom: 5 }}>Enrollment</Text>
            </View>
            <View style={{ width: '60%' }}>
                <Text style={{ marginBottom: 5 }}>4296977</Text>
                <Text style={{ marginBottom: 5 }}>COMPUTER SCIENCE AND ENGINEERING</Text>
                <Text style={{ marginBottom: 5 }}>06</Text>
                <Text style={{ marginBottom: 5 }}>2020-2024</Text>
                <Text style={{ marginBottom: 5 }}>0187CS201019</Text>
            </View>
        </View>
    )
}
const CardCode = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <View style={styles.cardCode}>
            </View>
        </View>
    )
}
const Sign = () => {
    return (
        <View style={{marginHorizontal:40,marginTop:20,alignItems:'flex-end'}}>
            <Text style={{fontFamily:'sans-serif-thin'}}>Keshavendra Choudhary </Text>
            <Text style={{color:'red'}}>Director/Principle</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Card: {
        marginVertical: 50,
        marginHorizontal: 40,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        elevation: 20,
        shadowColor: 'black',
        borderWidth: 0,
        borderColor: 'black'
    },
    CardImage: {
        width: 100,
        height: 100,

    },
    CardName: {
        fontWeight: "500",
        fontSize: 17
    },
    CardDetails: {

    },
    cardCode: {
        width: '80%',
        height: 50,
        backgroundColor: 'black',
        alignItems: 'center',

    }
})
export default IDCard