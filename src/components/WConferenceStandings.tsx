// W Conference Standings Compoenent

import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

const WConferenceStandings = () => {
  const tableHead = ['#', 'Team', 'W', 'L', 'PCT', 'GB', 'Conf', 'Div', 'Home', 'Away', 'L10', 'STRK']; // Adjusted headers
  const ConferenceData = [
    {
    conference: 'Western Conference', 
    teams: [
      ['1', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ['3', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ['5', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ['9', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ['11', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ['12', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
      ['13', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
    ]
  },
  {
  conference: 'Eastern Conference', 
  teams: [
    ['2', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
    ['4', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
    ['6', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
    ['7', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
    ['8', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
    ['10', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
    ['14', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
  ]
},
];

  const cellStyle = {
    padding: 10,
    alignItems: 'center',
  };
  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: '#F0F0F0',
  };
  return (
  <View>
  {ConferenceData.map((confData) => (
    <View key={confData.conference}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 20, textAlign: 'left', fontSize: 18 }}>{confData.conference}</Text>
      <View style={{ flexDirection: 'row' }}>
        {/* Static Columns (# and Team) */}
        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row
            data={tableHead.slice(0, 2)}
            style={{ height: 40 }}
            textStyle={{ textAlign: 'center', fontWeight: 'bold' }}
            widthArr={[10, 80]} // Widths for # and Team columns
            cellStyle={headerCellStyle}
          />
          <TableWrapper style={styles.tableWrapper}>
            {confData.teams.map((teamData, index) => (
              <Row
                key={index}
                data={teamData.slice(0, 2)}
                style={[
                  index % 2 && { backgroundColor: 'transparent' },
                  { height: 50, borderBottomWidth: 1, borderBottomColor: '#ddd' }
                ]}
                widthArr={[30, 230]} // Widths for # and Team columns
                cellStyle={index === 0 ? { ...cellStyle, borderTopWidth: 2, borderTopColor: '#ddd' } : cellStyle}
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
              textStyle={{ fontWeight: 'bold', textAlign: 'center' }}
              widthArr={[50, 60, 50, 50, 80, 70, 80]} // Adjust width for W, L, PCT, GB
              cellStyle={headerCellStyle}
            />
            <TableWrapper style={{ width: '100%' }}>
              {confData.teams.map((teamData, index) => (
                <Row
                  key={index}
                  data={teamData.slice(2)}
                  style={[
                    index % 2 && { backgroundColor: 'transparent' },
                    { height: 50, borderBottomWidth: 1, borderBottomColor: '#ddd' }
                  ]}
                  textStyle={{ textAlign: 'center', paddingLeft: 5 }}
                  widthArr={[50, 50, 60, 55, 80, 73, 70]}  // Match widths with header
                  cellStyle={index === 0 ? { ...cellStyle, borderTopWidth: 1, borderTopColor: '#ddd' } : cellStyle}
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

export default WConferenceStandings;
