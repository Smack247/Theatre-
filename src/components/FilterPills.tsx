import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface FilterPillProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

const FilterPill: React.FC<FilterPillProps> = ({ label, active, onPress }) => (
  <Pressable onPress={onPress} style={[styles.pill, active && styles.pillActive]}>
    <Text style={[styles.pillText, active && styles.pillTextActive]}>{label}</Text>
  </Pressable>
);

interface PillGroupProps {
  options: { label: string; value: string }[];
  activeValue: string | null;
  onChange: (value: string | null) => void;
}

export const FilterPills: React.FC<PillGroupProps> = ({ options, activeValue, onChange }) => {
  return (
    <View style={styles.group}>
      <FilterPill
        label="All"
        active={activeValue === null}
        onPress={() => onChange(null)}
      />
      {options.map((option) => (
        <FilterPill
          key={option.value}
          label={option.label}
          active={activeValue === option.value}
          onPress={() => onChange(option.value)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#e2e8f0'
  },
  pillActive: {
    backgroundColor: '#0ea5e9'
  },
  pillText: {
    color: '#0f172a',
    fontWeight: '600'
  },
  pillTextActive: {
    color: '#f8fafc'
  }
});
