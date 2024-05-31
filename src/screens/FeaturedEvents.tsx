// Featured Events Screen

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import { FeaturedEventCard } from '../components/Components';

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
          {/* Featured Event Card */}
          <View className='mt-5'>
            <FeaturedEventCard
              image={require('../assets/images/janet-jackson-event.png')}
              dateTime={'Wed, Jun 12 at 8:00 PM'}
              title={'Janet Jackson'}
              subtitle={'With Special Guest Nelly'}
              ticketsUrl={'https://www.ticketmaster.com/chase-center-tickets-san-francisco/venue/230012'}
              detailsUrl={'https://www.chasecenter.com/events/janet-jackson-20240612'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeaturedEvents;