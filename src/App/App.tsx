import Header from '../components/header/Header';
import Input from '../components/input/Input';
import { List } from '../store/list';
import { IStore } from '../types/store';
import ListRender from '../components/list/List';

const App = () => {
  const { list, AddItem, RemoveItem }: IStore = List();

  return (
    <>
      <Header />
      <Input addItem={AddItem} />
      <ListRender 
			  list={list} 
				removeItem={RemoveItem} />
    </>
  );
};

export default App;
