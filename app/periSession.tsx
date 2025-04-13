import { useRouter, useGlobalSearchParams } from 'expo-router';
import { styles } from '@/constants/styles';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useForm, Controller } from 'react-hook-form';
import CircularProgress from 'react-native-circular-progress-indicator';
import React , {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
// import CheckList from '@/components/CheckList';
import Checkbox from 'expo-checkbox';


export default function periSession() {
    const { tasksAct, proj, taskList, prevTasks } = useGlobalSearchParams();
    
    const router = useRouter();

      // 1) Track time left in state. 3600 = 60 minutes.
    const [timeLeft, setTimeLeft] = useState(3600);

    // 2) Decrement every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
    }, 1000);


    // Cleanup interval on unmount
    return () => clearInterval(timer);
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;


    const handleButtonPress = () => router.push('/postSession'); // Navigate back to the session screen
    return (
        <ThemedView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <ThemedText type="title" style={styles.contentContainer}>Start Coding!</ThemedText>
            </View>
            <ThemedView style={styles.circularProgressContainer}>
                <CircularProgress
                    value={timeLeft}
                    maxValue={3600}
                    title={`${minutes}:${seconds.toString().padStart(2, '0')}`}
                    inActiveStrokeColor={'blue'}
                    inActiveStrokeOpacity={0.1}
                    radius={75}
                    titleColor={'blue'}
                    progressValueColor={'skyblue'}
                    showProgressValue={false}
                />
            </ThemedView>
            <View style={styles.contentContainer}>
                <Button title="End Session" onPress={handleButtonPress} />
            </View>
            <ThemedText style={{ fontSize: 25, color: 'black', marginVertical: 10 , fontWeight: 'bold', textAlign: 'center'}}>{proj}: {tasksAct}</ThemedText>
            <ThemedText style={{ fontSize: 18, color: 'black', marginVertical: 10, 
    fontWeight: 'bold',
    textAlign: 'center' }}>Active Task List:</ThemedText>
            <View>
                {(typeof taskList === 'string' ? taskList.split(',') : taskList || []).map((task, index) => (
                    <ThemedText key={index} style={{ fontSize: 16, color: 'black', marginVertical: 5, textAlign: 'center' }}>
                        {task}
                    </ThemedText>
                ))}
            </View>
            <Text style={{ fontSize: 18, color: 'black', marginVertical: 10 , fontWeight: 'bold', textAlign: 'center'}}>Previous Completed Tasks:</Text>
            <View>
                {(typeof prevTasks === 'string' ? prevTasks.split(',') : prevTasks || []).map((task, index) => (
                    <Text key={index} style={{ fontSize: 16, color: 'black', marginVertical: 5 , textAlign: 'center'}}>
                        {task}
                    </Text>
                ))}
            </View>
            
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