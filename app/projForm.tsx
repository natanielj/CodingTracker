import { ThemedText } from '@/components/ThemedText';
import React, { useState } from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export default function ProjectForm() {

    const [showBrainstorm, setShowBrainstorm] = useState(false);


    const handleBrainstorm = () => {
        setShowBrainstorm(prev => !prev);
    }

    function BrainstormSection() {
        return (
            <View style={formStyles.BrainstormSection}>
                <TextInput
                    style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
                    placeholder="Brainstorm ideas"
                    multiline
                />
                <Button title="Add Idea" onPress={() => {}} />
            </View>
        );
    }

    return (
        <>
            <View style={formStyles.main}>
                <View style={formStyles.titleContainer}>
                    <ThemedText type="title">Project Form</ThemedText>
                    <Button title="Brainstorm" onPress={() => {handleBrainstorm()}} />
                </View>
                {showBrainstorm && <BrainstormSection/>}
                <View style={formStyles.formContainer}>
                    <Text>Project Name</Text>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
                        placeholder="Enter project name"
                    />
                    <Text>Project Description</Text>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
                        placeholder="Enter project description"
                        multiline
                    />
                    <Text>Github Link</Text>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
                        placeholder="Enter Github link"
                    />
                    <Text>Current Status</Text>
                    <Dropdown
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
                        data={[
                            { label: 'In Progress', value: 'in_progress' },
                            { label: 'Completed', value: 'completed' },
                            { label: 'On Hold', value: 'on_hold' }
                        ]}
                        placeholder="Select status"
                        labelField="label"
                        onChange={item => console.log(item.value)}
                        valueField="value"
                    />
                    <Text>Language Used</Text>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
                        placeholder="Enter language used"
                    />
                    <Button title="Submit" onPress={() => {}} />
                </View>
            </View>
        </>
    );
}


const formStyles = {
    main: {
        backgroundColor: '#F5F5F5',
        padding: 40,
        borderRadius: 8,
        // // shadowColor: '#000',
        // // shadowOffset: {
        // //     width: 0,
        // //     height: 2,
        // // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    BrainstormSection: {
        paddingVertical: 50,
    },
    formContainer: {
        marginTop: 20,
        marginBetween: 20
    }
};