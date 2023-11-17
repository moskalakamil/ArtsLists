import React from 'react';
import { useT } from '@/utils/useTranslation/useTranslation';
import EntryLayout from '@/features/entry.stack/_components/EntryLayout';
import { useShowEntryScreens } from '@/store/showEntryScreens';

const Favourites = () => {
  const { t } = useT();

  const { setShowEntryScreen } = useShowEntryScreens();

  return (
    <EntryLayout
      navigation={() => setShowEntryScreen(false)}
      iconName={'start'}
      titleText={t('start')}
      descriptionText={t('startDescription')}
      activeIndex={3}
      buttonText={t('letsStart')}
    />
  );
};

export default Favourites;
