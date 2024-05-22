// Game Card Live Component

import React from 'react';
import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

interface GameCardLiveProps {
  gsScore: number;
  gsName: string;
  gsLogo: ImageSourcePropType;
  opponentScore: number;
  opponentName: string;
  opponentLogo: ImageSourcePropType;
  quarter: string;
  timeRemaining: string;
  broadcast: string;
}

const GameCardLive = ({ gsScore, gsName, gsLogo, opponentScore, opponentName, opponentLogo, quarter, timeRemaining, broadcast }: GameCardLiveProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View className='flex bg-secondary shadow-md rounded-md py-8 px-5'>
      <View className='flex-row justify-between mb-5'>
        <View className='flex-col items-center'>
          <Image
            source={gsLogo}
            className='w-12 h-12'
          />
          <Text className='text-primary font-semibold text-md mt-3'>{gsName}</Text>
        </View>
        <View className='flex-col mt-1'>
          <Text className='text-primary font-bold text-4xl'>{gsScore}</Text>
        </View>
        <View className='flex-col items-center'>
          <Text className='text-red-500 font-bold text-sm'>LIVE</Text>
          <Text className='text-primary text-sm'>{quarter}</Text>
          <Text className='text-primary text-sm'>{timeRemaining}</Text>
          <Text className='text-primary font-semibold'>{broadcast}</Text>
        </View>
        <View className='flex-col mt-1'>
          <Text className='text-primary font-bold text-4xl'>{opponentScore}</Text>
        </View>
        <View className='flex-col items-center'>
          <Image
            source={opponentLogo}
            className='w-12 h-12'
          />
          <Text className='text-primary font-semibold text-md mt-3'>{opponentName}</Text>
        </View>
      </View>
      <View className='flex-row justify-between items-center'>
        <View className='bg-primary rounded-full px-4 py-2 basis-2/3'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text className='text-secondary text-sm text-center font-bold p-2'>Game Details</Text>
          </TouchableOpacity>
        </View>
        <View className='bg-primary rounded-full p-4'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <FontAwesomeIcon icon={faPlay} size={16} color='#FFFFFF' />
          </TouchableOpacity>
        </View>
        <View className='bg-primary rounded-full p-4'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <FontAwesomeIcon icon={faVolumeUp} size={16} color='#FFFFFF' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GameCardLive;
