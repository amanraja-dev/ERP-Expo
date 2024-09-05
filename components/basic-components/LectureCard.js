import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const lectures = [
  {
    lecture_no: '01',
    lecture_time: '10:00AM-11:00AM',
    faculty_name: 'Rahul Dubey',
    subject_code: 'CS601',
    subject_name: 'Machine Learning TH',
  },
  {
    lecture_no: '02',
    lecture_time: '11:00AM-12:00PM',
    faculty_name: 'Rahul Dubey',
    subject_code: 'CS602',
    subject_name: 'Computer Network TH',
  },
  {
    lecture_no: '03',
    lecture_time: '12:00PM-1:00PM',
    faculty_name: 'Rahul Dubey',
    subject_code: 'CS603',
    subject_name: 'Compiler Design TH',
  },
  {
    lecture_no: '04',
    lecture_time: '1:35PM-2:35PM',
    faculty_name: 'Rahul Dubey',
    subject_code: 'CS604',
    subject_name: 'Project Management TH',
  },
  {
    lecture_no: '05',
    lecture_time: '2:35PM-3:35PM',
    faculty_name: 'Rahul Dubey',
    subject_code: 'CS605',
    subject_name: 'Skill Development LAB',
  },
  {
    lecture_no: '06',
    lecture_time: '3:35PM-4:35PM',
    faculty_name: 'Rahul Dubey',
    subject_code: 'CS606',
    subject_name: 'Data Analytic LAB',
  }
];

const LectureCard = () => {
  return (
    <>
      {lectures.map((lecture, index) => (
        <View style={styles.container} key={index}>

          <View style={{ alignItems: "center", backgroundColor: "#191919", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingVertical: 5 }}>
            <Text style={{ color: "white", fontWeight: '500' }}>Lecture {lecture.lecture_no}</Text>
          </View>
          <View style={{ padding: 10, alignItems: 'center', justifyContent: "center", flexDirection: 'row', backgroundColor: "#f2f2f2" }}>
            <Image
              source={require('../../assets/timer.png')}
              style={{
                width: 20,
                height: 20
              }}
            />
            <Text>{lecture.lecture_time}</Text>
          </View>

          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View style={{ width: "50%", alignItems: "center" }}>
              <Text style={styles.textTitle}>Faculty Name</Text>
              <Text style={styles.text}>{lecture.faculty_name}</Text>
            </View>
            <View style={{ width: "50%", alignItems: "center", paddingHorizontal: 10 }}>
              <Text style={styles.textTitle}>Subject Name</Text>
              <Text style={styles.text}>{lecture.subject_code} {lecture.subject_name}</Text>
            </View>
          </View>

        </View>
      ))}
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
  },
  textTitle: {
    color: "gray",
    fontWeight: "600",
    marginBottom: 10
  },
  text: {
    fontSize: 13,
    fontWeight: "500"
  }
})
export default LectureCard