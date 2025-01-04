import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { students } from '../data/StudentsDb.js'; // Assuming the students data is in StudentsDb.js

export default function Profile() {
    const student = students[0]; // Replace with dynamic logic if needed

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>UoV Student Care</Text>
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                {/* University Logo */}
                <Image
                    source={require('../assets/Logo.png')}
                    style={styles.universityLogo}
                    resizeMode="contain"
                />

                {/* Profile Section */}
                <View style={styles.profileSection}>
                    <Image
                        source={student.profile_pic}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>{student.name}</Text>
                    <Text style={styles.basicInfo}>Age: {student.age} | Gender: {student.gender}</Text>

                    {/* Contact Information */}
                    <View style={styles.infoSection}>
                        <Text style={styles.sectionTitle}>Contact Information</Text>
                        <Text style={styles.infoText}>Email: {student.email}</Text>
                        <Text style={styles.infoText}>Phone: {student.phone}</Text>
                        <Text style={styles.infoText}>Address: {student.address}</Text>
                    </View>

                    {/* Biological Information */}
                    <View style={styles.infoSection}>
                        <Text style={styles.sectionTitle}>Biological Information</Text>
                        <Text style={styles.infoText}>Gender: {student.gender}</Text>
                        <Text style={styles.infoText}>Age: {student.age}</Text>
                        <Text style={styles.infoText}>Blood Group: {student.blood_group}</Text>
                    </View>
                </View>
            </View>
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
});
