import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';

import Background from '../../components/Background';
import logo from '../../assets/logo-nlw-esports.png';


import { styles } from './styles';
import { THEME } from '../../theme';
import Heading from '../../components/Heading';

interface RouteParams {
  id: string;
  title: string;
  bannerUrl: string;
}

const Game = () => {
  const route = useRoute();
  const { goBack } = useNavigation();
  const game = route.params as RouteParams;

  

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Entypo 
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image 
          source={logo}
          style={styles.logo}/>
          <View style={styles.right} />
        </View>
        <Heading title={game.title} subtitle='Conecte-se e comece a jogar!'/> 
      </SafeAreaView>
    </Background>
  )
}

export default Game