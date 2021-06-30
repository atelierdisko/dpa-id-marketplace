import styles from "./legal.module.css";
import Button from "../button/button";
import grid from "../../styles/grid.module.css";
import cn from "classnames";
import typography from "../../styles/typography.module.css";
import Link from "next/link";

export default function Legal({ type, className }) {
  return (
    <div className={cn(styles.root, grid.root)}>
      <div className={styles.buttonContainer}>
        <Link href={"/"}>
          <button className={cn(styles.button, typography.zeta500)}>
            ‹ Zurück zur Startseite
          </button>
        </Link>
      </div>
      <h1 className={cn(styles.title, typography.gamma500)}>
        {type === "imprint"
          ? "Impressum"
          : "Datenschutzerklärung der dpa Deutsche Presse-Agentur GmbH für die Webseite des dpa-Marketplace - www.dpa-id.com"}
      </h1>

      <p className={cn(styles.description, typography.epsilon400)}>
        Nachfolgend informieren wir Sie darüber, welche personenbezogenen Daten
        wir im Zusammenhangmit Ihrer Nutzung der Website des dpa Marketplace –
        <a href={"https://www.dpa.com/de/portale/#dpa-id"} target="_blank">
          www.dpa-id.com
        </a>{" "}
        verarbeiten. Um eine faireVerarbeitung zu gewährleisten, möchten wir Sie
        außerdem über Ihre Rechte nach der
        EuropäischenDatenschutz-Grundverordnung (DSGVO) und dem
        Bundesdatenschutzgesetz (BDSG) informieren.
      </p>

      <p className={cn(styles.description, typography.epsilon400)}>
        Bitte beachten Sie, dass Datenschutzerklärung nur für die Nutzung der
        Website des dpa Marketplace –{" "}
        <a href={"https://www.dpa.com/de/portale/#dpa-id"} target="_blank">
          www.dpa-id.com
        </a>{" "}
        gilt. Für die Registrierungs-, Profil- und Login-Website der dpa ID, für
        die Nutzung des dpa ID Single-Sign-On-Service sowie die an der dpa ID
        angeschlossenen Dienste gelten gesonderte Datenschutzerklärungen. Diese
        finden Sie für die Registrierungs-, Profil- und Login-Website der dpa ID{" "}
        <a
          href={"https://sso.dpa-id.de/goto/privacy-policy-website"}
          target="_blank"
        >
          hier
        </a>{" "}
        und für den dpa ID Single-Sign-On-Service{" "}
        <a
          href={"https://sso.dpa-id.de/goto/privacy-policy-sso"}
          target="_blank"
        >
          hier
        </a>
        . Die entsprechenden Datenschutzerklärungen der an die dpa ID
        angeschlossenen Dienste finden Sie auf der Webseite des jeweiligen
        Dienstes.
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Verantwortlich für die Datenverarbeitung ist die dpa Deutsche
        Presse-Agentur GmbH, Mittelweg 38, 20148 Hamburg, Deutschland
        (nachfolgend auch als „dpa“, „wir“ oder „uns“ bezeichnet).
        Verantwortlich für die Bereitstellung und den Betrieb der
        Registrierungs-, Profil- und Login-Website der dpa ID, für die Nutzung
        des dpa ID Single-Sign-On-Services sowie der an die an der an die dpa ID
        angeschlossenen Angebote bleiben hingegen die jeweiligen Anbieter.
      </p>

      <h5 className={cn(styles.description, typography.epsilon500)}>
        1. Allgemeine Angaben
      </h5>
      <p className={cn(styles.description, typography.epsilon400)}>
        1.1 Kontakt
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Wenn Sie Fragen oder Anregungen zu dieser Datenschutzerklärung haben
        oder sich wegen der Geltendmachung Ihrer Rechte an uns wenden möchten,
        richten Sie Ihre Anfrage bitte an:
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        dpa Deutsche Presse-Agentur GmbH
      </p>
      <p
        className={cn(
          styles.description,
          typography.epsilon400,
          styles.address
        )}
      >
        Mittelweg 38
      </p>
      <p
        className={cn(
          styles.description,
          typography.epsilon400,
          styles.address
        )}
      >
        20148 Hamburg
      </p>
      <p
        className={cn(
          styles.description,
          typography.epsilon400,
          styles.address
        )}
      >
        Telefon: 040 4113-0
      </p>
      <p
        className={cn(
          styles.description,
          typography.epsilon400,
          styles.address
        )}
      >
        E-Mail: <a href="mailto:  info@dpa.com">info@dpa.com</a>
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        1.2 Datenschutzbeauftragter
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Sollten Sie Fragen zu dieser Datenschutzerklärung oder generell zur
        Verarbeitung Ihrer Daten durch die dpa haben, wenden Sie sich bitte an
        unseren Datenschutzbeauftragten:
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        dpa Deutsche Presse-Agentur GmbH{" "}
      </p>
      <p
        className={cn(
          styles.description,
          typography.epsilon400,
          styles.address
        )}
      >
        Datenschutzbeauftragter
      </p>
      <p
        className={cn(
          styles.description,
          typography.epsilon400,
          styles.address
        )}
      >
        Postfach 13 02 82{" "}
      </p>
      <p
        className={cn(
          styles.description,
          typography.epsilon400,
          styles.address
        )}
      >
        20102 Hamburg
      </p>
      <p
        className={cn(
          styles.description,
          typography.epsilon400,
          styles.address
        )}
      >
        E-Mail: <a href="mailto:  datenschutz@dpa.comm">datenschutz@dpa.com</a>
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        1.3 Allgemeine Angaben zur Datenverarbeitung
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Bei der Nutzung dieser Website kann es zu einer Verarbeitung von
        personenbezogenen Daten kommen. Der datenschutzrechtliche Begriff
        „personenbezogene Daten“ bezeichnet dabei alle Informationen, die sich
        auf einen bestimmten oder bestimmbaren Menschen beziehen. Auch die
        IP-Adresse kann so ein personenbezogenes Datum sein. Eine IP-Adresse
        wird jedem mit dem Internet verbundenen Gerät durch den Internetprovider
        zugewiesen, damit es Daten senden und empfangen kann.
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Wir verarbeiten personenbezogene Daten unter Beachtung der einschlägigen
        Datenschutzvorschriften, insbesondere der DSGVO und des BDSG. Eine
        Datenverarbeitung durch uns findet nur auf der Grundlage einer
        gesetzlichen Erlaubnis statt. Wir verarbeiten personenbezogene Daten nur
        mit Ihrer Einwilligung (Art. 6 Abs. 1 a) DSGVO), zur Erfüllung eines
        Vertrags, dessen Vertragspartei Sie sind, oder auf Ihre Anfrage zur
        Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 b) DSGVO), zur
        Erfüllung einer rechtlichen Verpflichtung (Art. 6 Abs. 1 c) DSGVO) oder
        wenn die Verarbeitung zu Wahrung unser berechtigten Interessen oder den
        berechtigten Interessen eines Dritten erforderlich ist, sofern nicht
        Ihre Interessen oder Grundrechte und Grundfreiheiten, die den Schutz
        personenbezogener Daten erfordern, überwiegen (Art. 6 Abs. 1 f) DSGVO).
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        1.4 Dauer der Speicherung
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Sofern sich aus den folgenden Hinweisen nichts anderes ergibt, speichern
        wir die Daten nur solange, wie es zur Erreichung des Verarbeitungszwecks
        oder für die Erfüllung unserer vertraglichen oder gesetzlichen Pflichten
        erforderlich ist. Solche gesetzlichen Aufbewahrungspflichten können sich
        insbesondere aus handels- oder steuerrechtlichen Vorschriften ergeben.
        In diesem Fall werden wir Ihre Daten für andere Zwecke sperren.
      </p>
      <h5 className={cn(styles.description, typography.epsilon500)}>
        2. Automatische Verarbeitung von Server-Log-Files
      </h5>
      <p className={cn(styles.description, typography.epsilon400)}>
        Beim Abruf dieser Website werden automatisiert allgemeine Informationen
        gespeichert, die Ihr Browser an unseren Server übermittelt. Hierzu
        zählen standardmäßig: Browsertyp/ -version, verwendetes Betriebssystem,
        aufgerufene Seite, die zuvor besuchte Seite (Referrer URL), IP-Adresse,
        Datum und Uhrzeit der Serveranfrage und HTTP-Statuscode.{" "}
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Die Verarbeitung ist zunächst erforderlich, damit Sie die Website nutzen
        können (Art. 6 Abs. 1 b) DSGVO). Eine weitere Speicherung erfolgt zur
        Wahrung unserer berechtigten Interessen an der technischen Verwaltung
        und der Sicherheit unserer Website und beruht auf der Rechtsgrundlage
        des Art. 6 Abs. 1 f) DSGVO. Die gespeicherten Daten werden gelöscht,
        wenn nicht aufgrund konkreter Anhaltspunkte ein berechtigter Verdacht
        auf eine rechtswidrige Nutzung besteht und eine weitere Prüfung und
        Verarbeitung der Informationen aus diesem Grund erforderlich ist.
      </p>
      <h5 className={cn(styles.description, typography.epsilon500)}>
        3. Hosting der Webseite
      </h5>
      <p className={cn(styles.description, typography.epsilon400)}>
        Für das Hosting der Website nutzen wir die Server unseres
        Auftragsverarbeiters Amazon Web Services EMEA Sàrl, 38 avenue John F.
        Kennedy, L-1855 Luxemburg („AWS“). Dabei nutzen wir ausschließlich
        Serverstandorte in der EU. Von dort werden die Inhalte unsere Website
        abgerufen.
      </p>
      <h5 className={cn(styles.description, typography.epsilon500)}>
        4. Kontaktaufnahme
      </h5>
      <p className={cn(styles.description, typography.epsilon400)}>
        Wenn Sie uns über die in Ziff. 1.1 angegebenen Kontaktdaten Nachrichten,
        Anfragen oder Fragen zukommen lassen, verarbeiten wir die von Ihnen
        bereitgestellten Angaben zur Entgegennahme und Beantwortung Ihres
        Anliegens. Damit wir Ihre Anfrage entgegennehmen und beantworten können
        benötigen wir die Kontaktdaten, unter denen wir Ihnen die Antwort
        zukommen lassen können, sowie Angaben zu Ihrem konkreten Anliegen. Eine
        Nichtbereitstellung hat zur Folge, dass wir Ihr Anliegen nicht
        bearbeiten können. Die Bereitstellung von weiteren Daten erfolgt
        freiwillig. Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1
        b) DSGVO bzw. Art. 6 Abs. 1 f) DSGVO falls die Anfrage eine
        Angelegenheit Ihres Unternehmens betrifft. Wir haben ein berechtigtes
        Interesse daran, Ihr Anliegen zu beantworten.{" "}
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Bei Anfragen von potenziell rechtlicher Relevanz behalten wir uns vor,
        die Anfragen innerhalb der entsprechenden Verjährungsfristen
        aufzubewahren, d.h. drei Jahre ab dem Ende des Jahres, beginnend mit dem
        Ende des Jahres in dem Ihre Anfrage bei uns abschließend bearbeitet
        wurde. Die Speicherung erfolgt auf Grundlage unseres berechtigten
        Interesses an der Sicherung, Geltendmachung und Durchsetzung von
        Ansprüchen (Art. 6 Abs. 1 f) DSGVO). Im Übrigen löschen wir Anfragen,
        sobald wir die Anfragen für den Zweck, für den wir diese erhoben haben
        nicht mehr benötigen. Dies ist der Fall, wenn wir Ihre Anfrage
        abschließend bearbeitet haben.
      </p>
      <h5 className={cn(styles.description, typography.epsilon500)}>
        5. Website-Analyse mit Matomo
      </h5>
      <p className={cn(styles.description, typography.epsilon400)}>
        Wir verwenden auf unserer Website den Open Source Analysedienst Matomo.
        Wir setzen Matomo ohne Cookies ein. Matomo analysiert anhand der bei
        Abruf unserer Seite automatisch anfallenden Log-Dateien bzw. der von
        Ihrem Endgerät automatisch übermittelten Informationen (Gerätetyp
        Bildschirmauflösung, Betriebssystem mit Versionsnummer, Browser,
        Geolocation) bzw. des technischen Fingerprints Ihr Verhalten auf unserer
        Website. Die von Ihrem Endgerät automatisch übermittelte IP-Adresse wird
        unmittelbar und vor ihrer Speicherung anonymisiert. Wir nutzen die über
        Matomo gewonnenen Informationen nicht zur personenbezogenen Analyse der
        Nutzung unserer Website und führen diese Informationen insbesondere
        nicht mit anderen Informationen zusammen. Im Übrigen werden die über
        Matomo gewonnenen Informationen auf unseren eigenen Servern gespeichert
        und nicht an Dritte übermittelt. Die Datenverarbeitung ist zur Wahrung
        unseres berechtigten Interesses an einer Reichweitenanalyse und eines
        besseren Verständnisses der Nutzung unserer Website erforderlich. Die
        Rechtsgrundlage ist Art. 6 Abs. 1 f) DSGVO.{" "}
      </p>
      <h5 className={cn(styles.description, typography.epsilon500)}>
        6. Weitergabe von Daten
      </h5>
      <p className={cn(styles.description, typography.epsilon400)}>
        Über die beschriebenen Fälle hinaus erfolgt eine Weitergabe Ihrer
        personenbezogenen Daten ohne Ihre ausdrückliche vorherige Einwilligung
        nur in den nachfolgend genannten Fällen:{" "}
      </p>

      <ul className={cn(styles.list, styles.firstList)}>
        <li>
          <p className={cn(styles.description, typography.epsilon400)}>
            Wenn es zur Aufklärung einer rechtswidrigen Nutzung unserer Dienste
            oder für die Rechtsverfolgung erforderlich ist, werden
            personenbezogene Daten an die Strafverfolgungsbehörden sowie
            gegebenenfalls an geschädigte Dritte weitergeleitet. Dies geschieht
            jedoch nur dann, wenn konkrete Anhaltspunkte für ein gesetzwidriges
            beziehungsweise missbräuchliches Verhalten vorliegen. Eine
            Weitergabe kann auch dann stattfinden, wenn dies der Durchsetzung
            von Nutzungsbedingungen oder anderer Vereinbarungen dient. Wir sind
            zudem gesetzlich verpflichtet, auf Anfrage bestimmten öffentlichen
            Stellen Auskunft zu erteilen. Dies sind Strafverfolgungsbehörden,
            Behörden, die bußgeldbewährte Ordnungswidrigkeiten verfolgen und die
            Finanzbehörden.{" "}
          </p>
          <p className={cn(styles.description, typography.epsilon400)}>
            Die Weitergabe dieser Daten erfolgt auf Grundlage unseres
            berechtigten Interesses an der Bekämpfung von Missbrauch, der
            Verfolgung von Straftaten und der Sicherung, Geltendmachung und
            Durchsetzung von Ansprüchen und dass Ihre Rechte und Interessen am
            Schutz Ihrer personenbezogenen Daten nicht überwiegen, Art. 6 Abs. 1
            f) DSGVO bzw. aufgrund einer gesetzlichen Verpflichtung nach Art. 6
            Abs. 1 c) DSGVO.
          </p>
        </li>
        <li className={cn(styles.description, typography.epsilon400)}>
          Wir geben personenbezogene Daten an Wirtschaftsprüfer,
          Buchhaltungsdienstleister, Rechtsanwälte, Banken, Steuerberater und
          ähnliche Stellen weiter, soweit dies für die Erbringung unserer
          Leistungen (Art. 6 Abs. 1 b) DSGVO) oder den ordnungsgemäßen
          Geschäftsbetrieb erforderlich ist. Darin liegt auch unser berechtigtes
          Interesse (Art. 6 Abs. 1 f) DSGVO) oder wir dazu verpflichtet sind
          (Art 6 Abs. 1 c) DSGVO).{" "}
        </li>
        <li className={cn(styles.description, typography.epsilon400)}>
          Wir sind für die Erbringung der Dienstleistungen auf vertraglich
          verbundene Fremdunternehmen und externe Dienstleister
          („Auftragsverarbeiter“) angewiesen. In solchen Fällen werden
          personenbezogene Daten an diese Auftragsverarbeiter weitergegeben, um
          diesen die weitere Bearbeitung zu ermöglichen. Diese
          Auftragsverarbeiter werden von uns sorgfältig ausgewählt und
          regelmäßig überprüft, um sicherzugehen, dass Ihre Rechte und
          Freiheiten gewahrt bleiben. Die Auftragsverarbeiter dürfen die Daten
          ausschließlich zu den von uns vorgegebenen Zwecken verwenden und
          werden darüber hinaus von uns vertraglich verpflichtet, Ihre Daten
          ausschließlich gemäß dieser Datenschutzerklärung sowie den deutschen
          Datenschutzgesetzen zu behandeln. Die Weitergabe von Daten an
          Auftragsverarbeiter erfolgt auf Grundlage von Art. 28 Abs. 1 DSGVO.
        </li>
        <li className={cn(styles.description, typography.epsilon400)}>
          Im Rahmen der Weiterentwicklung unseres Geschäfts kann es dazu kommen,
          dass sich die Struktur der dpa Deutsche Presse-Agentur GmbH wandelt,
          indem die Rechtsform geändert wird, Tochtergesellschaften,
          Unternehmensteile oder Bestandteile gegründet, gekauft oder verkauft
          werden. Bei solchen Transaktionen werden die Kundeninformationen
          zusammen mit dem zu übertragenden Teil des Unternehmens weitergegeben.
          Bei jeder Weitergabe von personenbezogenen Daten an Dritte in dem
          vorbeschriebenen Umfang tragen wir dafür Sorge, dass dies in
          Übereinstimmung mit dieser Datenschutzerklärung und den einschlägigen
          Datenschutzgesetzen erfolgt. Eine etwaige Weitergabe der
          personenbezogenen Daten ist dadurch gerechtfertigt, dass wir ein
          berechtigtes Interesse daran haben, unsere Unternehmensform den
          wirtschaftlichen und rechtlichen Gegebenheiten entsprechend bei Bedarf
          anzupassen (Art. 6 Abs. 1 f) DSGVO).
        </li>
      </ul>
      <h5 className={cn(styles.description, typography.epsilon500)}>
        7. Ihre Rechte
      </h5>
      <p className={cn(styles.description, typography.epsilon400)}>
        Als betroffene Person haben Sie das Recht, uns gegenüber Ihre
        Betroffenenrechte geltend zu machen. Dabei haben Sie insbesondere die
        folgenden Rechte:
      </p>
      <ul className={cn(styles.list, styles.secondList)}>
        <li className={cn(styles.description, typography.epsilon400)}>
          Sie haben nach Maßgabe des Art. 15 DSGVO und § 34 BDSG das Recht,
          Auskunft darüber zu verlangen, ob und gegebenenfalls in welchen Umfang
          wir personenbezogene Daten zu Ihrer Person verarbeiten oder nicht.{" "}
        </li>
        <li className={cn(styles.description, typography.epsilon400)}>
          Sie haben das Recht, nach Maßgabe des Art. 16 DSGVO von uns die
          Berichtigung Ihrer Daten zu verlangen.
        </li>
        <li className={cn(styles.description, typography.epsilon400)}>
          Sie haben das Recht, nach Maßgabe des Art. 17 DSGVO und § 35 BDSG von
          uns die Löschung Ihrer personenbezogenen Daten zu verlangen.
        </li>
        <li className={cn(styles.description, typography.epsilon400)}>
          Sie haben das Recht, nach Maßgabe des Art. 18 DSGVO die Verarbeitung
          Ihrer personenbezogenen Daten einschränken zu lassen.
        </li>
        <li className={cn(styles.description, typography.epsilon400)}>
          Sie haben das Recht, nach Maßgabe des Art. 20 DSGVO die Sie
          betreffenden personenbezogenen Daten, die Sie uns bereitgestellt
          haben, in einem strukturierten, gängigen und maschinenlesbaren Format
          zu erhalten, und diese Daten einem anderen Verantwortlichen zu
          übermitteln.
        </li>
      </ul>
      <p
        className={cn(
          styles.underlinedBold,
          styles.description,
          typography.epsilon400
        )}
      >
        Sie haben außerdem nach Maßgabe des Art. 21 DSGVO das Recht, gegen jede
        Verarbeitung, die auf der Rechtsgrundlage des Art. 6 Abs. 1 lit. e oder
        f DSGVO beruht, Widerspruch einzulegen.{" "}
      </p>
      <h5 className={cn(styles.description, typography.epsilon500)}>
        8. Datenverarbeitung bei Ausübung Ihrer Rechte
      </h5>
      <p className={cn(styles.description, typography.epsilon400)}>
        Die bei Ausübung Ihre Rechte gemäß Art. 15 bis 22 DSGVO von Ihnen
        übermittelten personenbezogenen Daten verarbeiten wir zum Zweck der
        Umsetzung dieser Rechte und um den Nachweis hierüber erbringen zu
        können. Diese Verarbeitungen beruhen auf der Rechtsgrundlage des Art. 6
        Abs. 1 c) DSGVO i.V.m. Art. 15 bis 22 DSGVO und § 34 Abs. 2 BDSG.
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Zur Erfüllung der gesetzlichen Dokumentationspflichten nach der DSGVO,
        insbesondere zum Nachweis der fristgerechten Beantwortung Ihrer Anfrage,
        speichern wir diese für die Dauer der regelmäßigen Verjährungsfrist von
        drei Jahren, beginnend mit dem Ende des Jahres in dem Ihr Antrag bei uns
        abschließend bearbeitet wurde.{" "}
      </p>
      <p className={cn(styles.description, typography.epsilon400)}>
        Diese personenbezogenen Daten werden gesperrt und werden nicht für
        andere Zwecke verarbeitet. Rechtsgrundlage der Speicherung ist Art. 6
        Abs. 1 c) i.V.m. Art. 5 Abs. 2, 24 Abs. 1 DSGVO.
      </p>
      <h5 className={cn(styles.description, typography.epsilon500)}>
        9. Beschwerde bei einer Aufsichtsbehördee
      </h5>
      <p className={cn(styles.description, typography.epsilon400)}>
        Wenn Sie der Ansicht sind, dass eine Verarbeitung der Sie betreffenden
        personenbezogenen Daten gegen die Bestimmungen der DSGVO verstößt, haben
        Sie nach Maßgabe des Art. 77 DSGVO das Recht auf Beschwerde bei einer
        Aufsichtsbehörde.
      </p>
    </div>
  );
}
