import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScholarshipComponent from './ScholarshipCard'
import { useNavigation } from '@react-navigation/native'

const ScholarshipList = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>ScholarshipList</Text>
      <ScholarshipComponent
        name="Example Scholarship heading"
        description="This is an example scholarship description."
        postedDate="April 25, 2024"
        deadline="May 15, 2024"
       
        handleMore={() => { navigation.navigate('ScholarshipDetail') }}
        handleApply={()=>{navigation.navigate('applyForm')}}

      />
    </View>
  )
}

export default ScholarshipList

const styles = StyleSheet.create({})