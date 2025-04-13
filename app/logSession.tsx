import { useRouter, useLocalSearchParams } from 'expo-router';
import { styles } from '@/constants/styles';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useForm, Controller, set } from 'react-hook-form';
import CircularProgress from 'react-native-circular-progress-indicator';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import rawData from "../constants/dummydb.json";



export default function logSession() {
    const router = useRouter();
    const options = [
        { label: "Projects", value: "0" },
        { label: "Leetcode", value: "1" },
    ];
    const user = rawData.filter(user => user.userId === 4); // Assuming userId is 1 for demo purposes
    const userProjects = user[0]?.projects?.map(project => ({
        ...project,
        tasks: {
          ...project.tasks,
          completed: project.tasks.completed || [],
        },
    }));
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(null);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles1.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    const projData = userProjects.map((item, index) => ({
        title: item.title || `Item ${index + 1}`,
        id: item.id,
        completedTasks: item.tasks.completed,
        actTasks: item.tasks.active
    }));



    function pForm() {
        function handleButtonPress() {
            if (value === '0') {   // if 'Projects' is selected
                router.push({
                    pathname: './periSession',
                    params: {
                        tasksAct: ProjValue,  //need to derive the selected project
                        proj: "Project", //need to derive the selected project
                        taskList: projData.find(item => item.title === ProjValue)?.actTasks,
                        prevTasks: projData.find(item => item.title === ProjValue)?.completedTasks
                    }
                });
            } else if (value === '1') { // if 'Leetcode' is selected
                router.push({
                    pathname: './periSession',
                    params: {
                        tasksAct: value,
                        proj: "Leetcode", // placeholder for leetcode session
                        taskList: null,
                        prevTasks: null
                    }
                });
            }
        }

        function retStartButton() {
            return (
                <View style={styles.contentContainer}>
                    <Button title="Start Session" onPress={handleButtonPress} />
                </View>
            )

        }

        const [isProject, setIsProject] = useState(false);
        const [ProjValue, setProjValue] = useState(null);

        if (value === '0') { // if 'Projects' is selected

            return (
                <View style={styles.dropdown}>
                    <View style={styles1.container}>
                        <Dropdown
                            style={[styles1.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles1.placeholderStyle}
                            selectedTextStyle={styles1.selectedTextStyle}
                            inputSearchStyle={styles1.inputSearchStyle}
                            iconStyle={styles1.iconStyle}
                            data={projData}
                            search
                            maxHeight={300}
                            labelField="title"
                            valueField="title"
                            placeholder={!isFocus ? 'Select Project' : '...'}
                            searchPlaceholder="Search..."
                            value={ProjValue}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setProjValue(item.title);
                                setIsFocus(false);
                            }}
                        />
                    </View>

                    {retStartButton()}
                </View>
            )
        }
        if (value === '1') { // if 'Leetcode' is selected
            return (
                <View style={styles.dropdown}>
                    {retStartButton()}
                </View>
            )
        }
    }

      // 1) Track time left in state. 3600 = 60 minutes.
    const [timeLeft, setTimeLeft] = useState(300);

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

    return (
        <ThemedView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <ThemedText type="title" style={styles.contentContainer}></ThemedText>
            </View>
            <ThemedView style={styles.circularProgressContainer}>
                <CircularProgress
                    value={timeLeft}
                    inActiveStrokeColor={'black'}
                    inActiveStrokeOpacity={0.1}
                    radius={75}
                    title={'Get Ready!'}
                    titleColor={'black'}
                    progressValueColor={'black'}
                    duration={500}
                />
            </ThemedView>

            <ThemedView style={styles.dropdown}>
                <View style={styles1.container}>
                    <Dropdown
                        style={[styles1.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles1.placeholderStyle}
                        selectedTextStyle={styles1.selectedTextStyle}
                        inputSearchStyle={styles1.inputSearchStyle}
                        iconStyle={styles1.iconStyle}
                        data={options}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                </View>
            </ThemedView>
            <View>
                {pForm()}
            </View>

        </ThemedView>
    );
}


const styles1 = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
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