import styles from "./carousel.module.css";
import typography from "../../styles/typography.module.css";
import {joinClassNames} from "../../utilities/componentsHelpers";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {Pagination as SwiperPagination, Mousewheel, Keyboard} from "swiper/core";
import {useState} from "react";
import bullet from "./bullet.module.css"
import pagination from "./pagination.module.css";
import cn from "classnames";

SwiperCore.use([SwiperPagination, Mousewheel, Keyboard]);

Bullet.defaultProps = {
    active: false
}

function Bullet({active, onClick}) {
    return <span className={cn(bullet.root, active ? bullet.isActive : null)} onClick={onClick}/>
}

function Pagination({count, activeIndex}) {
    let bullets = [];

    for (let i = 0; i < count; i++) {
        bullets.push((
            <Bullet active={i === activeIndex}/>
        ));
    }

    return (
        <div className={pagination.root}>
            {bullets}
        </div>
    )
}

export default function Carousel({children, className}) {
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

    const onSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.realIndex);
    };

    return (
        <div className={joinClassNames(styles.root, className)}>
            <Swiper
                mousewheel={true}
                loop={true}
                keyboard={true}
                onSwiper={setSwiper}
                onSlideChange={onSlideChange}
                className={styles.swiperContainer}
            >
                {children.map((child, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <img src={child} alt={""}/>
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className={styles.navigation}>
                <button
                    onClick={() => slidePrev()}
                    className={joinClassNames(typography.zeta500, styles.prevButton)}
                >
                    ‹ Zurück
                </button>

                <div>
                    <Pagination count={children.length} activeIndex={currentSlideIndex}/>
                </div>

                <button
                    onClick={() => slideNext()}
                    className={joinClassNames(typography.zeta500, styles.nextButton)}
                >
                    Weiter ›
                </button>
            </div>
        </div>
    );
}
