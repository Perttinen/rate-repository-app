import { FlatList, View, StyleSheet } from 'react-native';

import Item from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return <RepositoryListContainer repositories={repositories} />;
};

const ItemSeparator = () => <View style={styles.separator} />;

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