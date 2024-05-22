// Featured Events Screen

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';

const FeaturedEvents = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-white dark:bg-black';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View className="flex-1 px-4">

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeaturedEvents;