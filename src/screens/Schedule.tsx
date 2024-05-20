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
        <View className='flex-1 px-4'>
          {/* Tab  Switcher */}
          <View className='mt-5'>
            <TabSwitcher
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              tabData={[
                {name: 'Warriors', href: '#', current: true},
                {name: 'Valkyries', href: '#', current: false},
              ]}
            />
          </View>

          {/* Schedule */}
          <View className="mt-3" key={selectedTab}>
            {selectedTab === 'Warriors' && (
              <>
              <GameCard
                  broadcast={'NBC Sports'}
                  gameLocation={'vs'}
                  gameTime={'Sun, Feb 25 at 7:00 PM'}
                  gsInitial={'GSW'}
                  gsLogo={require('../assets/images/warriors-logo.png')}
                  gsRecord={'65-0'}
                  opponentInitial={'DEN'}
                  opponentLogo={require('../assets/images/nuggets-logo.png')}
                  opponentRecord={'45-22'}
              />
              </>
            )}
            {selectedTab === 'Valkyries' && (
              <>
              <GameCard
                  broadcast={'NBC Sports'}
                  gameLocation={'@'}
                  gameTime={'Mon, Jun 24 at 4:30 PM'}
                  gsInitial={'GSV'}
                  gsLogo={require('../assets/images/valkyries-logo.png')}
                  gsRecord={'10-4'}
                  opponentInitial={'LVA'}
                  opponentLogo={require('../assets/images/aces-logo.png')}
                  opponentRecord={'7-7'}
              />
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;