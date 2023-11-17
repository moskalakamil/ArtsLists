import React from 'react';
import { useT } from '@/utils/useTranslation/useTranslation';
import EntryLayout from '@/features/entry.stack/_components/EntryLayout';
import { useEntryNavigation } from '@/navigation/Entry.Stack';

const Favourites = () => {
  const { t } = useT();

  const navigation = useEntryNavigation();

  return (
    <EntryLayout
      navigation={() => navigation.navigate('Start')}
      iconName={'artistsHistory'}
      titleText={t('artistsHistory')}
      descriptionText={t('artistsHistoryDescription')}
      activeIndex={2}
    />
  );
};

export default Favourites;
