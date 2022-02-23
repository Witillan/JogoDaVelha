import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const BoardCell = ({ style, onFocus, turn }) => {

    const [mark, setMark] = useState('');

    return (
        <TouchableOpacity
            style={[styles.boardcell, style]}
            onPress={() => setMark(turn)}
            onFocus={onFocus}
        >
            <Text style={{ fontSize: '29vmin' }}>{mark}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    boardcell: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'lightgray',
        width: '30vmin',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default BoardCell