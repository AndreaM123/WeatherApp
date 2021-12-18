import React from 'react';
import { Text, View, StyleSheet, Image, PixelRatio } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CityCardView = (data) => {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#011354', '#5B9FE3']} style={[styles.card, styles.shadow]}>
        <View style={styles.infoContainer}>
          <Text style={styles.cityName}>{data.cityName}</Text>
          <Text style={styles.date}>{data.date}</Text>
          <Text style={styles.time}>{data.time}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
              style={styles.image}
              source={{uri: 'http://openweathermap.org/img/w/' + data.iconCode + '.png'}}/>
          </View>
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperature}>{data.temperature}°</Text>
        </View>
    </LinearGradient>
  );
}
export default CityCardView;

const styles = StyleSheet.create({

  card: {
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    backgroundColor:'#fff',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  infoContainer: {
    flex: 1,
  },
  
  cityName: {
    fontSize: 26,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold'
  },
  
  date: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Poppins-Medium'
  },
  
  time: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Poppins-Light'
  },
  
  temperature: {
    fontSize: 50,
    textAlign: 'right',
    color: '#fff',
    fontFamily: 'Poppins-Bold'
  },
  
  temperatureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  
  imageContainer: {
    padding: 5
  },

  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(25),
    height: PixelRatio.getPixelSizeForLayoutSize(25)
  },

  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  }
})