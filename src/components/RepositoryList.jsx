import { FlatList, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

import Item from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const [order, setOrder] = useState();

  const { repositories } = useRepositories(order);

  const repositoryNodes = repositories
  ? repositories.edges.map((edge) => edge.node)
  : [];

return (
  <FlatList
    data={repositoryNodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({item}) => <Item repository={item} />}
    ListHeaderComponent={<SortBy order={order} setOrder={setOrder}/>}
  />
);
  // return <RepositoryListContainer repositories={repositories} />;
};

const ItemSeparator = () => <View style={styles.separator} />;

const SortBy = ({order, setOrder}) => {
  return(
    <Picker 
      style={{height:30}}
      selectedValue={order}
      onValueChange={(itemValue, itemIndex) =>{
        setOrder(itemIndex)}}
    >
      <Picker.Item label="Sort by..."/>
      <Picker.Item label="Latest repositories" value="latest"/>
      <Picker.Item label="Highest rated repositories" value="highestRate"/>
      <Picker.Item label="Lowest rated repositories" value="lowesRate"/>
    </Picker>
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