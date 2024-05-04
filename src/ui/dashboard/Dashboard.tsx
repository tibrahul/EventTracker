import React, { useState } from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import ListView from './ListView';
import { events } from '../../constants';
import GridView from './GridView';
import { DisplayType } from '../../types/types';

const Dashboard = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.List);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.listOrGrid}>
        <Text style={styles.text}>Display Type:</Text>
        <TouchableOpacity onPress={() => setDisplayType(DisplayType.List)} style={[styles.button, displayType === DisplayType.List ? styles.buttonSelected : {}]}>
          <Text style={{
            color: displayType === DisplayType.List ? '#FFF' : '#000'
          }}>List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayType(DisplayType.Grid)} style={[styles.button, displayType === DisplayType.Grid ? styles.buttonSelected : {}]}>
          <Text style={{
            color: displayType === DisplayType.Grid ? '#FFF' : '#000'
          }}>Grid</Text>
        </TouchableOpacity>
      </View>
      {displayType === DisplayType.List && <ListView events={events} />}
      {displayType === DisplayType.Grid && <GridView events={events} />}
    </View>
  )
}

export default Dashboard;

const styles = StyleSheet.create({
  listOrGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'flex-end'
  },
  text: {
    color: '#000',
    marginRight: 10
  },
  button: {
    borderWidth: 1,
    padding: 10,
    width: 70,
    alignItems: 'center',
  },
  buttonSelected: {
    backgroundColor: '#52673A',
  }
})