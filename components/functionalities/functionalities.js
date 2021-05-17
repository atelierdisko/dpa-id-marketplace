import Button from "../button/button";
import FunctionalityCard from "../functionalityCard/functionalityCard";

export default function Funktionalitaten({functionalities,filters,className}) {
    return (
        <section>
            <h2>Die Welt der dpa ID im Überblick</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
            <div>
                <Button>Aktuelles</Button>
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
            {/*<div>{functionalities.map(functionality=>(<FunctionalityCard/>))}</div>*/}
        </section>
    )
}