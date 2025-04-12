import { useRouter, useGlobalSearchParams } from 'expo-router';
import { styles } from '@/constants/styles';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useForm, Controller } from 'react-hook-form';
import CircularProgress from 'react-native-circular-progress-indicator';
import React , {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import AntDesign from '@expo/vector-icons/AntDesign';
import Checkbox from 'expo-checkbox';

import Timeline from 'react-native-timeline-flatlist'

export default function periSession() {
    const { tasksAct, proj } = useGlobalSearchParams();

    const router = useRouter();

    const handleButtonPress = () => router.push('/'); // Navigate back to the session screen
    return (
        <ThemedView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <ThemedText type="title" style={styles.contentContainer}>Start Coding!</ThemedText>
            </View>
            <ThemedView style={styles.circularProgressContainer}>
                <CircularProgress
                    value={85}
                    inActiveStrokeColor={'blue'}
                    inActiveStrokeOpacity={0.1}
                    radius={75}
                    title={''}
                    titleColor={'blue'}
                    progressValueColor={'skyblue'}
                    duration={500}
                />
            </ThemedView>
            <View style={styles.contentContainer}>
                <Button title="End Session" onPress={handleButtonPress} />
            </View>
            <Text style={{ fontSize: 18, color: 'black', marginVertical: 10 }}>{proj}</Text>
            <Text style={{ fontSize: 18, color: 'black', marginVertical: 10 }}>{tasksAct}</Text>
        </ThemedView>
    );
}


const styles1 = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 2,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});