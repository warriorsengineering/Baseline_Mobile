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
        <View className='flex-1 px-4'>
          {/* Tab  Switcher */}
          <View className='mt-5'>
            <TabSwitcher
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              tabData={[{ name: 'Warriors', href: '#', current: true }, { name: 'Valkyries', href: '#', current: false }]} />
          </View>
          {/* Standings */}
          <View className='mt-3' key={selectedTab}>
            {selectedTab === 'Warriors' && (
              <>
                {/* Partner Presentation*/}
                <View className='mt-5'>
                  <PartnerPresentation
                    partnerLogo={require('../assets/images/adobe.png')}
                  />
                </View>
                {/* Table Tabs and Standings */}
                <View className='mt-5'>
                  <FlatList
                    horizontal
                    data={NBA}
                    className={'bg-white flex-1'}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        onPress={() => setActiveTableTab(index)}
                        className={`p-2.5 mr-2.5 ${activeTableTab === index ? 'font-bold border-b border-black' : ''
                          }`}
                      >
                        <Text className={`${activeTableTab === index ? 'font-semibold' : 'text-muted'}`}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.key}
                    showsHorizontalScrollIndicator={false}
                  />
                  {/* Conditionally Render Standings Table */}
                  <View className="mt-5">
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
                {/* Partner Presentation*/}
                <View className='mt-5'>
                  <PartnerPresentation
                    partnerLogo={require('../assets/images/kaiser.png')}
                  />
                </View>
                {/* Table Tabs and Standings */}
                <View className="mt-5">
                  <FlatList
                    horizontal
                    data={WNBA}
                    className={'bg-white'}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        onPress={() => setActiveTableTab(index)}
                        className={`p-2.5 mr-2.5 ${activeTableTab === index ? 'font-semibold border-b border-black' : ''
                          }`}
                      >
                        <Text className={`${activeTableTab === index ? 'font-bold' : 'text-muted'}`}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.key}
                    showsHorizontalScrollIndicator={false}
                  />
                  {/* Conditionally Render Standings Table */}
                  <View className="mt-5">
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