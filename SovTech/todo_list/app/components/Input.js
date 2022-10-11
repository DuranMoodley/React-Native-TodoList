import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {

    const [text,setText] = useState('');
    const { placeholder } = props;

    onChangeText = text => setText(text);

    onSubmitEditing = () => {
        const { onSubmitEditing } = props;
      
        if (!text) return // Don't submit if empty
        onSubmitEditing(text);
        setText('');
    }

    return (
        <TextInput
          style={styles.input}
          value={text}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      )
}

const styles = StyleSheet.create({
    input: {
      padding: 15,
      height: 50,
    },
  })

export default Input;