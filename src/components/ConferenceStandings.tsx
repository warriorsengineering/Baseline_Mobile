// Conference Standings Compoenent

import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

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
              <Row
                data={tableHead.slice(0, 2)}
                style={{ height: 40 }}
                widthArr={[10, 80]} // Widths for # and Team columns
                textStyle={{ textAlign: 'center', fontWeight: 'bold' }}
              />
              <TableWrapper style={styles.tableWrapper}>
                {confData.teams.map((teamData, index) => (
                  <Row
                    key={index}
                    data={teamData.slice(0, 2)}
                    style={StyleSheet.flatten([
                      index % 2 ? { backgroundColor: 'transparent' } : undefined,
                      {
                        height: 50,
                        borderBottomWidth: 1,
                        borderBottomColor: index === 9 ? '#000' : '#ddd',
                        borderTopColor: '#ddd',
                      },
                    ])}
                    widthArr={[30, 230]} // Widths for # and Team columns
                    textStyle={index === 0 ? { fontWeight: 'bold' } : {}}
                  />
                ))}
              </TableWrapper>
            </Table>
            {/* Scrollable Columns (W, L, PCT, GB) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Table>
                <Row
                  data={tableHead.slice(2)}
                  style={{ height: 40 }}
                  widthArr={[40, 60, 60, 55, 80, 70, 80, 70, 70, 70]} // Adjust width for W, L, PCT, GB
                  textStyle={{ fontWeight: 'bold', textAlign: 'center', paddingLeft: 5 }}
                />
                <TableWrapper style={{ width: '100%' }}>
                  {confData.teams.map((teamData, index) => (
                    <Row
                      key={index}
                      data={teamData.slice(2)}
                      style={StyleSheet.flatten([
                        index % 2 ? { backgroundColor: 'transparent' } : undefined,
                        {
                          height: 50,
                          borderBottomWidth: 1,
                          borderBottomColor: index === 9 ? '#000' : '#ddd',
                          paddingLeft: 5,
                        },
                      ])}
                      widthArr={[30, 70, 50, 55, 80, 73, 70, 80, 70, 70]}  // Match widths with header
                      textStyle={{ textAlign: 'center', paddingLeft: 10 }}
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

export default ConferenceStandings;
