import { StyleSheet, Image, Platform } from 'react-native';
import {styles } from '@/constants/styles';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
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
        </ThemedView>
        <ThemedView style={styles.circularProgressContainer}>
 
        </ThemedView>

    </ParallaxScrollView>
    );
}
