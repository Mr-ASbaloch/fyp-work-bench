import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';
import {colors, commonStyles} from '../utils/styles';

const CustomTextInput = ({label, value, onChangeText, mode = 'outlined'}) => {
  return (
    <PaperTextInput
      mode={mode}
      style={styles.inputs}
      activeOutlineColor="grey"
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputs: {
    color: colors.common,
    borderRadius: 40,
    margin: 10,
    ...commonStyles.bgPrimary,
  },
});
