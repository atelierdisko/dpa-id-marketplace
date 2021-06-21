import Button from "../button/button";
import ApplicationCard from "../applicationCard/applicationCard";
import styles from "./applications.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { motion, useAnimation } from "framer-motion";

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
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [filteredApplications, setFilteredApplications] = useState([
    ...applications,
  ]);
  const prevDisplayedApplicationsRef = useRef([]);
  const [displayedApplications, setDisplayedApplications] = useState([
    ...applications.slice(0, appNumber),
  ]);

  useEffect(() => {
    setAppNumber(initialAppNumber);
    if (activeFilter === "Alle anzeigen") {
      setDisplayedApplications([...applications.slice(0, appNumber)]);
      setFilteredApplications([...applications]);
      return;
    }
    setFilteredApplications(
      applications.filter((application) =>
        application.tags.includes(activeFilter.toLowerCase())
      )
    );
  }, [activeFilter]);

  useEffect(() => {
    setDisplayedApplications(filteredApplications.slice(0, appNumber));
  }, [filteredApplications]);

  useEffect(() => {
    setDisplayedApplications(filteredApplications.slice(0, appNumber));
  }, [appNumber]);

  useEffect(() => {
    if (displayedApplications.length === filteredApplications.length)
      setIsButtonDisabled(true);
    else setIsButtonDisabled(false);
  }, [displayedApplications, filteredApplications, activeFilter]);

  useEffect(() => {
    prevDisplayedApplicationsRef.current = displayedApplications;
  }, [displayedApplications]);

  const handleClick = () => {
    if (displayedApplications.length < filteredApplications.length) {
      setAppNumber((prevNumber) =>
        prevNumber + stepNumber < filteredApplications.length
          ? prevNumber + stepNumber
          : filteredApplications.length
      );
    }
  };

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
            key={application.title}
            index={index}
            title={application.title}
            excerpt={application.excerpt}
            description={application.description}
            icon={application.icon}
            images={application.images}
            filter={activeFilter}
            delayIndex={Math.max(
              0,
              index - prevDisplayedApplicationsRef.current?.length
            )}
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
