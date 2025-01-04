import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function StudentLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = () => {
        setError(true); // For demonstration purposes
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>UoV Student Care</Text>
                </View>

                <Image
                    source={require('../assets/Logo.png')}
                    style={styles.logo}
                />

            

                <Text style={styles.loginTitle}>STUDENT LOGIN</Text>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Enter username"
                        placeholderTextColor="#666"
                    />

                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            placeholder="Enter password"
                            placeholderTextColor="#666"
                        />
                        <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                            <Icon
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={20}
                                color="#666"
                                style={styles.eyeIcon}
                            />
                        </TouchableWithoutFeedback>
                    </View>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleLogin}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>

                    {error && (
                        <Text style={styles.errorText}>
                            Please check your username and password
                        </Text>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A1259',
    },
    header: {
        backgroundColor: '#4A1259',
        padding: 40,
        marginHorizontal: -20,
        marginTop: -20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 0,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 30,
    },
    logo: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: 40,
    },
    universityInfo: {
        alignItems: 'center',
        marginBottom: 30,
    },
   
    loginTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 40,
        margin:50
    },
    formContainer: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 25,
    },
    passwordInput: {
        flex: 1,
        padding: 12,
        backgroundColor: 'white',
        fontSize: 16,
    },
    eyeIcon: {
        padding: 12,
    },
    loginButton: {
        backgroundColor: '#4A1259',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        color: '#2563EB',
        textAlign: 'center',
        fontSize: 14,
    },
});