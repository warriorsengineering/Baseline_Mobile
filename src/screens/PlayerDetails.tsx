// Player Details Screen

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type PlayerDetailsScreenRouteProp = RouteProp<RootStackParamList, 'PlayerDetails'>;

const PlayerDetails = () => {
  const route = useRoute<PlayerDetailsScreenRouteProp>();
  const { firstName, lastName, position, jerseyNumber } = route.params;

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-white dark:bg-black';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View className="flex-1 px-4">
          <Text className="text-2xl font-bold">{firstName} {lastName}</Text>
          <Text className="text-xl">{position}</Text>
          <Text className="text-xl">Jersey Number: {jerseyNumber}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlayerDetails;