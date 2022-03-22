import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import TypeTurn from '../Util/TypeTurn';

const BoardCell = ({ style, turno, setTurn, onPress }) => {

    const [mark, setMark] = useState('')

    return (
        <TouchableOpacity
            activeOpacity={.7}
            style={[styles.boardcell, style]}
            onPress={() => {
                setMark(turno)
                if (turno === TypeTurn.x) {
                    setTurn(TypeTurn.o)
                } else if (turno === TypeTurn.o) {
                    setTurn(TypeTurn.x)
                } else {
                    setTurn(TypeTurn.x)
                }
                onPress()
            }}
            disabled={mark != ''}
        >
            <Text style={{ fontSize: '29vmin', color: mark === 1 ? 'red' : (mark === -1 ? 'green' : 'black') }}>{mark === 1 ? 'X' : (mark === -1 ? 'O' : '')}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    boardcell: {
        flex: 1,
        flexDirection: 'column',
        width: '30vmin',
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'transparent',
    }
});

export default BoardCell