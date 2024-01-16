import { Accordion, ImageSlider, RandomColor, StarRating } from './components';

function App() {
  return (
    <div className='App'>
      {/* Accordion Component */}
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={10} /> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} />
    </div>
  );
}

export default App;
