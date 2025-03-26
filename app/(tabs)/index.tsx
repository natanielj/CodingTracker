import { Image, Platform, Text, View, Button } from 'react-native';
import { styles } from '@/constants/styles';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import CircularProgress from 'react-native-circular-progress-indicator';

export default function HomeScreen() {
    const percentage = 66; // Example percentage value for the CircularProgressbar

 return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
        <ThemedView style={styles.contentContainer}>
            <ThemedText type="title">Hello</ThemedText>
            <ThemedText type="title">Coder!</ThemedText>
            <HelloWave />
        </ThemedView>
        <ThemedView style={styles.circularProgressContainer}>
            <CircularProgress
                value={85}
                inActiveStrokeColor={'red'}
                inActiveStrokeOpacity={0.2}
                radius={75}
                title={'Day X'}
                titleColor={'black'}
                progressValueColor={'black'}
                duration={10000}
            />
        </ThemedView>
        <View style={styles.contentContainer}>
            <Button title="Start Session" onPress={() => alert('Button Clicked!')} />
        </View>
    </ParallaxScrollView>
    );
}

