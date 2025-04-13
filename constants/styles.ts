import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 7,
      paddingBottom: 20,
      paddingTop: 20,
    },
    dropdown: {
      width: '85%',
      alignSelf: 'center',
      paddingBottom: 20,
    },
    mainContainer: {
      flex: 1,
      paddingTop: 60,
      paddingBottom: 20,
    },
    stepContainer: {
      fontSize: 10,
      marginBottom: 7,
      alignItems: 'center',
    },
    reactLogo: {
      height: 177,
      width: 289,
      bottom: -1,
      left: -1,
      position: 'absolute'
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 20,
        gap: 7,
    },
    circularProgressContainer: {
        alignItems: 'center',
        paddingTop: 20,
        justifyContent: 'center',
    },
});
