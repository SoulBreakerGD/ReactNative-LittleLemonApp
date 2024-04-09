import React from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Alert } from 'react-native';

interface WelcomeScreenProps { }

const WelcomeScreen = ({}: WelcomeScreenProps) => {
    const [firstName, onChangeFirstName] = React.useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
            <TextInput
                placeholder='First Name'
                style= {styles.inputBox}
                value={firstName}
                onChangeText={onChangeFirstName}
                onFocus={() => {Alert.alert('First Name is focused')}}
                onBlur={() => {Alert.alert('First Name is now blurred')}}
                clearButtonMode='always'
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
        color: '#333333',
    },
});

export default WelcomeScreen;