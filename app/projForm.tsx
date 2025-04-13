import { ThemedText } from '@/components/ThemedText';
import React, { useState } from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import main from '../scripts/call-gemini.js';
import { GoogleGenAI, createUserContent, createPartFromUri } from "@google/genai";
import { set } from 'react-hook-form';



const ai = new GoogleGenAI({ apiKey: process.env.EXPO_PUBLIC_GEMINI_API_TEST });


export default function ProjectForm() {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [currentStatus, setCurrentStatus] = useState("");
    const [languageUsed, setLanguageUsed] = useState("");
    const [showBrainstorm, setShowBrainstorm] = useState(false);
    const [genProjectName, setGenProjectName] = useState("");
    const [genProjectDescription, setGenProjectDescription] = useState("");
    const [genLanguageUsed, setGenLanguageUsed] = useState("");
    
    const handleBrainstorm = () => {
        setShowBrainstorm(prev => !prev);
    }

    function BrainstormSection() {
        const [idea, setIdea] = useState("");
        const [prompt, setPrompt] = useState("");

        async function handleAddIdea() {
            // const cache = await ai.caches.create({
            //     model: modelName,
            //     config: {
            //       contents: createUserContent(createPartFromUri(doc.uri, doc.mimeType)),
            //       systemInstruction: "You are an expert analyzing transcripts.",
            //     },
            // });
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: prompt,
                config: {
                    systemInstruction: "You are a helpful assistant that brainstorms project ideas for a beginner. Generate only one idea at a time. Output the following ideas in a concise manner. [STRICT] Use only this format to output: 'Project Name, Project Description(DO NOT USE commas in this description as the output needs to be parsed), Suggest Coding Language'. Suggest different ideas for each request.",
                },
            });
            const out = response.text ?? "No content available";
            const parts = out.split(',');
            console.log("Response:", out);
            // Check if we have at least three parts
            if (parts.length >= 3) {
                setGenProjectName(parts[0].trim());
                setGenProjectDescription(parts[1].trim());
                setGenLanguageUsed(parts[2].trim());
            } else {
              console.warn("Unexpected response format:", out);
            }
            
            Alert.alert(genProjectName);


        }

        return (
            <View style={formStyles.BrainstormSection}>
                <TextInput
                    style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
                    value={prompt}
                    onChangeText={setPrompt}
                    placeholder='Brainstorm a project idea'
                />
                <Button title="Add Idea" onPress={() => {handleAddIdea()}} />
                <Text>{idea}</Text>
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
                        placeholder={(genProjectName!== null) ? genProjectName : "Enter project name"}
                        value={(genProjectName!== null) ? genProjectName : projectName}
                        onChangeText={setProjectName}
                    />
                    <Text>Project Description</Text>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
                        placeholder={(genProjectDescription!== null) ? genProjectDescription : "Enter project description"}
                        value={(genProjectDescription!== null) ? genProjectDescription : projectDescription}
                        multiline
                        onChangeText={setProjectDescription}
                    />
                    <Text>Github Link</Text>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
                        placeholder="Enter Github link"
                        onChangeText={setGithubLink}
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
                        placeholder={(genLanguageUsed!== null) ? genLanguageUsed : "Enter coding language used"}
                        onChangeText={setLanguageUsed}
                        value={(genLanguageUsed!== null) ? genLanguageUsed : languageUsed}
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
        flexDirection: "row" as "row",
        justifyContent: "space-between" as "space-between",
    },
    BrainstormSection: {
        paddingVertical: 50,
    },
    formContainer: {
        marginTop: 20,
        marginBetween: 20
    }
};