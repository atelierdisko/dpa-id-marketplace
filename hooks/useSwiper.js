import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Pagination as SwiperPagination,
  Mousewheel,
  Keyboard,
  EffectFade,
  Controller,
} from "swiper/core";
import { useState } from "react";

SwiperCore.use([
  SwiperPagination,
  Mousewheel,
  Keyboard,
  EffectFade,
  Controller,
]);

function useSwiper() {
  const [swiper, setSwiper] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slideNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const slideTo = (index) => {
    if (swiper !== null) {
      swiper.slideTo(index);
    }
  };

  const onSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  return {
    swiper,
    setSwiper,
    slidePrev,
    slideNext,
    slideTo,
    onSlideChange,
    currentSlideIndex,
  };
}

export { useSwiper };
