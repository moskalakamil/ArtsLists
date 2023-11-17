import React from 'react';
import { useT } from '@/utils/useTranslation/useTranslation';
import EntryLayout from '@/features/entry.stack/_components/EntryLayout';
import { useEntryNavigation } from '@/navigation/Entry.Stack';

const Favourites = () => {
  const { t } = useT();

  const navigation = useEntryNavigation();

  return (
    <EntryLayout
      navigation={() => navigation.navigate('ArtistsHistory')}
      iconName={'favourites'}
      titleText={t('favouritesWithArmsReach')}
      descriptionText={t('favouritesWithArmsReachDescription')}
      activeIndex={1}
    />
  );
};

export default Favourites;
