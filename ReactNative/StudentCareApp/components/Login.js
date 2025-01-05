import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { students } from '../data/StudentsDb.js';
import { useNavigation } from '@react-navigation/native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default function StudentLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const navigation = useNavigation();

    const handleLogin = () => {
        const user = students.find(
            student => student.username === username && student.password === password
        );

        if (user) {
            setError(false);
            // Perform successful login actions, e.g., navigate to the dashboard
            navigation.navigate('Home', { screen: 'Profile', params: { user } });
            console.log('Login successful for:', user.name);
        } else {
            setError(true); // Show error message
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding" // Adjusts for iOS and Android keyboard behavior
        >
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                keyboardShouldPersistTaps="handled" // Ensures tapping outside the input fields dismisses the keyboard
            >
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
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Set the default background color to white or your choice
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,
    },
    header: {
        backgroundColor: '#4A1259', // Set background color of the header
        padding: height * 0.05,
        marginHorizontal: -50,
        marginTop: -20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: width * 0.05,
        margin: 0,
    },
    headerTitle: {
        fontSize: width * 0.05, // Relative font size
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 30,
    },
    logo: {
        width: '100%',
        height: height * 0.1, // Relative height
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: height * 0.05,
    },
    loginTitle: {
        fontSize: width * 0.06, // Relative font size
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: height * 0.05,
    },
    formContainer: {
        width: '100%',
    },
    label: {
        fontSize: width * 0.04, // Relative font size
        color: '#666',
        marginBottom: height * 0.02,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: width * 0.03, // Relative padding
        marginBottom: height * 0.03, // Relative margin
        fontSize: width * 0.04, // Relative font size
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: height * 0.03,
    },
    passwordInput: {
        flex: 1,
        padding: width * 0.03, // Relative padding
        backgroundColor: 'white',
        fontSize: width * 0.04, // Relative font size
    },
    eyeIcon: {
        padding: width * 0.03, // Relative padding
    },
    loginButton: {
        backgroundColor: '#4A1259',
        padding: width * 0.04, // Relative padding
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: height * 0.02,
    },
    loginButtonText: {
        color: 'white',
        fontSize: width * 0.04, // Relative font size
        fontWeight: 'bold',
    },
    errorText: {
        color: '#2563EB',
        textAlign: 'center',
        fontSize: width * 0.04, // Relative font size
    },
});
