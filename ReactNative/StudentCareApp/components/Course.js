import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';  // Import Feather icon library for the back arrow

// Import the courses data
import { courses } from '../data/StudentsDb';

const Course = ({ courseId = 1, navigation }) => {
    // Get the course information
    const course = courses.find(c => c.id === courseId);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header with Back Arrow */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}  // Navigate back
                    accessible
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

                {/* Course Section */}
                <View style={styles.courseSection}>
                    <Text style={styles.courseName}>{course.name}</Text>
                    <Text style={styles.basicInfo}>
                        Code: {course.course_code} | Dept: {course.department}
                    </Text>

                    {/* Course Information */}
                    <View style={styles.infoSection}>
                        <Text style={styles.sectionTitle}>Course Information</Text>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Code:</Text>
                            <Text style={styles.infoValue}>{course.course_code}</Text>
                        </View>

                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Department:</Text>
                            <Text style={styles.infoValue}>{course.department}</Text>
                        </View>

                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Duration:</Text>
                            <Text style={styles.infoValue}>{course.duration}</Text>
                        </View>

                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Description:</Text>
                            <Text style={styles.infoValue}>{course.description}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

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
    courseSection: {
        marginVertical: 16,
        alignItems: 'center',
    },
    courseName: {
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
    infoItem: {
        marginBottom: 12,
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    infoValue: {
        fontSize: 16,
        color: '#333',
    },
});

export default Course;
