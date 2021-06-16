import Button from "../button/button";
import ApplicationCard from "../applicationCard/applicationCard";
import styles from "./applications.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { useEffect, useState } from "react";
import cn from "classnames";

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
  const [displayedApplications, setDisplayedApplications] = useState([
    ...applications.slice(0, appNumber),
  ]);
  useEffect(() => {
    setAppNumber(initialAppNumber);
    if (activeFilter === "Alle anzeigen") {
      setDisplayedApplications([...applications.slice(0, appNumber)]);
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
    if (appNumber === filteredApplications.length) setIsButtonDisabled(true);
    else setIsButtonDisabled(false);
  }, [appNumber, filteredApplications, activeFilter]);

  const handleClick = () => {
    if (displayedApplications.length < filteredApplications.length) {
      setAppNumber((prevNumber) =>
        prevNumber + stepNumber < filteredApplications.length
          ? prevNumber + stepNumber
          : filteredApplications.length
      );
    }
  };

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
        {displayedApplications.map((application, index) => (
          <ApplicationCard
            key={index}
            title={application.title}
            excerpt={application.excerpt}
            description={application.description}
            icon={application.icon}
            images={application.images}
            filter={activeFilter}
          />
        ))}
      </div>
      <div className={styles.showMoreButtonContainer}>
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
      </div>
    </section>
  );
}
