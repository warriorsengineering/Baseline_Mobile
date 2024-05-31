// Featured Event Card Component

import React, { useState } from 'react';
import { View, Text, Image, ImageSourcePropType, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

type FeaturedEventCardProps = {
  image: ImageSourcePropType;
  dateTime: string;
  title: string;
  subtitle: string;
  ticketsUrl: string;
  detailsUrl: string;
};

const FeaturedEventCard = ({ image, dateTime, title, subtitle, ticketsUrl, detailsUrl }: FeaturedEventCardProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  const openWebView = (url: string) => {
    setCurrentUrl(url);
    setModalVisible(true);
  };

  return (
    <View className="bg-secondary rounded-md shadow-md">
      <View className="w-full h-48 rounded-t-md overflow-hidden">
        <Image source={image} className="w-full h-full" />
      </View>
      <View className="p-4">
        <Text className="text-muted text-sm">{dateTime}</Text>
        <Text className="text-lg font-bold mt-2">{title}</Text>
        <Text className="text-muted mt-2">{subtitle}</Text>
        <View className="flex-row justify-between items-center mt-4">
          <View className='bg-primary rounded-md flex-1 mr-2'>
            <TouchableOpacity onPress={() => openWebView(ticketsUrl)}>
              <Text className="text-secondary text-sm text-center font-bold p-4">Buy Tickets</Text>
            </TouchableOpacity>
          </View>
          <View className='bg-primary rounded-md flex-1 ml-2'>
            <TouchableOpacity onPress={() => openWebView(detailsUrl)}>
              <Text className="text-secondary text-sm text-center font-bold p-4">Event Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <SafeAreaView style={{ flex: 1 }}>
          <View className="bg-primary w-full p-4 flex-row justify-end">
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text className="text-secondary text-xl font-bold">X Close</Text>
            </TouchableOpacity>
          </View>
          <WebView source={{ uri: currentUrl ?? '' }} style={{ flex: 1 }} />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default FeaturedEventCard;
