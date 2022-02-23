import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import BoardCell from './Components/BoardCell';
import TypeTurn from './Util/TypeTurn';

export default function App() {

  const [turn, setTurn] = useState('');

  return (
    <View style={styles.outside}>
      <View style={styles.board}>
        <View style={styles.containerrow}>
          <BoardCell
            turn={turn}
            onFocus={() => {
              if (turn === TypeTurn.x) {
                setTurn(TypeTurn.o)
              } else if (turn === TypeTurn.o) {
                setTurn(TypeTurn.x)
              } else {
                setTurn(TypeTurn.x)
              }
            }}
            style={{ borderTop: 0, borderLeft: 0 }}
          />
          <BoardCell
            turn={turn}
            onFocus={() => {
              if (turn === TypeTurn.x) {
                setTurn(TypeTurn.o)
              } else if (turn === TypeTurn.o) {
                setTurn(TypeTurn.x)
              } else {
                setTurn(TypeTurn.x)
              }
            }}
            style={{ borderTop: 0 }}
          />
          <BoardCell
            turn={turn}
            onFocus={() => {
              if (turn === TypeTurn.x) {
                setTurn(TypeTurn.o)
              } else if (turn === TypeTurn.o) {
                setTurn(TypeTurn.x)
              } else {
                setTurn(TypeTurn.x)
              }
            }}
            style={{ borderTop: 0, borderRight: 0 }}
          />
        </View>
        <View style={styles.containerrow}>
          <BoardCell
            turn={turn}
            onFocus={() => {
              if (turn === TypeTurn.x) {
                setTurn(TypeTurn.o)
              } else if (turn === TypeTurn.o) {
                setTurn(TypeTurn.x)
              } else {
                setTurn(TypeTurn.x)
              }
            }}
            style={{ borderLeft: 0 }}
          />
          <BoardCell
            turn={turn}
            onFocus={() => {
              if (turn === TypeTurn.x) {
                setTurn(TypeTurn.o)
              } else if (turn === TypeTurn.o) {
                setTurn(TypeTurn.x)
              } else {
                setTurn(TypeTurn.x)
              }
            }}
          />
          <BoardCell
            turn={turn}
            onFocus={() => {
              if (turn === TypeTurn.x) {
                setTurn(TypeTurn.o)
              } else if (turn === TypeTurn.o) {
                setTurn(TypeTurn.x)
              } else {
                setTurn(TypeTurn.x)
              }
            }}
            style={{ borderRight: 0 }}
          />
        </View>
        <View style={styles.containerrow}>
          <BoardCell
            turn={turn}
            onFocus={() => {
              if (turn === TypeTurn.x) {
                setTurn(TypeTurn.o)
              } else if (turn === TypeTurn.o) {
                setTurn(TypeTurn.x)
              } else {
                setTurn(TypeTurn.x)
              }
            }}
            style={{ borderBottom: 0, borderLeft: 0 }}
          />
          <BoardCell
            turn={turn}
            onFocus={() => {
              if (turn === TypeTurn.x) {
                setTurn(TypeTurn.o)
              } else if (turn === TypeTurn.o) {
                setTurn(TypeTurn.x)
              } else {
                setTurn(TypeTurn.x)
              }
            }}
            style={{ borderBottom: 0 }}
          />
          <BoardCell
            turn={turn}
            onFocus={() => {
              if (turn === TypeTurn.x) {
                setTurn(TypeTurn.o)
              } else if (turn === TypeTurn.o) {
                setTurn(TypeTurn.x)
              } else {
                setTurn(TypeTurn.x)
              }
            }}
            style={{ borderBottom: 0, borderRight: 0 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outside: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    flex: 1,
    flexDirection: 'column',
    width: '100vw',
    maxHeight: '90vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerrow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '80vw',
  }
});