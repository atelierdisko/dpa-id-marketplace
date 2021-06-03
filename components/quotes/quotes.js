import styles from "./quotes.module.css";
import typography from "../../styles/typography.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import Slider from "../slider/slider";
import Marquee from "../marquee/marquee";
import { useEffect, useState } from "react";

export default function Quotes({ className, data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSignalPhrase, setCurrentSignalPhrase] = useState(
    data[0].signalPhrase
  );
  const [currentQuote, setCurrentQuote] = useState(data[0].quote);
  const [currentImage, setCurrentImage] = useState(data[0].image);

  const handleClick = ({ target }) => {
    if (/^page/.test(target.id)) {
      const pageNumber = parseInt(target.id.match(/\d+/)[0]);
      setCurrentSlide(pageNumber);
      return;
    }

    if (target.name === "forward" && currentSlide !== data.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
    if (target.name === "back" && currentSlide !== 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  useEffect(() => {
    setCurrentSignalPhrase(data[currentSlide].signalPhrase);
    setCurrentQuote(data[currentSlide].quote);
    setCurrentImage(data[currentSlide].image);
  }, [currentSlide]);

  return (
    <>
      <section className={joinClassNames(styles.root, className)}>
        <img src={currentImage} className={styles.image} alt={""} />
        <div className={joinClassNames(styles.container)}>
          <div className={styles.description}>
            <p
              className={joinClassNames(
                typography.zeta500,
                styles.signalPhrase
              )}
            >
              {currentSignalPhrase}
            </p>
            <p className={joinClassNames(typography.gamma500, styles.quote)}>
              {currentQuote}
            </p>
            <Slider
              array={[...Array(data.length).keys()]}
              activePage={currentSlide}
              className={styles.slider}
              onClick={handleClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
