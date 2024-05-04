import React from 'react'
import { IEvent } from '../../types/types'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { navigate } from '../../route/navigationService'

type ListViewProps = {
  events: IEvent[]
}

type ListItemViewProps = {
  event: IEvent
}

const ListItemView: React.FC<ListItemViewProps> = ({ event }) => {
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
          <Text>{event.entry_type}</Text>
        </View>
      </>

    </TouchableOpacity>
  )
}

const ListView: React.FC<ListViewProps> = ({
  events
}) => {
  return (
    <FlatList
      data={events}
      renderItem={({ item }) => <ListItemView event={item} />}
    />
  )
}

export default ListView;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 20
  }
})