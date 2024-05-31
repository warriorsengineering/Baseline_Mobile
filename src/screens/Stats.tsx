// Stats Screen

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import { GameCardLive, PartnerPresentation, TabSwitcher, TeamLeaders } from '../components/Components';

const Stats = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-white dark:bg-black';
  const [selectedTab, setSelectedTab] = useState('Warriors');

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className={backgroundStyle}>
        <View className='flex-1 px-4'>
          {/* Tab  Switcher */}
          <View className='mt-5'>
            <TabSwitcher
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              tabData={[{ name: 'Warriors', href: '#', current: true }, { name: 'Valkyries', href: '#', current: false }]} />
          </View>

          {/* Stats*/}
          <View className='mt-3' key={selectedTab}>
            {selectedTab === 'Warriors' && (
              <>
                {/* Partner Presentation*/}
                <View className='my-5'>
                  <PartnerPresentation
                    partnerLogo={require('../assets/images/adobe.png')}
                  />
                </View>
                <TeamLeaders
                  seasonYear='2023-24'
                  assists={'7.2'}
                  blocks={'0.9'}
                  image={require('../assets/images/player-img.png')}
                  points={'28.1'}
                  rebounds={'6.7'}
                  steals={'1.3'}
                  threePercentage={'42.1%'}
                  team='warriors'
                />
              </>
            )}
            {selectedTab === 'Valkyries' && (
              <>
                <View className='my-5'>
                  <PartnerPresentation
                    partnerLogo={require('../assets/images/kaiser.png')}
                  />
                </View>
                <TeamLeaders
                  seasonYear='2023-24'
                  assists={'7.3'}
                  blocks={'2.2'}
                  image={require('../assets/images/w-player-img.png')}
                  points={'22.8'}
                  rebounds={'9.5'}
                  steals={'1.5'}
                  threePercentage={'44.9%'}
                  team='valkyries'
                />
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stats;