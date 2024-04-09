import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LittleLemonHeaderProps { }

const LittleLemonHeader = ({}: LittleLemonHeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Little Lemon</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        backgroundColor: '#EE9972',
    },
    title: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
});

export default LittleLemonHeader;
