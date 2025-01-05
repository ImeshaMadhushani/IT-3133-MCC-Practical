import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { students } from '../data/StudentsDb.js';

export default function Profile({ route, navigation }) {
    const { user } = route.params;
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        const student = students.find(student => student.id === user.id);
        setSelectedStudent(student);
    }, [user]);

  
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                    accessibilityLabel="Go back"
                >
                    <Icon name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>UoV Student Care</Text>
            </View>

            {/* Main Content */}
            <ScrollView style={styles.content}>
                {/* University Logo */}
                <Image
                    source={require('../assets/Logo.png')}
                    style={styles.universityLogo}
                    resizeMode="contain"
                    accessible
                    accessibilityLabel="University Logo"
                />

                {/* Profile Section */}
                <View style={styles.profileSection}>
                    <Image
                        source={selectedStudent.profile_pic}
                        style={styles.avatar}
                        accessible
                        accessibilityLabel={`${selectedStudent.name}'s profile picture`}
                    />
                    <Text style={styles.name}>{selectedStudent.name}</Text>
                    <Text style={styles.basicInfo}>Age: {selectedStudent.age} | Gender: {selectedStudent.gender}</Text>

                    {/* Contact Information */}
                    <View style={styles.infoSection}>
                        <Text style={styles.sectionTitle}>Contact Information</Text>
                        <Text style={styles.infoText}>Email: {selectedStudent.email}</Text>
                        <Text style={styles.infoText}>Phone: {selectedStudent.phone}</Text>
                        <Text style={styles.infoText}>Address: {selectedStudent.address}</Text>
                    </View>

                    {/* Biological Information */}
                    <View style={styles.infoSection}>
                        <Text style={styles.sectionTitle}>Biological Information</Text>
                        <Text style={styles.infoText}>Gender: {selectedStudent.gender}</Text>
                        <Text style={styles.infoText}>Blood Group: {selectedStudent.blood_group}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        backgroundColor: '#4A1259',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },
    backButton: {
        marginRight: 16,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    universityLogo: {
        width: '100%',
        height: 120,
        marginBottom: 16,
    },
    profileSection: {
        alignItems: 'center',
        marginVertical: 16,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    basicInfo: {
        fontSize: 16,
        color: '#666',
        marginBottom: 16,
    },
    infoSection: {
        width: '100%',
        marginBottom: 16,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 4,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});