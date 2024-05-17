// Card Component

import React from 'react';
import { View, Text } from 'react-native';

interface CardProps {
  title: string;
  description: string;
  titleColor?: string;
  descriptionColor?: string;
  backgroundColor?: string;
}

const Card = ({ title, description, titleColor = 'text-primary', descriptionColor = 'text-primary', backgroundColor = 'bg-muted' }: CardProps) => {
  return (
    <View className={`${backgroundColor} rounded-md p-5`}>
      <Text className={`${titleColor} text-lg font-bold mb-1`}>{title}</Text>
      <Text className={`${descriptionColor}`}>{description}</Text>
    </View>
  );
};

export default Card;
