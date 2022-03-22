import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';

import BoardCell from './Components/BoardCell';
import TypeTurn from './Util/TypeTurn';

export default function App() {
  const image = { uri: 'https://apliquefacil.vteximg.com.br/arquivos/ids/156166-1000-1000/papel-de-parede-adesivo-madeira-bege-quarto-relax.jpg?v=636774762025400000' }
  const [turno, setTurn] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState('black')

  const [acumuladorLinhas, setAcumuladorLinhas] = useState([0, 0, 0])
  const [acumuladorColunas, setAcumuladorColunas] = useState([0, 0, 0])
  const [acumuladorDiagonal, setAcumuladorDiagonal] = useState([0, 0])
  const [acumuladorJogadas, setAcumuladorJogadas] = useState(0)

  const [vencedor, setVencedor] = useState('')

  useEffect(() => {
    console.log('Vencedor: ' + vencedor)
  }, [vencedor])

  const getWinner = useCallback((position) => {
    setAcumuladorJogadas(acumuladorJogadas + 1)
    const [linha, coluna] = position

    // Alimenta o acumulador da linha
    acumuladorLinhas[linha] = acumuladorLinhas[linha] + turno

    // Alimenta o acumulador da coluna
    acumuladorColunas[coluna] = acumuladorColunas[coluna] + turno

    // Verifica o vencedor nas linhas
    // Se o valor acumulado na linha for 3, o ganhador é o 'x'
    // Se o valor acumulado na linha for -3, o ganhador é o 'o'
    if (acumuladorLinhas[linha] === 3) {
      setVencedor(TypeTurn.x)
    } else if (acumuladorLinhas[linha] === -3) {
      setVencedor(TypeTurn.o)
    }

    // Verifica o vencedor nas colunas
    // Se o valor acumulado na coluna for 3, o ganhador é o 'x'
    // Se o valor acumulado na coluna for -3, o ganhador é o 'o'
    if (acumuladorColunas[coluna] === 3) {
      setVencedor(TypeTurn.x)
    } else if (acumuladorColunas[coluna] === -3) {
      setVencedor(TypeTurn.o)
    }

    // Verifica o vencedor na diagonal principal
    // Se a linha for igual a coluna estamos na diagonal principal
    if (linha === coluna) {
      // Alimenta a diagonal principal
      acumuladorDiagonal[0] += turno

      // Se o acumulador da diagonal principal for igual a 3, o ganhador é o 'x'
      // Se o acumulador da diagonal principal for igual a -3, o ganhador é o 'o'
      if (acumuladorDiagonal[0] === 3) {
        setVencedor(TypeTurn.x)
      } else if (acumuladorDiagonal[0] === -3) {
        setVencedor(TypeTurn.o)
      }
    }

    // Verifica o vencedor na diagonal secundaria
    // Se a soma da linha com a coluna for igual a 2 estamos na diagonal secundaria
    if ((linha + coluna) == 2) {
      // Alimenta a diagonal secundaria
      acumuladorDiagonal[1] += turno

      // Se o acumulador da diagonal secundaria for igual a 3, o ganhador é o 'x'
      // Se o acumulador da diagonal secundaria for igual a -3, o ganhador é o 'o'
      if (acumuladorDiagonal[1] === 3) {
        setVencedor(TypeTurn.x)
      } else if (acumuladorDiagonal[1] === -3) {
        setVencedor(TypeTurn.o)
      }
    }

    // Se o acumulador das jogadas for igual ou maior que 9, não teve ganhador e o jogo acabou empatado
    if (acumuladorJogadas >= 8)
      setVencedor('Ninguem')
  }, [acumuladorJogadas, setAcumuladorJogadas, setVencedor, acumuladorDiagonal, acumuladorColunas, acumuladorLinhas, turno])

  return (
    <View style={styles.outside}>
      <ImageBackground
        style={styles.outside}
        source={image}
        resizeMode="cover"
      >
        <View style={styles.board}>
          <View style={styles.containerrow}>
            <BoardCell
              turno={turno}
              setTurn={setTurn}
              onPress={() => getWinner([0, 0])}
              style={{ borderTop: 0, borderLeft: 0 }}
            />
            <BoardCell
              turno={turno}
              setTurn={setTurn}
              onPress={() => getWinner([0, 1])}
              style={{ borderTop: 0 }}
            />
            <BoardCell
              turno={turno}
              setTurn={setTurn}
              onPress={() => getWinner([0, 2])}
              style={{ borderTop: 0, borderRight: 0 }}
            />
          </View>
          <View style={styles.containerrow}>
            <BoardCell
              turno={turno}
              setTurn={setTurn}
              onPress={() => getWinner([1, 0])}
              style={{ borderLeft: 0 }}
            />
            <BoardCell
              turno={turno}
              setTurn={setTurn}
              onPress={() => getWinner([1, 1])}
            />
            <BoardCell
              turno={turno}
              setTurn={setTurn}
              onPress={() => getWinner([1, 2])}
              style={{ borderRight: 0 }}
            />
          </View>
          <View style={styles.containerrow}>
            <BoardCell
              turno={turno}
              setTurn={setTurn}
              onPress={() => getWinner([2, 0])}
              style={{ borderBottom: 0, borderLeft: 0 }}
            />
            <BoardCell
              turno={turno}
              setTurn={setTurn}
              onPress={() => getWinner([2, 1])}
              style={{ borderBottom: 0 }}
            />
            <BoardCell
              turno={turno}
              setTurn={setTurn}
              onPress={() => getWinner([2, 2])}
              style={{ borderBottom: 0, borderRight: 0 }}
            />
          </View>
        </View>
      </ImageBackground>
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