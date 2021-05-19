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
      <h2 className={joinClassNames(typography.gamma500, styles.title)}>
        Die Welt der dpa ID im Überblick
      </h2>
      <p className={joinClassNames(typography.delta400, styles.description)}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata.
      </p>
      <p className={joinClassNames(styles.filterOptions, typography.zeta500)}>
        Filteroptionen:
      </p>
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <Button isActive={index === activeFilter} onClick={handleFilterClick}>
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
          />
        ))}
      </div>
      <div className={styles.showMoreButton}>
        <Button isActive={true} isDoublePadding={true}>
          Mehr anzeigen
        </Button>
      </div>
    </section>
  );
}
