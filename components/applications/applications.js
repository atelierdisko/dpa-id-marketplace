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
  initialApplicationNumber /* todo: pass the name of the initial filter as prop */,
  className,
  id,
}) {
  const [activeFilter, setActiveFilter] = useState("Alle anzeigen");
  const [displayedApplications, setDisplayedApplications] = useState([
    ...applications,
  ]);

  useEffect(() => {
    console.log(activeFilter);
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

  /*
   * todo: use the name of the initial filter to find the index using findIndex() and set it as initial state,
   * docs: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
   */

  return (
    <section
      className={joinClassNames(grid.root, styles.root, className)}
      id={id}
    >
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
            // backgroundColor={application.backgroundColor}
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
