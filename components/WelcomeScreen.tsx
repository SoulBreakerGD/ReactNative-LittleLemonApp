import React from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Alert, Image, View } from 'react-native';

interface WelcomeScreenProps { }

const WelcomeScreen = ({ }: WelcomeScreenProps) => {
    const [firstName, onChangeFirstName] = React.useState('');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
                <Image
                    style={styles.logo}
                    source={require('../img/littleLemonLogo.png')}
                    resizeMode='center'
                    accessible={true}
                    accessibilityLabel={'Little Lemon Logo'}
                />
                <Text style={styles.headerText}>Little Lemon</Text>
            </View>
            {/* <Text style={styles.regularText}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text> */}
            {/* <TextInput
                placeholder='First Name'
                style= {styles.inputBox}
                value={firstName}
                onChangeText={onChangeFirstName}
                onFocus={() => {Alert.alert('First Name is focused')}}
                onBlur={() => {Alert.alert('First Name is now blurred')}}
                clearButtonMode='always'
            /> */}
            <Text style={styles.title}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
            <Image
                style={styles.image}
                source={require('../img/Picture1.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'}
            />
            <Image
                style={styles.image}
                source={require('../img/Picture2.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'}
            />
            <Image
                style={styles.image}
                source={require('../img/Picture3.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'}
            />
            <Image
                style={styles.image}
                source={require('../img/Picture4.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    headerText: {
        padding: 10,
        fontSize: 30,
        // color: '#EDEFEE',
        textAlign: 'center',
        display: 'flex',
    },
    regularText: {
        fontSize: 24,
        padding: 10,
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
    logo: {
        height: 100,
        width: 100,
        display: 'flex',
    },
    image: {
        width: 325,
        height: 250,
        borderRadius: 10,
        margin: 10,
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default WelcomeScreen;