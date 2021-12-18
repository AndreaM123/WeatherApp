import React from 'react';
import { Text, View, StyleSheet, Image, PixelRatio} from 'react-native';

const AddCityView = () => {
  return (
      <View style={styles.addCityButton}>
          <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('./../assets/icons/Plus.png')}/>
          </View>
          <Text style={styles.buttonText}>Aggiungi Citta</Text>
      </View>
  );
}
export default AddCityView;

const styles = StyleSheet.create({

    addCityButton: {
        backgroundColor: 'transparent',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        margin: PixelRatio.getPixelSizeForLayoutSize(15)
    },

    image: {
        width: PixelRatio.getPixelSizeForLayoutSize(10),
        height: PixelRatio.getPixelSizeForLayoutSize(10)
    },

    imageContainer: {
        padding: 5
    },

    buttonText: {
        fontSize: 20,
        color: '#01175F',
        margin: 5,
        fontFamily: 'Poppins-SemiBold'
    }
})