// Roster Screen

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import { PartnerPresentation, PlayerCard, TabSwitcher } from '../components/Components';

const Roster = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-secondary dark:bg-primary';
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

          {/* Player Card */}
          <View className='mt-3' key={selectedTab}>
            {selectedTab === 'Warriors' && (
              <>
                {/* Partner Presentation*/}
                <View className='my-5'>
                  <PartnerPresentation
                    partnerLogo={require('../assets/images/adobe.png')}
                  />
                </View>
                <View className='mt-3'>
                  <PlayerCard
                    image={require('../assets/images/player-img.png')}
                    jerseyNumber={30}
                    firstName={'Player'}
                    lastName={'Name'}
                    position={'Position'}
                  />
                </View>
                <View className='mt-3'>
                  <PlayerCard
                    image={require('../assets/images/player-img.png')}
                    jerseyNumber={11}
                    firstName={'Player'}
                    lastName={'Name'}
                    position={'Position'}
                  />
                </View>
                <View className='mt-3'>
                  <PlayerCard
                    image={require('../assets/images/player-img.png')}
                    jerseyNumber={23}
                    firstName={'Player'}
                    lastName={'Name'}
                    position={'Position'}
                  />
                </View>
                <View className='mt-3'>
                  <PlayerCard
                    image={require('../assets/images/player-img.png')}
                    jerseyNumber={22}
                    firstName={'Player'}
                    lastName={'Name'}
                    position={'Position'}
                  />
                </View>
              </>
            )}
            {selectedTab === 'Valkyries' && (
              <>
                {/* Partner Presentation*/}
                <View className='my-5'>
                  <PartnerPresentation
                    partnerLogo={require('../assets/images/kaiser.png')}
                  />
                </View>
                <View className='mt-3'>
                  <PlayerCard
                    image={require('../assets/images/w-player-img.png')}
                    jerseyNumber={10}
                    firstName={'W Player'}
                    lastName={'Name'}
                    position={'Position'}
                  />
                </View>
                <View className='mt-3'>
                  <PlayerCard
                    image={require('../assets/images/w-player-img.png')}
                    jerseyNumber={23}
                    firstName={'W Player'}
                    lastName={'Name'}
                    position={'Position'}
                  />
                </View>
                <View className='mt-3'>
                  <PlayerCard
                    image={require('../assets/images/w-player-img.png')}
                    jerseyNumber={33}
                    firstName={'W Player'}
                    lastName={'Name'}
                    position={'Position'}
                  />
                </View>
                <View className='mt-3'>
                  <PlayerCard
                    image={require('../assets/images/w-player-img.png')}
                    jerseyNumber={8}
                    firstName={'W Player'}
                    lastName={'Name'}
                    position={'Position'}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Roster;
