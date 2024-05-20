// Featured Events

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';

const FeaturedEvents = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-white dark:bg-black';
  const [selectedTab, setSelectedTab] = useState('Warriors');

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View className="flex-1 px-4">

          {/* Featured Events */}
          <View className="mt-3" key={selectedTab}>
            {selectedTab === 'Warriors' && (
              <>
              </>
            )}
            {selectedTab === 'Valkyries' && (
              <>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeaturedEvents;