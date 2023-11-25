import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString(),
  );
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleNamePress = () => {
   
    setShowEasterEgg(true);
  };

  const closeEasterEgg = () => {
    
    setShowEasterEgg(false);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <Text style={styles.title}>About tolistapp</Text>
        <TouchableOpacity onPress={handleNamePress}>
          <Text style={styles.author}>Author: Hartaj Singh Mann</Text>
        </TouchableOpacity>
        <Text style={styles.date}>Current Date: {currentDate}</Text>
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>

      
      <Modal visible={showEasterEgg} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You found the Easter egg!</Text>
            <Button title="Close" onPress={closeEasterEgg} />
          </View>
        </View>
      </Modal>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 10,
    textDecorationLine: 'none', 
  },
  date: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, 
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutScreen;
