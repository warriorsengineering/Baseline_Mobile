// Logo Cloud Component

import React from 'react';
import { Image, View, Text, ImageSourcePropType, TouchableOpacity, Linking } from 'react-native';

interface LogoCloudProps {
  title: string;
  imageSources: Array<{ source: ImageSourcePropType; link: string }>;
  titleAlignment?: string;
  titleColor?: string;
}

const LogoCloud = ({ title, imageSources, titleAlignment = 'text-center', titleColor = 'text-primary' }: LogoCloudProps) => {
  const handleExternalLink = async (url: string) => {
    await Linking.openURL(url);
  };
  return (
    <View className='flex flex-col items-center justify-center'>
      <Text className={`${titleAlignment} ${titleColor} text-lg font-bold mb-5`}>{title}</Text>
      {imageSources.map(({ source, link }, index) => (
        <View className='w-2/12' key={index}>
          {link ? (
            <TouchableOpacity onPress={() => handleExternalLink(link)}>
              <Image
                source={source}
                className='w-full h-10 mb-8 overflow-visible'
              />
            </TouchableOpacity>
          ) : (
            <Image
              source={source}
              className='w-full h-10 mb-8 overflow-visible'
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default LogoCloud;
