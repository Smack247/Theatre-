import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
  query: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<Props> = ({ query, onChange, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={onChange}
        placeholder={placeholder ?? 'Search screenshots'}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12
  },
  input: {
    fontSize: 16,
    color: '#0f172a'
  }
});
