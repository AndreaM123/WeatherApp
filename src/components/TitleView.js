import React from 'react';
import { Text, View, StyleSheet, PixelRatio } from 'react-native';
  
const TitleView = (data) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Good Morning, {data.name}!</Text>
        </View>
    );
}
export default TitleView

const styles = StyleSheet.create({

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(15)
    },

    title: {
        fontSize: 28,
        color: '#01175F',
        margin: 5,
        fontFamily: 'Poppins-SemiBold',
    }
  })