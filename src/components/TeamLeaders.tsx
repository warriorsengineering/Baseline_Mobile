// Team Leaders Component

import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

interface TeamLeadersProps {
  seasonYear: string;
  assists: string;
  blocks: string;
  image: ImageSourcePropType;
  points: string;
  rebounds: string;
  steals: string;
  threePercentage: string;
  team: 'warriors' | 'valkyries';
}

const TeamLeaders = ({ seasonYear, assists, blocks, image, points, rebounds, steals, threePercentage, team }: TeamLeadersProps) => {
  const warriorsBorder = 'border-warriors-royal-blue dark:border-black';
  const valkyriesBorder = 'border-valkyries-violet dark:border-black';

  const borderColor = team === 'warriors' ? warriorsBorder : valkyriesBorder;

  return (
    <View className='flex bg-transparent py-8 px-2'>
      <View className='mb-5'>
        <Text className='text-primary text-center font-bold'>{seasonYear} Team Leaders</Text>
      </View>
      <View className='flex-row flex-wrap'>
        <View className={`flex-1 mr-4 border-b-2 ${borderColor}`}>
          <Text className='text-muted mb-2 font-muted'>Points</Text>
          <View className='flex-row justify-between mt-2'>
            <Image
              source={image}
              className='w-16 h-14'
            />
            <View className='ml-4'>
              <Text className='text-primary text-right text-sm'>P. Name</Text>
              <Text className='text-primary text-right font-bold text-xl'>{points} PPG</Text>
            </View>
          </View>
        </View>
        <View className={`flex-1 border-b-2 ${borderColor}`}>
          <Text className='text-muted mb-2 text-right font-muted'>Assists</Text>
          <View className='flex-row-reverse justify-between mt-2'>
            <Image
              source={image}
              className='w-16 h-14'
            />
            <View className='mr-4'>
              <Text className='text-primary text-left text-sm'>P. Name</Text>
              <Text className='text-primary text-left font-bold text-xl'>{assists} APG</Text>
            </View>
          </View>
        </View>
      </View>
      <View className='flex-row mt-5 flex-wrap'>
        <View className={`flex-1 mr-4 border-b-2 ${borderColor}`}>
          <Text className='text-muted mb-2 font-muted'>Rebounds</Text>
          <View className='flex-row justify-between mt-2'>
            <Image
              source={image}
              className='w-16 h-14'
            />
            <View className='ml-4'>
              <Text className='text-primary text-right text-sm'>P. Name</Text>
              <Text className='text-primary text-right font-bold text-xl'>{rebounds} RPG</Text>
            </View>
          </View>
        </View>
        <View className={`flex-1 border-b-2 ${borderColor}`}>
          <Text className='text-muted mb-2 text-right font-muted'>3PT Percentage</Text>
          <View className='flex-row-reverse justify-between mt-2'>
            <Image
              source={image}
              className='w-16 h-14'
            />
            <View className='mr-4'>
              <Text className='text-primary text-left text-sm'>P. Name</Text>
              <Text className='text-primary text-left font-bold text-xl'>{threePercentage}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className='flex-row mt-5 flex-wrap'>
        <View className={`flex-1 mr-4 border-b-2 ${borderColor}`}>
          <Text className='text-muted mb-2 font-muted'>Steals</Text>
          <View className='flex-row justify-between mt-2'>
            <Image
              source={image}
              className='w-16 h-14'
            />
            <View className='ml-4'>
              <Text className='text-primary text-right text-sm'>P. Name</Text>
              <Text className='text-primary text-right font-bold text-xl'>{steals} SPG</Text>
            </View>
          </View>
        </View>
        <View className={`flex-1 border-b-2 ${borderColor}`}>
          <Text className='text-muted mb-2 text-right font-muted'>Blocks</Text>
          <View className='flex-row-reverse justify-between mt-2'>
            <Image
              source={image}
              className='w-16 h-14'
            />
            <View className='mr-4'>
              <Text className='text-primary text-left text-sm'>P. Name</Text>
              <Text className='text-primary text-left font-bold text-xl'>{blocks} BPG</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TeamLeaders;