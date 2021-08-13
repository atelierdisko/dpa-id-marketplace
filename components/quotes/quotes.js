import styles from "./quotes.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import cn from "classnames";
import {Navigation} from "../carousel/navigation";
import {useSwiper} from "../../hooks/useSwiper";
import quotes from "../../data/quotes";
import {useState} from "react";

export default function Quotes({}) {
    const {
        swiper: imageSwiper,
        setSwiper: setImageSwiper,
        slidePrev,
        slideNext,
        onSlideChange,
        slideTo,
        currentSlideIndex,
    } = useSwiper();
    const [quoteSwiper, setQuoteSwiper] = useState(null);

    return (

        <div className={cn(styles.root, grid.root)} id={"best-practices"}>
            <div className={cn(styles.titleWrapper, grid.root)}>
                <div className={styles.block}/>
                <h1 className={cn(styles.title, typography.beta500)}>Arbeiten mit dem dpa-Marketplace</h1>
            </div>
            <Swiper
                loop={true}
                keyboard={true}
                onSwiper={setImageSwiper}
                onSlideChange={onSlideChange}
                className={styles.imageContainer}
                controller={{
                    control: quoteSwiper
                }}
            >
                {quotes.map((quote, index) => (
                    <SwiperSlide key={index} className={styles.imageSlide}>
                        <img src={quote.image} alt={""}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.textContainer}>
                <Swiper
                    loop={true}
                    onSwiper={(swiper) => {
                        setQuoteSwiper(swiper);
                    }}
                    className={styles.quoteContainer}
                    controller={{control: imageSwiper}}
                    effect={"fade"}
                    fadeEffect={{
                        crossFade: true,
                    }}
                >
                    {quotes.map((quote, index) => (
                        <SwiperSlide key={index} className={styles.quoteSlide}>
                            <div>
                                <p className={cn(typography.delta500)}>{quote.quote.split(':')[0]}:</p>
                                <p className={cn(typography.delta400)}>{quote.quote.split(':')[1]}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Navigation
                    className={styles.carouselNavigation}
                    index={currentSlideIndex}
                    length={quotes.length}
                    slideTo={slideTo}
                    slideNext={slideNext}
                    slidePrev={slidePrev}
                    color={"black"}
                    paginationColor={'gray'}
                />
            </div>

        </div>
    );
}
