import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import styles from './styles';
import StyledButton from '../StyledButton'
const CarItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                style={styles.image}
                source={image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton
                    type="primary"
                    label="custom order"
                    onPress={() => console.log("custom order pressed")}
                />
                <StyledButton
                    type="secondary"
                    label="existing inventory"
                    onPress={() => console.log("existing pressed")}
                />
            </View>

        </View>
    )
}

export default CarItem
