import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Validator } from 'email-validator'

const ForgetPass = ({ navigation }) => {
  const emailValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
  })
  return (
    <Formik
      initialValues={{ email: ''}}
      onSubmit={values => { console.log(values) }}
      validationSchema={emailValidationSchema}
      validateOnMount={true}
    >
      {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
        <View style={styles.container}>
          <TextInput style={styles.inputStyle}
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
          <TouchableOpacity style={styles.forgetPass} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forgetText}>Login</Text>
          </TouchableOpacity>
          <Pressable style={styles.btn(isValid)} onPress={handleSubmit}>
            <Text style={{ color: 'white', fontWeight: '600' }}>Forget Password</Text>
          </Pressable>
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
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    elevation: 10,
    shadowColor: 'black'
  },
  forgetPass: {
    justifyContent: 'flex-end',
    marginBottom: 20,
    width: '80%',
    alignItems: 'flex-end'
  },
  forgetText: {
    color: 'gray'
  },
  btn: isValid=>({
    width: '80%',
    height: 40,
    backgroundColor:isValid? 'black': 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: 'black'
  })
})

export default ForgetPass