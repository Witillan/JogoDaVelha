import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from 'react-native';

const Empate = () => {
    const navigation = useNavigation()

    return (
        <View
            style={styles.boardcell}
        >
            <Button title='Jogar' onPress={() => navigation.navigate('Jogo')} />
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