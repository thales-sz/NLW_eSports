import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

import { styles } from './styles';
import Background from '../../components/Background';

const Game = () => {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text>Game</Text>
      </SafeAreaView>
    </Background>
  )
}

export default Game