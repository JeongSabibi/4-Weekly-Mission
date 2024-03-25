import Tab from './Tab';

const FolderTabItem = ({ folder, setFolderFilter }) => {
  const { name } = folder;
  return <Tab onClick={() => setFolderFilter({ id: folder.id, name: folder.name })}>{name}</Tab>;
};

export default FolderTabItem;
