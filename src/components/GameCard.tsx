// Game Card Component

import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface GameCardProps {
  gsLogo: ImageSourcePropType;
  gsInitial: string;
  gsRecord: string;
  opponentLogo: ImageSourcePropType;
  opponentInitial: string;
  opponentRecord: string;
  broadcast: string;
  gameLocation: string;
  gameTime: string;
}

const GameCard = ({ gsLogo, gsInitial, gsRecord, opponentLogo, opponentInitial, opponentRecord, broadcast, gameLocation, gameTime }: GameCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View className='flex bg-secondary shadow-md rounded-md py-8 px-5'>
      <View className='mb-5'>
        <Text className='text-primary text-center font-semibold'>{gameTime}</Text>
      </View>
      <View className='flex-row justify-between mb-5'>
        <View className='flex-col items-center'>
          <Image
            source={gsLogo}
            className='w-12 h-12'
          />
          <Text className='text-muted text-md mt-3'>{gsRecord}</Text>
        </View>
        <View className='flex-col mt-1'>
          <Text className='text-primary font-bold text-4xl'>{gsInitial}</Text>
        </View>
        <View className='flex-col mt-3 items-center'>
          <Text className='text-primary font-semibold text-sm'>{gameLocation}</Text>
          <Text className='mt-7 text-muted text-center items-center'>{broadcast}</Text>
        </View>
        <View className='flex-col mt-1'>
          <Text className='text-primary font-bold text-4xl'>{opponentInitial}</Text>
        </View>
        <View className='flex-col items-center'>
          <Image
            source={opponentLogo}
            className='w-12 h-12'
          />
          <Text className='text-muted text-md mt-3'>{opponentRecord}</Text>
        </View>
      </View>
      <View className='flex-row justify-between items-center'>
        <View className='bg-primary rounded-md px-10 py-2'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text className='text-secondary text-sm text-center font-bold p-2'>Buy Tickets</Text>
          </TouchableOpacity>
        </View>
        <View className='bg-primary rounded-md px-10 py-2'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text className='text-secondary text-sm text-center font-bold p-2'>Game Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GameCard;


