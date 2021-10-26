import { Carousel } from "react-carousel-minimal";
import image1 from "../../assets/sliderImage/img1.jpg";
import image3 from "../../assets/sliderImage/img3.jpg";
import image4 from "../../assets/sliderImage/img4.jpg";
import image5 from "../../assets/sliderImage/img5.jpg";
import image6 from "../../assets/sliderImage/img6.jpg";
import image7 from "../../assets/sliderImage/img7.jpg";

function App() {
  const data = [
    {
      image: image1,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image5,
    },
    {
      image: image6,
    },
    {
      image: image7,
    },
  ];
  const categoryHandler = () => {
    console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀");
  };
  return (
    <Carousel
      data={data}
      time={4000}
      width='100%'
      height='375px'
      radius='4px'
      automatic={true}
      pauseIconColor='white'
      pauseIconSize='30px'
      slideImageFit='cover'
      thumbnailWidth='100px'
      style={{
        maxHeight: "375px",
        margin: "25px 0 0 0",
      }}
    />
  );
}

export default App;
