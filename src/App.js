import logo from './logo.svg';
import './App.css';
import Minter from './components/Minter';
import Introduction from './components/Introduction';
import Tokenomic from './components/Tokenomic';
import RoadMap from './components/RoadMap';
import TeamSection from './components/TeamSection';

function App() {
  return (
    <div className="App">
      <Minter />
      <Introduction />
      <Tokenomic />
      <RoadMap />
      <TeamSection />

      <div className="wf-section">
        <div className="container-23 w-container">
          <h4 className="section-heading section-heading-small">Verified Contract Address</h4>
          <div className="text-block-23 text-white">0x18d4db77f362557563051821952c9ae32a403ab8</div>
        </div>

        <div className="d-block mt-10">
            <hr />
        </div>
      </div>

      <div className="wf-section my-16">
        <h4 className="section-heading section-heading-small">The Rubber Duck</h4>
          <div className="text-block-23 text-white">© 2021 TheRubberDuck LLC</div>
      </div>
    </div>
  );
}

export default App;
