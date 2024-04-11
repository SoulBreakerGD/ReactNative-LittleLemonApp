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
        flex: 0.1,
        backgroundColor: '#EE9972',
    },
    title: {
        padding: 15,
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
    },
});

export default LittleLemonHeader;
