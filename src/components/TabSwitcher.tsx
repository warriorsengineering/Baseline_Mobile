// Tab Switcher Component

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface TabInfo {
  name: string;
  href: string;
  current?: boolean;
}

interface TabSwitcherProps {
  selectedTab: string;
  setSelectedTab: (tabName: string) => void;
  tabData: TabInfo[];
}

const TabSwitcher = ({ selectedTab, setSelectedTab, tabData }: TabSwitcherProps) => {
  return (
    <View className="flex flex-row gap-x-24 bg-secondary items-center justify-center shadow-md rounded-full py-4 px-5">
      {tabData.map((tab) => (
        <TouchableOpacity key={tab.name} onPress={() => setSelectedTab(tab.name)}>
          <Text
            className={
              tab.name === selectedTab
                ? 'text-primary text-lg font-semibold'
                : 'text-muted font-normal text-lg'
            }
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabSwitcher;