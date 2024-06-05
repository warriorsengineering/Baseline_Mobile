// Conference Standings Compoenent

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

const ConferenceStandings = () => {
  const tableHead = ['#', 'Team', 'W', 'L', 'PCT', 'GB', 'Conf', 'Div', 'Home', 'Away', 'L10', 'STRK'];
  const ConferenceData = [
    {
      conference: 'Western Conference',
      teams: [
        ['1', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', ' - ', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['2', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['3', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['4', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['5', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['6', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['7', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['8', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['9', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['10', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['11', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['12', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['13', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['14', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['15', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ]
    },
    {
      conference: 'Eastern Conference',
      teams: [
        ['1', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', ' - ', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['2', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['3', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['4', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['5', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['6', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['7', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['8', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['9', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['10', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['11', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['12', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['13', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['14', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
        ['15', <View className='flex flex-row items-center'><Image source={require('../assets/images/warriors-logo.png')} className='w-10 h-10' /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ]
    },
  ];

  return (
    <View>
      {ConferenceData.map((confData) => (
        <View key={confData.conference}>
          <Text className='font-bold mb-5 mt-5 text-left text-xl'>{confData.conference}</Text>
          <View className='flex flex-row'>
            {/* Static Columns (# and Team) */}
            <Table>
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
                {confData.teams.map((teamData, index) => (
                  <StyledRow
                    key={index}
                    data={teamData.slice(0, 2)}
                    className={`h-[50px] border-b ${index % 2 ? '' : 'bg-transparent'} ${index === 9 ? 'border-primary' : 'border-gray-300'}`}
                    widthArr={[30, 230]}
                    textClassName={index === 0 ? 'font-bold' : ''}
                  />
                ))}
              </StyledTableWrapper>
            </Table>
            {/* Scrollable Columns (W, L, PCT, GB, etc.) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Table>
                <StyledRow
                  data={tableHead.slice(2)}
                  className='h-[40px]'
                  widthArr={[40, 60, 60, 55, 80, 70, 80, 70, 70, 70]}
                  textClassName='text-center font-bold pl-[5px]'
                />
                <StyledTableWrapper className='w-full'>
                  {confData.teams.map((teamData, index) => (
                    <StyledRow
                      key={index}
                      data={teamData.slice(2)}
                      className={`h-[50px] border-b pl-[5px] ${index % 2 ? '' : 'bg-transparent'} ${index === 9 ? 'border-black' : 'border-gray-300'}`}
                      widthArr={[30, 70, 50, 55, 80, 73, 70, 80, 70, 70]}
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

export default ConferenceStandings;
