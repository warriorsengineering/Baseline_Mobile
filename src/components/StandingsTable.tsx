// // Standings Compoenent

// import React from 'react';
// import { View, Image, Text, ScrollView } from 'react-native';
// import { Table, TableWrapper, Row } from 'react-native-table-component';

// const StandingsTable = () => {
//   const tableHead = ['#', 'Team', 'W', 'L', 'PCT', 'GB', 'Conf', 'Div', 'Home', 'Away', 'L10', 'STRK']; // Adjusted headers
//   const WesternConferenceData = [
//       ['1', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['2', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['3', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['4', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['5', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['6', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['7', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['8', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['9', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['10', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['11', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['12', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['13', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['14', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//       ['15', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
//   ];

//   const cellStyle = {
//     padding: 10,
//     alignItems: 'center',
//   };
//   const headerCellStyle = {
//     ...cellStyle,
//     backgroundColor: '#F0F0F0',
//   };
//   return (
//     <View>
//       <Text style={{ fontWeight: 'bold', marginBottom: 10, textAlign: 'left', fontSize: 18 }}>Western Conference</Text>
//       <View style={{ flexDirection: 'row' }}>
//         {/* Static Columns (# and Team) */}
//         <Table borderStyle={{ borderColor: 'transparent' }}>
//           <Row
//             data={tableHead.slice(0, 2)}
//             style={{ height: 40 }}
//             textStyle={{ textAlign: 'center', fontWeight: 'bold' }}
//             widthArr={[10, 80]} // Widths for # and Team columns
//             cellStyle={headerCellStyle}
//           />
//           <TableWrapper style={{ width: 200 }}>
//             {WesternConferenceData.map((rowData, index) => (
//               <Row
//                 key={index}
//                 data={rowData.slice(0, 2)}
//                 style={[
//                   index % 2 && { backgroundColor: 'transparent' },
//                   { height: 50, borderBottomWidth: 1, borderBottomColor: '#ddd' }
//                 ]}
//                 widthArr={[30, 230]} // Widths for # and Team columns
//                 cellStyle={index === 0 ? { ...cellStyle, borderTopWidth: 2, borderTopColor: '#ddd' } : cellStyle}
//                 textStyle={index === 0 ? { fontWeight: 'bold' } : {}}
//               />
//             ))}
//           </TableWrapper>
//         </Table>
//         {/* Scrollable Columns (W, L, PCT, GB) */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <Table borderStyle={{ borderColor: 'transparent' }}>
//             <Row
//               data={tableHead.slice(2)}
//               style={{ height: 40 }}
//               textStyle={{ fontWeight: 'bold', textAlign: 'center' }}
//               widthArr={[20, 60, 45, 50, 80, 70, 80, 70, 70, 70]} // Adjust width for W, L, PCT, GB
//               cellStyle={headerCellStyle}
//             />
//             <TableWrapper style={{ width: '100%' }}>
//               {WesternConferenceData.map((rowData, index) => (
//                 <Row
//                   key={index}
//                   data={rowData.slice(2)}
//                   style={[
//                     index % 2 && { backgroundColor: 'transparent' },
//                     { height: 50, borderBottomWidth: 1, borderBottomColor: '#ddd' }
//                   ]}
//                   widthArr={[40, 40, 60, 55, 80, 73, 70, 80, 70, 70]}  // Match widths with header
//                   cellStyle={index === 0 ? { ...cellStyle, borderTopWidth: 1, borderTopColor: '#ddd' } : cellStyle}
//                 />
//               ))}
//             </TableWrapper>
//           </Table>
//         </ScrollView>
//       </View>
//       <Text style={{ fontWeight: 'bold', marginBottom: 10, textAlign: 'left', fontSize: 18 }}>Eastern Conference</Text>
//       <View style={{ flexDirection: 'row' }}>
//         {/* Static Columns (# and Team) */}
//         <Table borderStyle={{ borderColor: 'transparent' }}>
//           <Row
//             data={tableHead.slice(0, 2)}
//             style={{ height: 40 }}
//             textStyle={{ textAlign: 'center', fontWeight: 'bold' }}
//             widthArr={[10, 80]} // Widths for # and Team columns
//             cellStyle={headerCellStyle}
//           />
//           <TableWrapper style={{ width: 200 }}>
//             {WesternConferenceData.map((rowData, index) => (
//               <Row
//                 key={index}
//                 data={rowData.slice(0, 2)}
//                 style={[
//                   index % 2 && { backgroundColor: 'transparent' },
//                   { height: 50, borderBottomWidth: 1, borderBottomColor: '#ddd' }
//                 ]}
//                 widthArr={[30, 230]} // Widths for # and Team columns
//                 cellStyle={index === 0 ? { ...cellStyle, borderTopWidth: 2, borderTopColor: '#ddd' } : cellStyle}
//                 textStyle={index === 0 ? { fontWeight: 'bold' } : {}}
//               />
//             ))}
//           </TableWrapper>
//         </Table>
//         {/* Scrollable Columns (W, L, PCT, GB) */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <Table borderStyle={{ borderColor: 'transparent' }}>
//             <Row
//               data={tableHead.slice(2)}
//               style={{ height: 40 }}
//               textStyle={{ fontWeight: 'bold', textAlign: 'center' }}
//               widthArr={[20, 60, 45, 50, 80, 70, 80, 70, 70, 70]} // Adjust width for W, L, PCT, GB
//               cellStyle={headerCellStyle}
//             />
//             <TableWrapper style={{ width: '100%' }}>
//               {WesternConferenceData.map((rowData, index) => (
//                 <Row
//                   key={index}
//                   data={rowData.slice(2)}
//                   style={[
//                     index % 2 && { backgroundColor: 'transparent' },
//                     { height: 50, borderBottomWidth: 1, borderBottomColor: '#ddd' }
//                   ]}
//                   widthArr={[40, 40, 60, 55, 80, 73, 70, 80, 70, 70]}  // Match widths with header
//                   cellStyle={index === 0 ? { ...cellStyle, borderTopWidth: 1, borderTopColor: '#ddd' } : cellStyle}
//                 />
//               ))}
//             </TableWrapper>
//           </Table>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };
// export default StandingsTable;

// // // Standings Compoenent

// // import React from 'react';
// // import { View, Image, Text, ScrollView } from 'react-native';
// // import { Table, TableWrapper, Row } from 'react-native-table-component';

// // const StandingsTable: React.FC<{ tabKey: string }> = ({ tabKey }) => {
// //   const tableHead = ['#', 'Team', 'W', 'L', 'PCT', 'GB', 'Conf', 'Div', 'Home', 'Away', 'L10', 'STRK']; // Adjusted headers
  
// //   // Conference Standings
// //   const conferenceData = {
// //     west: [
// //       ['1', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['2', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['3', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['4', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['5', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['6', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['7', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['8', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['9', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['10', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['11', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['12', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['13', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['14', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['15', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //     ],
// //     east: [
// //       ['1', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['2', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['3', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['4', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['5', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['6', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['7', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['8', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['9', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['10', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['11', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['12', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['13', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['14', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['15', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ],
// //     };

// //   // Division Standings
// //   const divisionData = {
// //     west: {
// //       pacific: [
// //       ['1', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['2', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['3', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['4', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['5', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //     ],
// //       northwest: [
// //       ['1', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['2', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['3', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['4', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['5', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //     ],
// //       southwest: [
// //       ['1', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['2', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['3', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['4', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['5', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //     ],
// //     },
// //     east: {
// //       atlantic: [
// //       ['1', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['2', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['3', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['4', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['5', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //     ],
// //       central: [
// //       ['1', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['2', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['3', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['4', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['5', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //     ],
// //       southeast: [
// //       ['1', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['2', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['3', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/nuggets-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['4', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //       ['5', <View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../assets/images/warriors-logo.png')} style={{ width: 40, height: 40 }} /><Text className='ml-3 font-primary'>Nuggets</Text></View>, 65, 25, '0.696', '2.0', '36-13', '12-4', '33-8', '26-15', '6-4', 'L 1'],
// //     ],
// //   },
// // };

// //   // // Choose tableData based on tabKey
// //   // let tableData = [];
// //   // switch (tabKey) {
// //   //   case 'conference':
// //   //     tableData = conferenceData;
// //   //     break;
// //   //   case 'division':
// //   //     tableData = divisionData;
// //   //     break;
// //   //   // case 'inSeasonTournament':
// //   //   //   tableData = inSeasonTournamentData;
// //   //   //   break;
// //   //   // case 'league':
// //   //   //   tableData = leagueData;
// //   //   //   break;
// //   // }

// //   let title = ''; // Initialize title
// //   let data = []; // Initialize data
  
// //   // Determine tableData and title based on tabKey
// //   if (tabKey.startsWith('conference')) {
// //     const conferenceKey = tabKey.split('-')[1]; // Get "west" or "east" from tabKey
// //     title = conferenceKey === 'west' ? 'Western Conference' : 'Eastern Conference';
// //     data = conferenceData[conferenceKey] || [];
// //   } else if (tabKey.startsWith('division')) {
// //     const [, divisionKey] = tabKey.split('-'); // Get division name
// //     title = `${divisionKey.charAt(0).toUpperCase() + divisionKey.slice(1)} Division`; 
// //     const [conference, division] = divisionKey.split('_');
// //     data = divisionData[conference]?.[division] || [];
// //   }

// //   const cellStyle = {
// //     padding: 10,
// //     alignItems: 'center',
// //   };
// //   const headerCellStyle = {
// //     ...cellStyle,
// //     backgroundColor: '#F0F0F0',
// //   };

// //   return (
// //     <View>
// //       <Text style={{ fontWeight: 'bold', marginBottom: 10, textAlign: 'left', fontSize: 18 }}>{title}</Text>
// //       <View style={{ flexDirection: 'row' }}>
// //         {/* Static Columns (# and Team) */}
// //         <Table borderStyle={{ borderColor: 'transparent' }}>
// //           <Row
// //             data={tableHead.slice(0, 2)}
// //             style={{ height: 40 }}
// //             textStyle={{ textAlign: 'center', fontWeight: 'bold' }}
// //             widthArr={[10, 80]} // Widths for # and Team columns
// //             cellStyle={headerCellStyle}
// //           />
// //           <TableWrapper style={{ width: 200 }}>
// //             {tableData.map((rowData, index) => (
// //               <Row
// //                 key={index}
// //                 data={rowData.slice(0, 2)}
// //                 style={[
// //                   index % 2 && { backgroundColor: 'transparent' },
// //                   { height: 50, borderBottomWidth: 1, borderBottomColor: '#ddd' }
// //                 ]}
// //                 widthArr={[30, 230]} // Widths for # and Team columns
// //                 cellStyle={index === 0 ? { ...cellStyle, borderTopWidth: 2, borderTopColor: '#ddd' } : cellStyle}
// //                 textStyle={index === 0 ? { fontWeight: 'bold' } : {}}
// //               />
// //             ))}
// //           </TableWrapper>
// //         </Table>
// //         {/* Scrollable Columns (W, L, PCT, GB) */}
// //         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
// //           <Table borderStyle={{ borderColor: 'transparent' }}>
// //             <Row
// //               data={tableHead.slice(2)}
// //               style={{ height: 40 }}
// //               textStyle={{ fontWeight: 'bold', textAlign: 'center' }}
// //               widthArr={[20, 60, 45, 50, 80, 70, 80, 70, 70, 70]} // Adjust width for W, L, PCT, GB
// //               cellStyle={headerCellStyle}
// //             />
// //             <TableWrapper style={{ width: '100%' }}>
// //               {tableData.map((rowData, index) => (
// //                 <Row
// //                   key={index}
// //                   data={rowData.slice(2)}
// //                   style={[
// //                     index % 2 && { backgroundColor: 'transparent' },
// //                     { height: 50, borderBottomWidth: 1, borderBottomColor: '#ddd' }
// //                   ]}
// //                   widthArr={[40, 40, 60, 55, 80, 73, 70, 80, 70, 70]}  // Match widths with header
// //                   cellStyle={index === 0 ? { ...cellStyle, borderTopWidth: 1, borderTopColor: '#ddd' } : cellStyle}
// //                 />
// //               ))}
// //             </TableWrapper>
// //           </Table>
// //         </ScrollView>
// //       </View>
// //     </View>
// //   );
// // };
// // export default StandingsTable;