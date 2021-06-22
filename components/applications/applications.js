import Button from "../button/button";
import ApplicationCard from "../applicationCard/applicationCard";
import styles from "./applications.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

export default function Applications({
  applications,
  filters,
  initialFilter,
  className,
  id,
}) {
  const initialAppNumber = 10;
  const stepNumber = 5;
  const [appNumber, setAppNumber] = useState(initialAppNumber);
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const deltaAppNumberRef = useRef(0);

  useEffect(() => {
    deltaAppNumberRef.current = 0;
    setAppNumber(initialAppNumber);
  }, [activeFilter]);

  const applyFilter = (data, activeFilter) => {
    if (activeFilter === "Alle anzeigen") {
      return data;
    }
    return data.filter((item) =>
      item.tags.includes(activeFilter.toLowerCase())
    );
  };

  const limitByCount = (data, count) => {
    return [...data.slice(0, count)];
  };

  const filteredApplications = applyFilter(applications, activeFilter);
  const displayedApplications = limitByCount(filteredApplications, appNumber);

  const isButtonDisabled =
    displayedApplications.length === filteredApplications.length;

  const handleClick = () => {
    if (displayedApplications.length < filteredApplications.length) {
      setAppNumber((prevNumber) => {
        const nextNumber =
          prevNumber + stepNumber < filteredApplications.length
            ? prevNumber + stepNumber
            : filteredApplications.length;
        deltaAppNumberRef.current = nextNumber - prevNumber;
        return nextNumber;
      });
    }
  };

  const getDelayIndex = (arr, index) =>
    Math.max(0, index - (arr.length - deltaAppNumberRef.current));

  // const variants = {
  //   hidden: { opacity: 1, transition: { duration: 0, delay: 0 } },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0,
  //       delay: 0,
  //       delayChildren: 0,
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };
  // const controls = useAnimation();
  // useEffect(() => {
  //   controls.start("visible");
  // }, [displayedApplications, appNumber]);

  return (
    <section className={cn(grid.root, styles.root, className)} id={id}>
      <h2 className={cn(typography.beta500, styles.title)}>
        Der dpa ID Marktplatz im Überblick
      </h2>
      <p className={cn(typography.delta400, styles.description)}>
        Mit Ihrer dpa ID betreten Sie den dpa ID Martkpltz und haben direkten
        Zugang zu allen Tools der dpa und unserer Partner.
      </p>
      <p className={cn(styles.filterOptions, typography.zeta500)}>
        Filteroptionen:
      </p>
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <Button
            key={index}
            isActive={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              styles.filter,
              filter === activeFilter && styles.activeFilter
            )}
            asButton={filter !== activeFilter}
          >
            {filter}
          </Button>
        ))}
      </div>
      <div className={styles.list}>
        {displayedApplications.map((application, index, arr) => (
          <ApplicationCard
            key={`${application.title}-${index}`}
            index={index}
            title={application.title}
            excerpt={application.excerpt}
            description={application.description}
            icon={application.icon}
            images={application.images}
            filter={activeFilter}
            delayIndex={getDelayIndex(arr, index)}
          />
        ))}
      </div>
      <motion.div className={styles.showMoreButtonContainer} layout>
        <Button
          className={cn(
            styles.showMoreButton,
            isButtonDisabled && styles.showMoreButtonDisabled
          )}
          isDoublePadding={true}
          isDisabled={isButtonDisabled}
          onClick={handleClick}
          asButton={true}
        >
          Mehr anzeigen
        </Button>
      </motion.div>
    </section>
  );
}
