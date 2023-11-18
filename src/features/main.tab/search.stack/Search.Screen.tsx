import React, { useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import { ArtsList } from '@/features/main.tab/_components/ArtsList';
import { Icon } from '@/assets/Icon';
import { useT } from '@/utils/useTranslation/useTranslation';

const SearchScreen = () => {
  const { t } = useT();

  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      <View
        className={
          'mx-[5%] my-8 justify-center border-b relative border-primary-600 rounded-md'
        }
      >
        <TextInput
          className={'px-14'}
          value={search}
          onChangeText={setSearch}
          placeholder={t('typeHere')}
        />
        <Icon name={'search'} className={'absolute left-4 stroke-black'} />
      </View>
      <ArtsList search={search} hideData={true} />
    </SafeAreaView>
  );
};

export default SearchScreen;
