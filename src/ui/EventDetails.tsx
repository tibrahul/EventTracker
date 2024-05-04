import React from 'react'
import { Image, Text, View } from 'react-native'
import { events } from '../constants';
import { IEvent } from '../types/types';

const EventDetails = (props: any) => {
  const { id } = props.route.params;
  const event: IEvent = events[id];

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Image source={{ uri: event.image }} style={{
        height: 200,
        width: 200
      }} />
      <Text>{event.name}</Text>
      <Text>{event.location}</Text>
      <Text style={{ textTransform: 'capitalize' }}>{event.entry_type}</Text>
    </View>
  )
}

export default EventDetails