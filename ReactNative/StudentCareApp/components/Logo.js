import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo() {
    return (
        <Image
            source={require('../assets/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
            accessible
            accessibilityLabel="University Logo"
        />
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 120,
        marginBottom: 16,
    },
});
