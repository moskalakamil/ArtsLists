import React from 'react';
import { useT } from '@/utils/useTranslation/useTranslation';
import EntryLayout from '@/features/entry.stack/_components/EntryLayout';
import { useEntryNavigation } from '@/navigation/Entry.Stack';

const Discover = () => {
  const { t } = useT();

  const navigation = useEntryNavigation();

  return (
    <EntryLayout
      navigation={() => navigation.navigate('Favourites')}
      iconName={'discover'}
      titleText={t('discoverArt')}
      descriptionText={t('discoverArtDescription')}
      activeIndex={0}
    />
  );
};

export default Discover;
