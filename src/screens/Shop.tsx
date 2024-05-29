// Shop Screen

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import { PartnerPresentation, TabSwitcher } from '../components/Components';

const Shop = () => {
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

          {/* Shop */}
          <View className='mt-3' key={selectedTab}>
            {selectedTab === 'Warriors' && (
              <>
                {/* Partner Presentation*/}
                <View className='my-5'>
                  <PartnerPresentation
                    partnerLogo={require('../assets/images/adobe.png')}
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
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;