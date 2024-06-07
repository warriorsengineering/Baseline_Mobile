// Standings Screen

import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { ConferenceStandings, DivisionStandings, InSeasonTournamentStandings, PartnerPresentation, TabSwitcher, WConferenceStandings } from '../components/Components';

interface Tab {
  label: string;
  key: string;
}

const NBA: Tab[] = [
  { label: 'Conference', key: 'conference' },
  { label: 'Division', key: 'division' },
  { label: 'In-Season Tournament', key: 'in-season' },
  { label: 'League', key: 'league' },
];

const WNBA: Tab[] = [
  { label: 'Conference', key: 'conference' },
  { label: "Commissioner's Cup", key: 'commissioners-cup' },
  { label: 'League', key: 'league' },
];

const Standings = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-[#F5F5F5] dark:bg-black';
  const [selectedTab, setSelectedTab] = useState('Warriors');
  const [activeTableTab, setActiveTableTab] = useState(0);

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className={backgroundStyle}>
        <View className='flex-1'>
          <View className='px-4'>
            {/* Tab Switcher */}
            <View className='mt-5'>
              <TabSwitcher
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                tabData={[{ name: 'Warriors', href: '#', current: true }, { name: 'Valkyries', href: '#', current: false }]} />
            </View>
          </View>
          {/* Standings */}
          <View key={selectedTab}>
            {selectedTab === 'Warriors' && (
              <>
                {/* Partner Presentation */}
                <View className='px-4 mt-5'>
                  <PartnerPresentation
                    partnerLogo={require('../assets/images/adobe.png')}
                  />
                </View>
                {/* Table Tabs and Standings */}
                <View className='mt-5'>
                  <View className='w-full'>
                    <FlatList
                      horizontal
                      data={NBA}
                      className='bg-secondary'
                      renderItem={({ item, index }) => (
                        <TouchableOpacity
                          onPress={() => setActiveTableTab(index)}
                          className={`p-3 mr-3 ${activeTableTab === index ? 'ml-4 border-b border-primary' : ''
                            }`}
                        >
                          <Text className={`${activeTableTab === index ? 'font-semibold' : 'text-muted'}`}>{item.label}</Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item) => item.key}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                  {/* Conditionally Render Standings Table */}
                  <View className='px-4 mt-5'>
                    {activeTableTab === 0 ? (
                      <ConferenceStandings />
                    ) : activeTableTab === 1 ? (
                      <DivisionStandings />
                    ) : (
                      <InSeasonTournamentStandings />
                    )}
                  </View>
                </View>
              </>
            )}
            {selectedTab === 'Valkyries' && (
              <>
                {/* Partner Presentation */}
                <View className='px-4 mt-5'>
                  <PartnerPresentation
                    partnerLogo={require('../assets/images/kaiser.png')}
                  />
                </View>
                {/* Table Tabs and Standings */}
                <View className='mt-5'>
                  <View className='w-full'>
                    <FlatList
                      horizontal
                      data={WNBA}
                      className='bg-secondary'
                      renderItem={({ item, index }) => (
                        <TouchableOpacity
                          onPress={() => setActiveTableTab(index)}
                          className={`p-3 mr-3 ${activeTableTab === index ? 'ml-4 border-b border-primary' : ''
                            }`}
                        >
                          <Text className={`${activeTableTab === index ? 'font-semibold' : 'text-muted'}`}>{item.label}</Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item) => item.key}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                  {/* Conditionally Render Standings Table */}
                  <View className='px-4 mt-5'>
                    <WConferenceStandings />
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Standings;
