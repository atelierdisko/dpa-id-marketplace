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
  /* todo: store the name of the filter in state instead of the index, makes debugging and maintenance easier */
  const [activeFilter, setActiveFilter] = useState(filters.length - 1);
  const [displayedApplications, setDisplayedApplications] = useState([
    ...applications,
  ]);

  /* todo: obsolete, remove */
  const handleFilterClick = ({ target }) => {
    setActiveFilter(filters.indexOf(target.name));
  };

  useEffect(() => {
    /* todo: use an early return for simplicity
     *
     * if(activeFilter === "Alle anzeigen") {
     *    setDisplayedApplications([...applications])
     *    return
     * }
     *
     * implement filtering logic after
     */

    activeFilter === filters.length - 1
      ? setDisplayedApplications([...applications])
      : setDisplayedApplications(
          applications.filter((application) =>
            application.tags.includes(filters[activeFilter].toLowerCase())
          )
        );
  }, [activeFilter]);

  /*
   * todo: use the name of the initial filter to find the index using findIndex() and set it as initial state,
   * docs: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
   */

  return (
    <section
      className={joinClassNames(grid.root, grid.margin, styles.root, className)}
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
        {filters.map((filter, index) => (
          /* todo: render element as actual html button to improve accessibility, add a "asButton" prop to the #
           * button component. When true is should return a <button> tag, otherwise default to <a> as is */
          <Button
            isActive={index === activeFilter}
            onClick={
              handleFilterClick
            } /* todo: pass the filter name to the onclick handler like onClick={() => setActiveFilter(filter)} */
            className={styles.filter}
          >
            {filter}
          </Button>
        ))}
      </div>
      <div className={styles.list}>
        {/* todo: add key prop to ApplicationCard to fix https://reactjs.org/docs/lists-and-keys.html#keys*/}
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
