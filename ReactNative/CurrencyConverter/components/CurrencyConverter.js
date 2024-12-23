import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import axios from 'axios';

export default function CurrencyConverter() {
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
                <Picker
                    selectedValue={fromCurrency}
                    style={styles.picker}
                    onValueChange={(itemValue) => setFromCurrency(itemValue)}
                >
                    <Picker.Item label="USD" value="USD" />
                    <Picker.Item label="EUR" value="EUR" />
                    <Picker.Item label="GBP" value="GBP" />
                    {/* Add more currencies */}
                </Picker>
                <Picker
                    selectedValue={toCurrency}
                    style={styles.picker}
                    onValueChange={(itemValue) => setToCurrency(itemValue)}
                >
                    <Picker.Item label="USD" value="USD" />
                    <Picker.Item label="EUR" value="EUR" />
                    <Picker.Item label="GBP" value="GBP" />
                    {/* Add more currencies */}
                </Picker>
            </View>
            <Button title="Convert" onPress={handleConversion} />

            {convertedAmount && (
                <Text style={styles.result}>
                    {amount} {fromCurrency} = {convertedAmount} {toCurrency}
                </Text>
            )}
        </View>
    )
}