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
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [displayedApplications, setDisplayedApplications] = useState([
    ...applications,
  ]);

  useEffect(() => {
    if (activeFilter === "Alle anzeigen") {
      setDisplayedApplications([...applications]);
      return;
    }

    setDisplayedApplications(
      applications.filter((application) =>
        application.tags.includes(activeFilter.toLowerCase())
      )
    );
  }, [activeFilter]);

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
        {/*  todo: add key prop to button https://reactjs.org/docs/lists-and-keys.html#keys */}
        {filters.map((filter) => (
          <Button
            isActive={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
            className={styles.filter}
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
          />
        ))}
      </div>
      <div className={styles.showMoreButton}>
        <Button isActive={true} isDoublePadding={true} isDisabled={true}>
          Mehr anzeigen
        </Button>
      </div>
    </section>
  );
}
