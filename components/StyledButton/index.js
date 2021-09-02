import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
const StyledButton = ({ type, label, onPress }) => {
    console.log('type:', type);
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const color = type === 'primary' ? '#FFFFFF' : '#171A20CC';
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text
                    style={[styles.text, { color: color }]}
                >
                    {label}
                </Text>
            </Pressable>
        </View>
    )
}
export default StyledButton;
