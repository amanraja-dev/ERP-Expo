import { ScrollView } from 'react-native'
import React from 'react'
import SimpleHeader from '../../components/basic-components/SimpleHeader'
import BottomNav from '../../components/BottomNav'
import SubjectCard from '../../components/basic-components/SubjectCard'
const Attendence = ({ navigation }) => {
  return (
    <>
      <ScrollView scroll showsVerticalScrollIndicator={false}>
        <SubjectCard navigation={navigation} />
      </ScrollView>
    </>
  )
}

export default Attendence