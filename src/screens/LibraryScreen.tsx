import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FilterPills } from '../components/FilterPills';
import { ScreenshotCard } from '../components/ScreenshotCard';
import { SearchBar } from '../components/SearchBar';
import { sampleScreenshots } from '../data/sampleScreenshots';
import { ScreenshotCategory } from '../types';

const categoryOptions: { label: string; value: ScreenshotCategory }[] = [
  { label: 'Receipts', value: 'receipts' },
  { label: 'Memes', value: 'meme' },
  { label: 'Directions', value: 'directions' },
  { label: 'Boarding passes', value: 'boarding-pass' },
  { label: 'Conversations', value: 'conversation' },
  { label: 'Other', value: 'other' }
];

export const LibraryScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<ScreenshotCategory | null>(null);
  const [items, setItems] = useState(sampleScreenshots);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesQuery = [item.title, item.summary, item.ocrText, item.tags?.join(' ') ?? '']
        .join(' ')
        .toLowerCase()
        .includes(query.trim().toLowerCase());

      const matchesCategory = categoryFilter === null || item.category === categoryFilter;

      return matchesQuery && matchesCategory;
    });
  }, [items, query, categoryFilter]);

  const handleToggleAutoDelete = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              autoDelete: {
                ...item.autoDelete,
                enabled: !item.autoDelete.enabled
              }
            }
          : item
      )
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Library</Text>
      <Text style={styles.subtitle}>
        Contextual search, fast filters, and one-tap auto-delete keep screenshots tidy.
      </Text>

      <SearchBar query={query} onChange={setQuery} placeholder="Try 'receipt from October'" />

      <FilterPills
        options={categoryOptions}
        activeValue={categoryFilter}
        onChange={(value) => setCategoryFilter(value as ScreenshotCategory | null)}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Matches</Text>
        <Text style={styles.sectionMeta}>{filtered.length} items</Text>
      </View>

      {filtered.map((item) => (
        <ScreenshotCard key={item.id} screenshot={item} onToggleAutoDelete={handleToggleAutoDelete} />
      ))}
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
    paddingVertical: 24
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
    color: '#0f172a'
  },
  subtitle: {
    fontSize: 15,
    color: '#475569',
    marginBottom: 16,
    lineHeight: 22
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700'
  },
  sectionMeta: {
    color: '#475569'
  }
});
