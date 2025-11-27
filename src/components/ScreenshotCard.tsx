import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Screenshot } from '../types';

interface Props {
  screenshot: Screenshot;
  onToggleAutoDelete?: (id: string) => void;
}

export const ScreenshotCard: React.FC<Props> = ({ screenshot, onToggleAutoDelete }) => {
  const { title, capturedAt, category, summary, autoDelete } = screenshot;
  const capturedDate = new Date(capturedAt).toLocaleDateString();

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.meta}>
            {capturedDate} • {category}
          </Text>
        </View>
        {onToggleAutoDelete ? (
          <Pressable
            onPress={() => onToggleAutoDelete(screenshot.id)}
            style={[styles.autoDeleteBadge, autoDelete.enabled && styles.autoDeleteBadgeActive]}
          >
            <Text style={[styles.autoDeleteText, autoDelete.enabled && styles.autoDeleteTextActive]}>
              {autoDelete.enabled ? `Auto delete · ${autoDelete.daysUntilDeletion}d` : 'Keep'}
            </Text>
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.summary}>{summary}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a'
  },
  meta: {
    color: '#475569'
  },
  summary: {
    color: '#1e293b',
    lineHeight: 20
  },
  autoDeleteBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#e2e8f0'
  },
  autoDeleteBadgeActive: {
    backgroundColor: '#22c55e'
  },
  autoDeleteText: {
    fontWeight: '700',
    color: '#0f172a'
  },
  autoDeleteTextActive: {
    color: '#f8fafc'
  }
});
