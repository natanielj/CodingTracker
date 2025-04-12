import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, Image, FlatList, StyleSheet, StatusBar, Text } from 'react-native';
import data from "../constants/dummydb.json";
import { useGlobalSearchParams } from 'expo-router';
import { Linking } from 'react-native';


export default function ProjDesc() {
    const { userId, desc, id, coding_language, hours_logged, github_link, status } = useGlobalSearchParams()
    return(
        <ThemedView style={styles.mainContainer}>
        <View style={styles.titleContainer}>
            <ThemedText type="title">{userId}</ThemedText>
            <ThemedText type="subtitle">{desc}</ThemedText>
            <ThemedText type="subtitle">Coding Language: {coding_language}</ThemedText>
            <ThemedText type="subtitle">Hours Logged: {hours_logged}</ThemedText>
            <ThemedText type="subtitle">Status: {status}</ThemedText>
            <Text style={{ color: 'blue' }} onPress={() => typeof github_link === 'string' && Linking.openURL(github_link)}>View on GitHub</Text>
        </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: StatusBar.currentHeight || 0,
        paddingHorizontal: 16,
    },
    titleContainer: {
        marginVertical: 20,
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});