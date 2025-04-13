import { View, Image, Button, StyleSheet, StatusBar, Text } from 'react-native';
import { styles as styles1 } from '@/constants/styles';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { SignOutButton } from '../../components/SignOutButton'


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles1.reactLogo}
        />
      }>
      <View style={styles.container}>
        <SignedOut>
        <ThemedView style={styles1.stepContainer}>
          <ThemedText style={{ fontSize: 18, color: 'black' }}>Settings</ThemedText>
        </ThemedView>
        <Button title="Log in with Github" />
        </SignedOut>
        <SignedIn>
          <ThemedView style={styles1.stepContainer}>
            <ThemedText style={{ fontSize: 18, color: 'black' }}>Settings</ThemedText>
          </ThemedView>
          <SignOutButton />
        </SignedIn>
      </View>
    </ParallaxScrollView>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: {'blue': '#A1CEDC', 'dark': '#1D3D47'}['blue'], // Change to 'dark' for dark mode and color can indicate the status of each project
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});