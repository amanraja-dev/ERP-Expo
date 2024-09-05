import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const NoNotification = () => {
    return (
        <View style={styles.NoNotMess}>
            <Image 
                source={require('../assets/no-notification.png')}
                style={styles.NoNotImage}
            />
            <Text>Notification will be avilable after Faculty/Admin send from the system.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    NoNotMess: {
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
        height:635,
        
    },
    NoNotImage:{
        width:100,
        height:100,
    },
})

export default NoNotification