import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import SimpleHeader from '../../components/basic-components/SimpleHeader'
import BottomNav from '../../components/BottomNav'
import LectureCard from '../../components/basic-components/LectureCard'
import Days from '../../components/basic-components/Days'

const ClassSchedule = ({navigation}) => {
    return (
        <>
            <Days navigation={navigation}/>
            <ScrollView scroll showsVerticalScrollIndicator={false}>
                <LectureCard navigation={navigation}/>
            </ScrollView>
        </>
    )
}

export default ClassSchedule