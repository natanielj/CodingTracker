import { View, Image, FlatList, StyleSheet, StatusBar, Text } from 'react-native';
import { styles as styles1 } from '@/constants/styles';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ProjectProps = {title: string}

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles1.reactLogo}
        />
      }>
    <View style={styles1.mainContainer}>
        <View style={styles1.stepContainer}>
            <ThemedText type="title">settings</ThemedText>
        </View>
        <FlatList
                  data={testDictionary}
                  renderItem={({item}) => <Item title={item.title} />}
        />
    </View>
    </ParallaxScrollView>
    );
}

const testDictionary = [
    { id: 1, title: 'Light/Dark Mode' },
    { id: 2, title: 'Goals' },
    { id: 3, title: 'Shenanigans' },
    { id: 4, title: 'Shenanigans' },
    { id: 5, title: 'Shenanigans' },
    { id: 6, title: 'Shenanigans' },
    { id: 7, title: 'Shenanigans' },
    { id: 8, title: 'Shenanigans' },
    { id: 9, title: 'Shenanigans' },
    { id: 10, title: 'Shenanigans' },
];


type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <View>    
        <Text style={styles.title}>{title}</Text>
        <Text>Description for {title}</Text>
    </View>
    <View>
        <IconSymbol size={28} name="chevron.right" color="#000" />
    </View>
  </View>
);

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