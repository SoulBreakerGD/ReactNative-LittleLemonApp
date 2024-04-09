import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LittleLemonFooterProps { }

const LittleLemonFooter = ({}: LittleLemonFooterProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>All rights reserved by Little Lemon, 2022</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9972',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        fontStyle: 'italic',
    },
});

export default LittleLemonFooter;
