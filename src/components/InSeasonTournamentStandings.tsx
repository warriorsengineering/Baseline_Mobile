// In-Season Tournament Standings Compoenent

import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

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
              <Row
                data={tableHead.slice(0, 2)}
                style={{ height: 40 }}
                widthArr={[10, 80]}
                textStyle={{ textAlign: 'center', fontWeight: 'bold' }}
              />
              <TableWrapper style={styles.tableWrapper}>
                {groupData.teams.map((teamData, index) => (
                  <Row
                    key={index}
                    data={teamData.slice(0, 2)}
                    style={[
                      index % 2 ? { backgroundColor: 'transparent' } : undefined,
                      {
                        height: 50,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                      },
                    ]}
                    widthArr={[30, 230]}
                    textStyle={index === 0 ? { fontWeight: 'bold' } : {}}
                  />
                ))}
              </TableWrapper>
            </Table>

            {/* Scrollable Columns (W, L, PCT, GB) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Table borderStyle={{ borderColor: 'transparent' }}>
                <Row
                  data={tableHead.slice(2)}
                  style={{ height: 40 }}
                  widthArr={[40, 60, 45, 70]}
                  textStyle={{ fontWeight: 'bold', textAlign: 'center', paddingLeft: 10 }}
                />
                <TableWrapper style={{ width: '100%' }}>
                  {groupData.teams.map((teamData, index) => (
                    <Row
                      key={index}
                      data={teamData.slice(2)}
                      style={[
                        index % 2 ? { backgroundColor: 'transparent' } : undefined,
                        {
                          height: 50,
                          borderBottomWidth: 1,
                          borderBottomColor: '#ddd',
                          paddingLeft: 15,
                        },
                      ]}
                      widthArr={[50, 50, 60, 70]}
                    />
                  ))}
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>
        </View>
      ))}
      {/* Repeat the same structure for EasterngroupData */}
      {EastGroupData.map((groupData) => (
        <View key={groupData.group}>
          <Text className='font-bold mb-5 mt-5 text-left text-xl'>{groupData.group}</Text>

          <View className='flex flex-row'>
            {/* Static Columns (# and Team) */}
            <Table borderStyle={{ borderColor: 'transparent' }}>
              <Row
                data={tableHead.slice(0, 2)}
                style={{ height: 40 }}
                widthArr={[10, 80]}
                textStyle={{ textAlign: 'center', fontWeight: 'bold' }}
              />
              <TableWrapper style={styles.tableWrapper}>
                {groupData.teams.map((teamData, index) => (
                  <Row
                    key={index}
                    data={teamData.slice(0, 2)}
                    style={[
                      index % 2 ? { backgroundColor: 'transparent' } : undefined,
                      {
                        height: 50,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddd',
                      },
                    ]}
                    widthArr={[30, 230]}
                    textStyle={index === 0 ? { fontWeight: 'bold' } : {}}
                  />
                ))}
              </TableWrapper>
            </Table>

            {/* Scrollable Columns (W, L, PCT, GB) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Table borderStyle={{ borderColor: 'transparent' }}>
                <Row
                  data={tableHead.slice(2)}
                  style={{ height: 40 }}
                  widthArr={[40, 60, 45, 70]}
                  textStyle={{ fontWeight: 'bold', textAlign: 'center', paddingLeft: 10 }}
                />
                <TableWrapper style={{ width: '100%' }}>
                  {groupData.teams.map((teamData, index) => (
                    <Row
                      key={index}
                      data={teamData.slice(2)}
                      style={[
                        index % 2 ? { backgroundColor: 'transparent' } : undefined,
                        {
                          height: 50,
                          borderBottomWidth: 1,
                          borderBottomColor: '#ddd',
                          paddingLeft: 15,
                        },
                      ]}
                      widthArr={[50, 50, 60, 70]}
                    />
                  ))}
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  tableWrapper: {
    width: 200,
    backgroundColor: '#F5F5F5',
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 0 }, // Right side shadow
    shadowOpacity: 0.1,
    shadowRadius: 4.84,
    elevation: 5, // for Android
  }
});

export default InSeasonTournamentStandings;
