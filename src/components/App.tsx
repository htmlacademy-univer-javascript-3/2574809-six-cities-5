import MainPage from '../pages/MainPage';
import { PlaceCardType } from './PlaceCard';

type AppPropsType = {
    places: PlaceCardType[];
}

const App = (props: AppPropsType) => (
  <div className="app">
    <MainPage places={props.places}/>
  </div>
);

export default App;
