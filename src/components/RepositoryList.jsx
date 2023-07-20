import { FlatList, View } from 'react-native';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';
import {Picker} from '@react-native-picker/picker'

import Item from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import ItemSeparator from './ItemSeparator';

const Sorter = ({order, setOrder, searchQuery, setSearchQuery}) => {
  const onChangeSearch = query => setSearchQuery(query);
  return(
    <View>     
      <Searchbar
        mode='view'
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{justifyContent:'center'}}
      />
    <Picker 
      style={{height:40}}
      selectedValue={order}
      onValueChange={(itemValue, itemIndex) => {setOrder(itemIndex)}}>
      <Picker.Item label="Sort by..."/>
      <Picker.Item label="Latest repositories" value="latest"/>
      <Picker.Item label="Highest rated repositories" value="highestRate"/>
      <Picker.Item label="Lowest rated repositories" value="lowesRate"/>
    </Picker>
    <View style={{height: 10}}/>
    </View>
  )
}



const RepositoryList = () => {
  const [order, setOrder] = useState();
  const [searchQuery, setSearchQuery] = useState('')
  const [value] = useDebounce(searchQuery,1000)

  const { repositories, fetchMore } = useRepositories(order, value, 7);

  const onEndReach = () => {    
    fetchMore();
  }
  return <RepositoryListContainer repositories={repositories} order={order} setOrder={setOrder} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onEndReach={onEndReach} />;
};


export const RepositoryListContainer = ({ repositories, order, setOrder, searchQuery, setSearchQuery, onEndReach }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <Item repository={item} />}
      ListHeaderComponent={<Sorter order={order} setOrder={setOrder} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.2}
    />
  );
};

export default RepositoryList;