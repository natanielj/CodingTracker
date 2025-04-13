import { View, Image, FlatList, StyleSheet, StatusBar, Text, Button } from 'react-native';
import { styles as styles1 } from '@/constants/styles';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import data from "../../constants/dummydb.json";
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';

export default function TabTwoScreen() {
  const router = useRouter();
  const user = data.filter(user => user.userId === 4); // Assuming userId is 1 for demo purposes

  const handleAddProject = () => {
    router.push('../projForm');
  }

  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles1.reactLogo}
    //     />
    //   }>
    <View style={styles1.mainContainer}>
        <View style={styles1.stepContainer}>
            <ThemedText type="title" style={{paddingBottom: 20 }}>Projects</ThemedText>
            <Button title="Add Project" onPress={() => {handleAddProject()}} />
        </View>
       <FlatList
          data={user[0]?.projects?.map(project => ({
            ...project,
            tasks: {
              ...project.tasks,
              completed: project.tasks.completed || [],
            },
          }))}
          renderItem={({item}) => <Item title={item.title} description={item.description} id={item.id} coding_language={item.coding_language} hours_logged={item.hours_logged} github_link={item.github_link} status={item.status} active={item.tasks.active} completed={item.tasks.completed}/>}
        />
    </View>
    // </ParallaxScrollView>
    );
}



type ItemProps = {title: string, description: string, id: number, coding_language: string, hours_logged: number, github_link: string, status: string, active?: string[], completed?: string[]};
const Item = ({ title, description, id, coding_language, hours_logged, github_link, status, active, completed }: ItemProps) => {
  const router = useRouter();
  const post = useLocalSearchParams();
  const handlePress = () => {
    router.push({
      pathname: '../projDesc',
      params: {
        userId: title,
        desc: description,
        id: id,
        coding_language: coding_language,
        hours_logged: hours_logged,
        github_link: github_link,
        status: status,
        taskList: active,
        prevTasks: completed
      },
    });
  };

  return (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={{fontSize:25, fontWeight: 'bold'}}>{title}</Text>
        <Text style={{ width: 180 }}>{description}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button title="→" onPress={handlePress} />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: {'blue': '#fff', 'dark': '#fff'}['blue'], // Change to 'dark' for dark mode and color can indicate the status of each project
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});