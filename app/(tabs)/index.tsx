import { Image, Platform, Text, View, Button } from 'react-native';
import { styles } from '@/constants/styles';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

import CircularProgress from 'react-native-circular-progress-indicator';

import Timeline from 'react-native-timeline-flatlist'

export default function HomeScreen() {
    const router = useRouter();
    
        // Uncomment the following line to navigate to the log session page on button press
    const handleButtonPress = () => router.push('/logSession');
    return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedView style={styles.mainContainer}>
            <View style={styles.stepContainer}>
                <ThemedText style={{ fontSize: 18, color: 'black' }}>Day X</ThemedText> 
            </View>
            <ThemedView style={styles.contentContainer}>
                <ThemedText type="title">Hello</ThemedText>
                <ThemedText type="title">Coder!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.circularProgressContainer}>
                <CircularProgress
                    value={85}
                    inActiveStrokeColor={'black'}
                    inActiveStrokeOpacity={0.1}
                    radius={75}
                    title={'Progress'}
                    titleColor={'black'}
                    progressValueColor={'black'}
                    duration={500}
                />
            </ThemedView>
            <View style={styles.contentContainer}>
                <Button title="Start Session" onPress={handleButtonPress} />
            </View>
            <ThemedView style={styles.contentContainer}>
                <ThemedText type="title">Recent Activity</ThemedText>
            </ThemedView>   
        <Timeline data={activityData} /> 
        </ThemedView>
    </ParallaxScrollView>
    );
}

const activityData =  [
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
]