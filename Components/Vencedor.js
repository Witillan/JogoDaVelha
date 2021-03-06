import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from 'react-native';

const Vencedor = () => {
    const route = useRoute()
    const navigation = useNavigation()

    return (
        <View
            style={styles.boardcell}
        >
            <Text style={{ fontSize: '10vmin' }}>O vencedor é o {route.params.vencedor === 1 ? 'X' : route.params.vencedor === -1}!</Text>
            <View>
                <Button title='Voltar ao Inicio' onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boardcell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Vencedor