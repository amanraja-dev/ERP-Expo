import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeItems = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:20}}>
                <View style={styles.itemView}>
                    <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.navigate('Attendence')}>
                        <Icon name='note-check' color={'#03232e'} size={40} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Attendence</Text>
                </View>


                <View style={styles.itemView}>
                    <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.navigate('ClassSchedule')}>
                        <Icon name='timetable' color={'#03232e'} size={40} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Class Schedule</Text>
                </View>

                <View style={styles.itemView}>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Icon name='calendar-month' color={'#03232e'} size={40} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Calendar</Text>
                </View>
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:20}}>
                <View style={styles.itemView}>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Icon name='currency-inr' color={'#03232e'} size={40} />
                    </TouchableOpacity>
                    <Text style={styles.text}>College Fees</Text>
                </View>

                <View style={styles.itemView}>
                    <TouchableOpacity style={styles.iconCircle}>
                    <Icon name='file-document' color={'#03232e'} size={40} />
                    </TouchableOpacity>
                    <Text style={styles.text}>MST Result</Text>
                </View>

                <View style={styles.itemView}>
                    <TouchableOpacity style={styles.iconCircle}>
                    <Icon name='note-check' color={'#03232e'} size={40} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Schedule</Text>
                </View>
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:20}}>
                <View style={styles.itemView}>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Image source={require('../../assets/attendence.png')}
                            style={styles.Icon}
                        />
                    </TouchableOpacity>
                    <Text>-</Text>
                </View>

                <View style={styles.itemView}>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Image source={require('../../assets/attendence.png')}
                            style={styles.Icon}
                        />
                    </TouchableOpacity>
                    <Text>-</Text>
                </View>

                <View style={styles.itemView}>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Image source={require('../../assets/attendence.png')}
                            style={styles.Icon}
                        />
                    </TouchableOpacity>
                    <Text>-</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        paddingTop:30,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        justifyContent: 'space-around'
    },
    Icon: {
        width: 35,
        height: 35
    },
    iconCircle: {
        backgroundColor: '#f2f2f2',
        width: 50,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor:'#000000',
        marginBottom:10
    },
    itemView: {
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontSize:13
    }
})

export default HomeItems