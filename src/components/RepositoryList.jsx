import { FlatList, View, StyleSheet, Picker } from 'react-native';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

import Item from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const [order, setOrder] = useState();
  const [searchQuery, setSearchQuery] = useState('')
  const [value] = useDebounce(searchQuery,1000)

  const { repositories } = useRepositories(order, value);

  const repositoryNodes = repositories
  ? repositories.edges.map((edge) => edge.node)
  : [];

return (
  <FlatList
    data={repositoryNodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({item}) => <Item repository={item} />}
    ListHeaderComponent={<SortBy order={order} setOrder={setOrder} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
  />
);
  // return <RepositoryListContainer repositories={repositories} />;
};

const ItemSeparator = () => <View style={styles.separator} />;

const SortBy = ({order, setOrder, searchQuery, setSearchQuery}) => {

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
      onValueChange={(itemValue, itemIndex) =>{
        setOrder(itemIndex)}}
    >
      <Picker.Item label="Sort by..."/>
      <Picker.Item label="Latest repositories" value="latest"/>
      <Picker.Item label="Highest rated repositories" value="highestRate"/>
      <Picker.Item label="Lowest rated repositories" value="lowesRate"/>
    </Picker>
    </View>
  )
}

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <Item repository={item} />}
    />
  );
};



const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export default RepositoryList;