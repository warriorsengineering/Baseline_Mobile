// Schedule Screen

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import { GameCard, TabSwitcher } from '../components/Components';

const Schedule = () => {
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
          {/* Tab  Switcher */}
          <View className="mt-5">
            <TabSwitcher
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              tabData={[
                {name: 'Warriors', href: '#', current: true},
                {name: 'Valkyries', href: '#', current: false},
              ]}
            />
          </View>

          {/* Game Preview Card */}
          <View className="mt-3 mb-3" key={selectedTab}>
            {selectedTab === 'Warriors' && (
              <>
              <GameCard
                  broadcast={'NBC Sports'}
                  gameLocation={'vs'}
                  gameTime={'Sun, Feb 25 at 7:00 PM'}
                  opponentInitial={'DEN'}
                  opponentLogo={require('../assets/images/nuggets-logo.png')}
                  opponentRecord={'45-22'}
                  warriorsInitial={'GSW'}
                  warriorsLogo={require('../assets/images/warriors-logo.png')}
                  warriorsRecord={'65-0'} valkyriesInitial={''} valkyriesLogo={0} valkyriesRecord={''}              />
              </>
            )}
            {selectedTab === 'Valkyries' && (
              <>
            <GameCard
                  gameTime={'Mon, Jun 24 at 4:30 PM'}
                  gameLocation={'@'}
                  valkyriesLogo={require('../assets/images/valkyries-logo.png')}
                  valkyriesInitial={'GSV'}
                  opponentInitial={'LVA'}
                  valkyriesRecord={'0-0'}
                  opponentRecord={'0-0'}
                  opponentLogo={require('../assets/images/aces-logo.png')}
                  broadcast={'NBC Sports'} warriorsInitial={''} warriorsLogo={0} warriorsRecord={''}            />
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;