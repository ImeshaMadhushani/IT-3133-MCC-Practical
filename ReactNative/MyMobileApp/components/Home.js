import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text variant="headlineLarge">Headline Large</Text>
            <Divider />
            <Text variant="bodyMedium" style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
                Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                Integer in mauris eu nibh euismod gravida.
                Duis ac tellus et risus vulputate vehicula.
                Donec lobortis risus a elit.
                Maecenas malesuada elit lectus felis, malesuada ultricies.
                Curabitur ac leo nunc. Vestibulum est urna, facilisis ut luctus eu, tincidunt eu leo.
                Donec vitae orci ut dolor tempor tincidunt.
                Etiam laoreet condimentum libero, vel suscipit turpis sodales eget.
                Mauris fringilla dolor sit amet purus ultricies, vel fermentum purus consectetur.
                Fusce non ante sapien. Nulla facilisi.
                In sed orci eu orci scelerisque congue.
                Vivamus tincidunt elit sit amet dolor tincidunt, sed gravida nunc vulputate.
                Cras sollicitudin massa non augue vehicula, id feugiat metus aliquet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
                Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                Integer in mauris eu nibh euismod gravida.
                Duis ac tellus et risus vulputate vehicula.
                Donec lobortis risus a elit.
                Maecenas malesuada elit lectus felis, malesuada ultricies.
                Curabitur ac leo nunc. Vestibulum est urna, facilisis ut luctus eu, tincidunt eu leo.
                Donec vitae orci ut dolor tempor tincidunt.
                Etiam laoreet condimentum libero, vel suscipit turpis sodales eget.
                Mauris fringilla dolor sit amet purus ultricies, vel fermentum purus consectetur.
                Fusce non ante sapien. Nulla facilisi.
                In sed orci eu orci scelerisque congue.
                Vivamus tincidunt elit sit amet dolor tincidunt, sed gravida nunc vulputate.
                Cras sollicitudin massa non augue vehicula, id feugiat metus aliquet.
            </Text>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
         
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
        body: {
            padding: 10,
            textAlign: 'justify',
        },
    });

