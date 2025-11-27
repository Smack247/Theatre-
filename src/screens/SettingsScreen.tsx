import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const SettingsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Starter preferences to align with the MVP roadmap.</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Cloud backup</Text>
        <Text style={styles.body}>
          Wire this up to a storage provider (iCloud/Google Drive) to sync screenshot metadata
          and user auto-delete schedules.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>AI accuracy</Text>
        <Text style={styles.body}>
          Add a feedback toggle that lets users mark misclassified screenshots. Use it to fine-tune
          category suggestions and improve contextual search.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <Text style={styles.body}>
          Keep the core pipeline on-device by default. Offer an explicit opt-in for cloud-based OCR
          or long-term backup.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc'
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 12
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0f172a'
  },
  subtitle: {
    color: '#475569',
    marginBottom: 8
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#0f172a'
  },
  body: {
    color: '#1e293b',
    lineHeight: 20
  }
});
