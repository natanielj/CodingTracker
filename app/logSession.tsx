import { useRouter } from 'expo-router';
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

export default function logSession() {
    const router = useRouter();
    const options = [  
            {label: "Projects", value: "0"}, 
            {label: "Leetcode", value: "1"}, 
    ];
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

    function pForm() {
        if (value === '0') {
            return <ProjectForm />; // Render ProjectForm if 'Projects' is selected
        }
    }

    const handleButtonPress = () => {
        router.push('/periSession');
        
    }; // Navigate back to the session screen
    return (
        <ThemedView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <ThemedText type="title" style={styles.contentContainer}>Get Ready!</ThemedText>
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
                <Button title="Start Session" onPress={handleButtonPress} />
            </View>
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
            {pForm()}
        </ThemedView>
    );
}

function ProjectForm() {

    const [isProject, setIsProject] = useState(false);
    const [ProjValue, setProjValue] = useState(null);

    return (
        <View style={styles.dropdown}>
            <View style={styles1.container}>
                   <Dropdown
                    style={[styles1.dropdown, isProject && { borderColor: 'blue' }]}
                    placeholderStyle={styles1.placeholderStyle}
                    selectedTextStyle={styles1.selectedTextStyle}
                    inputSearchStyle={styles1.inputSearchStyle}
                    iconStyle={styles1.iconStyle}
                    data={projects}
                    search
                    maxHeight={300}
                    labelField="title"
                    valueField="value"
                    placeholder={!isProject ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={ProjValue}
                    onFocus={() => setIsProject(true)}
                    onBlur={() => setIsProject(false)}
                    onChange={item => {
                        setProjValue(item.value);
                        setIsProject(false);
                    }}
                    />

            </View>
            
        </View>
    );
}

const projects = [
    { time: '09:00', title: 'Project 1', value:"Project 1", description: 'Description for Project 1', tasks: ['Task 1', 'Task 2'] },
    { time: '10:00', title: 'Project 2', value:"Project 2", description: 'Description for Project 2', tasks: ['Task 3', 'Task 4'] },
    { time: '11:00', title: 'Project 3', value:"Project 3", description: 'Description for Project 3', tasks: ['Task 5', 'Task 6'] },
    { time: '12:00', title: 'Project 4', value:"Project 4", description: 'Description for Project 4', tasks: ['Task 7', 'Task 8'] },
];

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