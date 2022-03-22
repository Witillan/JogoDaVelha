import { StyleSheet, View, Text } from 'react-native';

const Vencedor = ({ vencedor }) => {
    return (
        <View
            style={styles.boardcell}
        >
            <Text style={{ fontSize: '29vmin' }}>O vencedor é o {vencedor}</Text>
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