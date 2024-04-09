import React from 'react';
import { ScrollView, Text, StyleSheet, Pressable, TextInput } from 'react-native';

interface LoginScreenProps { }

const LoginScreen = ({ }: LoginScreenProps) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [logged, setLogged] = React.useState(false);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {logged === false ?
                <>
                    <Text style={styles.regularText}>Login to continue</Text>
                    <TextInput
                        placeholder='Email'
                        style={styles.inputBox}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        clearButtonMode='always'
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.inputBox}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        clearButtonMode='always'
                    />
                    <Pressable
                        style={styles.loginButton}
                        onPress={() => {
                            setLogged(!logged);
                        }}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </>
                :
                <Text style={styles.regularText}>
                    Login successful!
                </Text>
            }

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
    loginButton: {
        fontSize: 22,
        padding: 10,
        marginVertical: 20,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 1,
        borderRadius: 50
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
    },
});

export default LoginScreen;