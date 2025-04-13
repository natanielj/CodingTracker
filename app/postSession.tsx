import { useRouter, useGlobalSearchParams } from 'expo-router';
import { styles } from '@/constants/styles';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useForm, Controller } from 'react-hook-form';
import CircularProgress from 'react-native-circular-progress-indicator';
import React , {useState} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
// import CheckList from '@/components/CheckList';
import Checkbox from 'expo-checkbox';


export default function periSession() {
    // const { tasksAct, proj, taskList, prevTasks } = useGlobalSearchParams();


    const router = useRouter();

    const handleButtonPress = () => router.push('/'); // Navigate back to the session screen
    return (
        <ThemedView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <ThemedText type="title" style={styles.contentContainer}>Congrats!</ThemedText>
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
                <Button title="Continue" onPress={handleButtonPress} />
            </View>
            

            {/* <ThemedText style={{ fontSize: 18, color: 'black', marginVertical: 10 }}>{proj}: {tasksAct}</ThemedText>
            <ThemedText style={{ fontSize: 18, color: 'black', marginVertical: 10 }}>Active Task List:</ThemedText>
            <View>
                {(typeof taskList === 'string' ? taskList.split(',') : taskList || []).map((task, index) => (
                    <ThemedText key={index} style={{ fontSize: 16, color: 'black', marginVertical: 5 }}>
                        {task}
                    </ThemedText>
                ))}
            </View>
            <Text style={{ fontSize: 18, color: 'black', marginVertical: 10 }}>Previous Completed Tasks:</Text>
            <View>
                {(typeof prevTasks === 'string' ? prevTasks.split(',') : prevTasks || []).map((task, index) => (
                    <Text key={index} style={{ fontSize: 16, color: 'black', marginVertical: 5 }}>
                        {task}
                    </Text>
                ))}
            </View> */}
            
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