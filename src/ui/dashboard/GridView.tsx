import React from 'react'
import { IEvent } from '../../types/types'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { navigate } from '../../route/navigationService'

type GridViewProps = {
  events: IEvent[]
}

type GridItemViewProps = {
  event: IEvent
}

const GridItemView: React.FC<GridItemViewProps> = ({ event }) => {
  const onPressHandle = () => {
    navigate('event-details', {
      id: event.id,
    })
  }
  return (
    <TouchableOpacity onPress={onPressHandle} style={styles.listContainer}>
      <>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View>
          <Text>{event.name}</Text>
          <Text>{event.location}</Text>
          <Text style={{ textTransform: 'capitalize' }}>{event.entry_type}</Text>
        </View>
      </>

    </TouchableOpacity>
  )
}

const GridView: React.FC<GridViewProps> = ({
  events
}) => {
  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {events.map((event: IEvent) => <GridItemView event={event} />)}
    </ScrollView>
  )
}

export default GridView;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 10,
  },
  listContainer: {
    width: (Dimensions.get('window').width - 30) / 2,
    // flex: 1,
    padding: 5,
    alignItems: 'center',
    borderWidth: 1,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 20
  }
})