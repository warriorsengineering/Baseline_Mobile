// Player Card Component

import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

interface PlayerCardProps {
  image: ImageSourcePropType;
  jerseyNumber: number;
  firstName: string;
  lastName: string;
  position: string;
}

const PlayerCard = ({ image, jerseyNumber, firstName, lastName, position }: PlayerCardProps) => {
  return (
    <View className='flex-row items-center bg-secondary shadow-md rounded-md p-5'>
      <View className='relative'>
        <View className='absolute top-[-10px] left-0'>
          <Text className='text-gray-200 text-[38px] font-bold'>{jerseyNumber}</Text>
        </View>
        <Image
          source={image}
          className='-mb-5'
        />
      </View>
      <View>
        <Text className='text-xl font-bold'>{firstName} {lastName}</Text>
        <Text className='text-lg text-muted'>{position}</Text>
      </View>
    </View>
  );
};

export default PlayerCard;
