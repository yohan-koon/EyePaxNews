import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
};

export const storeObjectData = async (key, value) => {
  try {
    if (value == null) {
      await AsyncStorage.setItem(key, value);
      return true;
    }
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    return false;
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    return null;
  }
};

export const getObjectData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};
