import { View, Text,TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'

const Days = () => {
    return (
        <View style={styles.con}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textCss}>Mon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textCss}>Tue</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textCss}>Wed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textCss}>Thu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textCss}>Fri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textCss}>Sat</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    con:{
        flexDirection:'row',
        margin: 5,
        padding:10,
        backgroundColor:'white',
        borderRadius: 10,
        justifyContent:'space-between'
    },
    btn:{
        backgroundColor:'black',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5
    },
    textCss:{
        color:'white',
        fontWeight:'600',
        fontSize:16
    }
})

export default Days