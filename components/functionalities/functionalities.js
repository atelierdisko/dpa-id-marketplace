import styles from "./functionalities.module.css";
import typography from "../../styles/typography.module.css";
import grid from "../../styles/grid.module.css";
import { joinClassNames } from "../../utilities/componentsHelpers";
import { useEffect, useState } from "react";

export default function Functionalities({ functionalities, className, id }) {
  const [functionalityTitle, setFunctionalityTitle] = useState(
    functionalities[0].title
  );
  const [functionalityDescription, setFunctionalityDescription] = useState(
    functionalities[0].description
  );
  const [functionalityIndex, setFunctionalityIndex] = useState(0);
  useEffect(() => {
    setFunctionalityTitle(functionalities[functionalityIndex].title);
    setFunctionalityDescription(
      functionalities[functionalityIndex].description
    );
  }, [functionalityIndex]);

  const handleClick = () => {
    if (functionalityIndex !== functionalities.length - 1)
      setFunctionalityIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <section className={joinClassNames(styles.root, className)} id={id}>
      <div className={joinClassNames(styles.container, grid.root)}>
        <h2 className={joinClassNames(styles.title, typography.beta500)}>
          Features Ihrer dpa ID
        </h2>
        <div className={styles.functionalities}>
          {/*{another slider goes here}*/}
          <div className={styles.functionalityCard}>
            <h5
              className={joinClassNames(
                typography.delta500,
                styles.functionalityTitle
              )}
            >
              {" "}
              {functionalityTitle}
            </h5>
            <p
              className={joinClassNames(
                typography.delta400,
                styles.functionalityDescription
              )}
            >
              {functionalityDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
