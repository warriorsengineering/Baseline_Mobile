// In-Season Tournament Standings Compoenent

import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { remapProps } from 'nativewind';

const StyledRow = remapProps(Row, {
  className: 'style',
  textClassName: 'textStyle',
});

const StyledTableWrapper = remapProps(TableWrapper, {
  className: 'style',
});

const InSeasonTournamentStandings = () => {
  const tableHead = ['#', 'Team', 'W', 'L', 'GB', 'PCT'];
  const WestGroupData = [
    {
      group: 'West Group A',
      teams: [
        ['1', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', ' - ', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['2', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['3', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['4', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['5', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ]
    },
    {
      group: 'West Group B',
      teams: [
        ['1', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', ' - ', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['2', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['3', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['4', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['5', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ]
    },
    {
      group: 'West Group C',
      teams: [
        ['1', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', ' - ', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['2', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['3', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['4', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['5', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ]
    },

  ];
  const EastGroupData = [
    {
      group: 'East Group A',
      teams: [
        ['1', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', ' - ', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['2', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['3', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['4', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['5', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ]
    },
    {
      group: 'East Group B',
      teams: [
        ['1', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', ' - ', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['2', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['3', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['4', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['5', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ]
    },
    {
      group: 'East Group C',
      teams: [
        ['1', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', ' - ', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['2', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['3', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['4', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['5', <View className='flex flex-row items-center'><Image source={require('../assets/images/nuggets-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ]
    },
  ];

  return (
    <View>
      {WestGroupData.map((groupData) => (
        <View key={groupData.group}>
          <Text className='font-bold mb-5 mt-5 text-left text-xl'>{groupData.group}</Text>
          <View className='flex flex-row'>
            {/* Static Columns (# and Team) */}
            <Table borderStyle={{ borderColor: 'transparent' }}>
              <StyledRow
                data={tableHead.slice(0, 2)}
                className='h-[40px]'
                widthArr={[10, 80]}
                textClassName='text-center font-bold'
              />
              <StyledTableWrapper
                className='w-[200px] bg-gray-100'
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 5, height: 0 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4.84,
                  elevation: 5, // for Android
                }}
              >
                {groupData.teams.map((teamData, index) => (
                  <StyledRow
                    key={index}
                    data={teamData.slice(0, 2)}
                    className={`h-[50px] border-b border-gray-300 ${index % 2 ? '' : 'bg-transparent'}`}
                    widthArr={[30, 230]}
                    textClassName={index === 0 ? 'font-bold' : ''}
                  />
                ))}
              </StyledTableWrapper>
            </Table>

            {/* Scrollable Columns (W, L, PCT, GB) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Table borderStyle={{ borderColor: 'transparent' }}>
                <StyledRow
                  data={tableHead.slice(2)}
                  className='h-[40px]'
                  widthArr={[40, 60, 60, 55]}
                  textClassName='text-center font-bold pl-[5px]'
                />
                <StyledTableWrapper className='w-full'>
                  {groupData.teams.map((teamData, index) => (
                    <StyledRow
                      key={index}
                      data={teamData.slice(2)}
                      className={`h-[50px] border-b pl-[5px] border-gray-300 ${index % 2 ? '' : 'bg-transparent'}`}
                      widthArr={[30, 70, 50, 55]}
                      textClassName='text-center pl-[10px]'
                    />
                  ))}
                </StyledTableWrapper>
              </Table>
            </ScrollView>
          </View>
        </View>
      ))}
      {/* Repeat structure for East */}
      {EastGroupData.map((groupData) => (
        <View key={groupData.group}>
          <Text className='font-bold mb-5 mt-5 text-left text-xl'>{groupData.group}</Text>

          <View className='flex flex-row'>
            {/* Static Columns (# and Team) */}
            <Table borderStyle={{ borderColor: 'transparent' }}>
              <StyledRow
                data={tableHead.slice(0, 2)}
                className='h-[40px]'
                widthArr={[10, 80]}
                textClassName='text-center font-bold'
              />
              <StyledTableWrapper
                className='w-[200px] bg-gray-100'
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 5, height: 0 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4.84,
                  elevation: 5, // for Android
                }}
              >
                {groupData.teams.map((teamData, index) => (
                  <StyledRow
                    key={index}
                    data={teamData.slice(0, 2)}
                    className={`h-[50px] border-b border-gray-300 ${index % 2 ? '' : 'bg-transparent'}`}
                    widthArr={[30, 230]}
                    textClassName={index === 0 ? 'font-bold' : ''}
                  />
                ))}
              </StyledTableWrapper>
            </Table>

            {/* Scrollable Columns (W, L, PCT, GB, etc.) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Table borderStyle={{ borderColor: 'transparent' }}>
                <StyledRow
                  data={tableHead.slice(2)}
                  className='h-[40px]'
                  widthArr={[40, 60, 60, 55]}
                  textClassName='text-center font-bold pl-[5px]'
                />
                <StyledTableWrapper className='w-full'>
                  {groupData.teams.map((teamData, index) => (
                    <StyledRow
                      key={index}
                      data={teamData.slice(2)}
                      className={`h-[50px] border-b pl-[5px] border-gray-300 ${index % 2 ? '' : 'bg-transparent'}`}
                      widthArr={[30, 70, 50, 55]}
                      textClassName='text-center pl-[10px]'
                    />
                  ))}
                </StyledTableWrapper>
              </Table>
            </ScrollView>
          </View>
        </View>
      ))}
    </View>
  );
};

export default InSeasonTournamentStandings;
