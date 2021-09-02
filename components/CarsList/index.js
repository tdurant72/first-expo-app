import React from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native'
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem'

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList

