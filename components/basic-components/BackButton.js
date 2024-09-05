import { View, Text , TouchableOpacity,Image} from 'react-native'
import React from 'react'

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../../assets/left.png')}

        style={{
          width: 30,
          height: 30,
        }}
      />
    </TouchableOpacity>
  )
}

export default BackButton