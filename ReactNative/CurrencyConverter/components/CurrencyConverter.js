import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import axios from 'axios';

export default function CurrencyConverter() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleConversion = async () => {
        if (!amount || isNaN(amount)) return; 

        const API_KEY = '2d3e8cec84a0c5cace19a3bf'; 
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

        try {
            const response = await axios.get(url);
            const exchangeRates = response.data.conversion_rates;
            const rate = exchangeRates[toCurrency];
            const result = (amount * rate).toFixed(2);
            setConvertedAmount(result);
        } catch (error) {
            console.error('Error fetching conversion data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Currency Converter</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter amount"
                value={amount}
                onChangeText={setAmount}
            />
            <View style={styles.pickerContainer}>
                <Text>From Currency:</Text>
                <Picker
                    selectedValue={fromCurrency}
                    style={styles.picker}
                    onValueChange={(itemValue) => setFromCurrency(itemValue)}
                >
                    <Picker.Item label="USD" value="USD" />
                    <Picker.Item label="EUR" value="EUR" />
                    <Picker.Item label="GBP" value="GBP" />
                    <Picker.Item label="LKR" value="LKR" />
                    
                </Picker>
                <Text>To Currency:</Text>
                <Picker
                    selectedValue={toCurrency}
                    style={styles.picker}
                    onValueChange={(itemValue) => setToCurrency(itemValue)}
                >
                    <Picker.Item label="USD" value="USD" />
                    <Picker.Item label="EUR" value="EUR" />
                    <Picker.Item label="GBP" value="GBP" />
                    <Picker.Item label="LKR" value="LKR" />
                    
                </Picker>
            </View>
            <Button title="Convert" onPress={handleConversion} />

            {convertedAmount && (
                <Text style={styles.result}>
                    {amount} {fromCurrency} = {convertedAmount} {toCurrency}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 5,
    },
    pickerContainer: {
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    result: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
});
