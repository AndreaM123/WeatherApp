import * as React from 'react';
import CityCardView from '../components/CityCardView';
import TitleView from '../components/TitleView';
import AddCityView from '../components/AddCityView';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import moment from 'moment';

function Homepage(data) {
    let cityCards = data.cities.map((city, i) => {
        return <CityCardView 
            key = {i}
            temperature = {kelvinToCelsius(city['main']['temp'])}
            cityName = {city['name']} 
            iconCode = {city['weather'][0]['icon']} 
            date = {getDate(city['dt'])} 
            time = {getTime(city['dt'])} />                           
    })    

    return (
        <SafeAreaView style={styles.background}>
        <TitleView name="Mario" />
        <AddCityView />
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardsContainer}>
            {cityCards}
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}
export default Homepage

function kelvinToCelsius(number) {
    return Math.round(number - 273.15)
}

function getDate(timestamp) {
    return moment(timestamp*1000).format('dddd D MMMM');
}

function getTime(timestamp) {
    return  moment(timestamp*1000).format('h:mm a');
}

const styles = StyleSheet.create({
    background: {
        backgroundColor:'#efefef',
        flex: 1,
        padding: 20
    },

    cardsContainer: {
        alignItems: "center",
        justifyContent: 'center',
        flex: 1
    },
});