import Button from "../button/button";
import ApplicationCard from "../applicationCard/applicationCard";
import styles from "./applications.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import { useEffect, useState } from "react";

export default function Applications({
  applications,
  filters,
  initialApplicationNumber,
  className,
}) {
  const [activeFilter, setActiveFilter] = useState(filters.length - 1);
  const [displayedApplications, setDisplayedApplications] = useState([
    ...applications,
  ]);

  const handleFilterClick = ({ target }) => {
    setActiveFilter(filters.indexOf(target.name));
  };

  useEffect(() => {
    activeFilter === filters.length - 1
      ? setDisplayedApplications([...applications])
      : setDisplayedApplications(
          applications.filter((application) =>
            application.tags.includes(filters[activeFilter].toLowerCase())
          )
        );
  }, [activeFilter]);

  return (
    <section className={joinClassNames(grid.root, styles.root, className)}>
      <h2 className={joinClassNames(typography.beta500, styles.title)}>
        Der dpa ID Marktplatz im Überblick
      </h2>
      <p className={joinClassNames(typography.delta400, styles.description)}>
        Mit Ihrer dpa ID betreten Sie den dpa ID Martkpltz und haben direkten
        Zugang zu allen Tools der dpa und unserer Partner.
      </p>
      <p className={joinClassNames(styles.filterOptions, typography.zeta500)}>
        Filteroptionen:
      </p>
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <Button
            isActive={index === activeFilter}
            onClick={handleFilterClick}
            className={styles.filter}
          >
            {filter}
          </Button>
        ))}
      </div>
      <div className={styles.list}>
        {displayedApplications.map((application) => (
          <ApplicationCard
            title={application.title}
            excerpt={application.excerpt}
            description={application.description}
            icon={application.icon}
            images={application.images}
            backgroundColor={application.backgroundColor}
            // color={application.color}
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
