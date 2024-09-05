import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable ,Alert} from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Validator } from 'email-validator'
// import {firebase} from '../../firebase'
const Login = ({ navigation }) => {
    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })

    const onLogin = async (email,password) =>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
            console.log('logged in')
        }
        catch(error){
            Alert.alert(error.message)
        }
    }
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => { onLogin(values.email,values.password) }}
            validationSchema={loginValidationSchema}
            validateOnMount={true}
        >
            {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                <View style={styles.container}>
                    <TextInput style={[styles.inputStyle,]}
                        placeholder='Enter username or email'
                        placeholderTextColor='#444'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <TextInput style={styles.inputStyle}
                        placeholder='Enter password'
                        placeholderTextColor='#444'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    <TouchableOpacity style={styles.forgetPass} onPress={() => navigation.navigate('ForgetPass')}>
                        <Text>Forget Password?</Text>
                    </TouchableOpacity>

                    <Pressable style={styles.btn(isValid)} onPress={handleSubmit}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Log in</Text>
                    </Pressable>

                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity style={styles.forgetPass} onPress={() => navigation.navigate('Registration')}>
                            <Text style={{ color: 'gray' }}>Dont have an account?</Text>
                            <Text>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    inputStyle: {
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'gray',
        fontSize: 15,
        width: '80%',
        height: 45,
        paddingLeft: 20,
        marginBottom: 10,
        backgroundColor: '#f2f2f2',
        elevation: 10,
        shadowColor: 'black'
    },
    forgetPass: {
        justifyContent: 'flex-end',
        marginBottom: 10,
        width: '80%',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    btn: isValid => ({
        width: '80%',
        height: 40,
        backgroundColor: isValid ? 'black' : 'gray',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: isValid ? 10 : 0,
        shadowColor: 'black'
    }),
    inputBorder:values=>({
        borderColor: values.email.length < 1 || Validator.validate(values.email)
        ? '#f2f2f2'
        : 'red'
    }),
})

export default Login