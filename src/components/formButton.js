import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const formButton = ({ onpress, title, nextTitle }) => {
    return (
        <View>

            <TouchableOpacity>
                <Text>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>{nextTitle}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default formButton

const styles = StyleSheet.create({})