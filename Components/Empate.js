import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from 'react-native';

const Empate = () => {
    const navigation = useNavigation()

    return (
        <View
            style={styles.boardcell}
        >
            <Text style={{ fontSize: '10vmin' }}>Empatou!</Text>
            <View>
                <Button title='Voltar ao Inicio' onPress={() => navigation.navigate('Home')} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    boardcell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Empate