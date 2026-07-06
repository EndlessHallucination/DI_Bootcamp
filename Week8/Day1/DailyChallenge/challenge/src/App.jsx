import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div style={{ width: "800px", margin: "0 auto" }}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1506973035872-a4f23ef4c43d"
            alt="Hong Kong"
          />
          <p className="legend">Hong Kong</p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
            alt="Macao"
          />
          <p className="legend">Macao</p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
            alt="Japan"
          />
          <p className="legend">Japan</p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Las Vegas"
          />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;