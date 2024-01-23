import {
  Accordion,
  ImageSlider,
  LoadMoreButton,
  RandomColor,
  StarRating,
  TreeView,
} from './components';
import menus from './components/tree-view/data';

function App() {
  return (
    <div>
      {/* Accordion Component */}
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={10} /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} /> */}
      {/* <LoadMoreButton /> */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
