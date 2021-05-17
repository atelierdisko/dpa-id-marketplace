import Button from "../button/button";
import FunctionalityCard from "../functionalityCard/functionalityCard";
import styles from "./functionalities.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";

export default function Funktionalitaten({
  functionalities,
  filters,
  className,
}) {
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
      <div className={styles.filters}>
        <Button className={styles.filter}>Aktuelles</Button>
        <Button>Recherche</Button>
        <Button>Planung</Button>
        <Button>Distribution</Button>
        <Button>Audio</Button>
        <Button>Video</Button>
        <Button>Visuals</Button>
        <Button>Daten</Button>
        <Button isActive={true}>Alle anzeigen</Button>
        {/*{filters.map(filter=>(<Button isActive={filter.isActive}>{filter.title}</Button>))}*/}
      </div>
      <div className={styles.list}>
        {functionalities.map((functionality) => (
          <FunctionalityCard
            title={functionality.title}
            excerpt={functionality.excerpt}
            description={functionality.description}
            icon={functionality.icon}
            images={functionality.images}
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
