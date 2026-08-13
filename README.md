# Antichi Telai

Prompt Lovable — Antichi Telai 1894 https://www.antichitelai.it/

Prima di incollare: carica in chat su Lovable le foto prese dal sito attuale, rinominate come indicato nel blocco ASSET. Poi incolla tutto quello che segue, dalla riga sotto fino alla fine.

CONTESTO

Costruisci il nuovo sito di Antichi Telai 1894, sartoria e camiceria da uomo su misura a Roma, attiva dal 1894. È un'attività di famiglia: oggi la conducono i fratelli Savino e Antonio Di Pietrantonio. Tre atelier in città: Monteverde (sede storica), Balduina, Vigna Clara.

Il sito ha un solo obiettivo: far prenotare un appuntamento in atelier. Non è un e-commerce e non deve diventarlo. Ogni scelta di struttura, copy e design va valutata rispetto a questa domanda: avvicina o allontana il visitatore dal modulo di prenotazione?

Il pubblico è maschile, dai 30 anni in su, romano, con capacità di spesa: professionisti, sposi, uomini che si vestono su misura per lavoro. Non conosce il gergo sartoriale ma vuole sentirsi trattato da adulto competente.

STACK E VINCOLI
Single page application, React + Vite + Tailwind, tutto in italiano.
Una sola pagina con ancore di navigazione. Niente pagine interne, niente blog, niente carrello, niente area riservata, niente cambio lingua.
Nessuna libreria di componenti pesante. Animazioni in CSS o con Framer Motion tenuto al minimo.
Mobile first: oltre il 70% del traffico arriverà da telefono, tramite campagne Google.
Deve caricare veloce: immagini in lazy loading tranne quella dell'hero, nessun font oltre i due indicati.
ASSET
Immagini

Uso le foto che ho caricato in chat. Nomi e destinazione:

hero.jpg → sfondo della prima schermata, orizzontale
atelier-1.jpg, atelier-2.jpg → sezione sulla famiglia e sulla galleria
abito.jpg → banda "Abito su misura"
camicia.jpg → banda "Camiceria"
cerimonia.jpg → banda "Cerimonia"
dettaglio-1.jpg, dettaglio-2.jpg, dettaglio-3.jpg → galleria
logo.svg o logo.png → testata e footer

Se una di queste immagini manca, non inventare placeholder generici e non usare foto stock: lascia il contenitore con un fondo color lino 
#E9E2D5 e una texture a spina di pesce disegnata in SVG, con l'etichetta della foto mancante in piccolo maiuscoletto. Devo poter capire a colpo d'occhio cosa manca.

Ritaglia sempre con object-fit: cover e mantieni le proporzioni indicate. Non deformare mai una foto.

Testi di partenza

Qui sotto i contenuti del sito attuale. Non copiarli così come sono: riscrivili. Le indicazioni su come riscriverli sono nella sezione COPY.

[INCOLLA QUI I TESTI DEL SITO ATTUALE]
Dati di contatto (usare esattamente questi)
Telefono: 06 5820 9633
Email: info@antichitelai.it
Monteverde: Via Roberto Alessandri 53, 00151 Roma
Balduina: Via Romeo Rodriguez Pereira 120, 00136 Roma
Vigna Clara: Piazza Carli 10, 00191 Roma
Orari: lunedì–venerdì 10:00–13:00 e 14:30–19:30 · sabato 10:00–13:00 e 16:00–19:30 · domenica chiuso
Instagram: @antichitelai1894official
DIREZIONE VISIVA

Le referenze che ho in mente sono i siti delle sartorie romane storiche (Litrico, Gallo, Cardona) e i temi artigianali tipo "Mr. Murphy" e "Mr. Cobbler". Non puoi aprirli, quindi ti descrivo esattamente cosa prendere da quel mondo:

Cosa rende quei siti credibili

Fotografia grande, calda, protagonista assoluta. Il testo si appoggia alle immagini, non il contrario.
Molto spazio bianco. I blocchi respirano, niente sezioni compresse una sull'altra.
Titoli in serif classico, di dimensioni generose, spesso in corsivo su una parola sola.
Etichette e navigazione in sans-serif maiuscoletto con spaziatura larga tra le lettere.
Alternanza di sezioni chiare e sezioni scure a tutta larghezza, per dare ritmo.
Iconografia del mestiere: forbici, ditale, metro, bottoni, filo. Disegnati a linea sottile, mai emoji, mai icone generiche da libreria.
Un tocco vintage nei dettagli, ma layout moderno e pulito. Niente effetto "carta invecchiata", niente texture pergamena, niente ornamenti barocchi.

Palette

Carta 
#F4F0E8 — fondo principale
Lino 
#E9E2D5 — fondi alternati
Inchiostro 
#23201C — testi e sezioni scure
Bordeaux 
#7A2E39 — accento unico, per CTA in hover, numeri, dettagli
Ottone 
#A98A4B — etichette, filetti sottili, occhielli

Il bordeaux si usa con parsimonia: è la fodera della giacca, non il colore dell'abito.

Tipografia

Titoli: Cormorant Garamond, peso 300, dimensioni ampie (fino a 92px sull'hero desktop), interlinea stretta. Il corsivo va usato su una parola o due per volta, mai su frasi intere.
Testo e interfaccia: Jost, peso 300 per i paragrafi e 400 per le etichette.
Etichette e bottoni: Jost 11px, maiuscolo, letter-spacing 0.2em–0.3em.

Movimento

Zoom lentissimo sulla foto dell'hero al caricamento, 20 secondi, una volta sola.
Comparsa in dissolvenza con leggera salita per i blocchi allo scroll.
Nessun carosello automatico, nessun parallasse, nessun contatore animato, nessuna particella. Rispetta prefers-reduced-motion.
STRUTTURA DELLA PAGINA

1. Testata fissa Logo centrato. A sinistra tre voci di navigazione, a destra il numero di telefono cliccabile e il bottone "Prenota". Sopra l'hero è trasparente con testo bianco; superato l'hero diventa fondo carta con testo scuro. Su mobile restano solo logo e bottone "Prenota".

2. Hero, altezza intera schermo Foto a tutto campo con velatura scura in basso per la leggibilità. Sovra-titolo in maiuscoletto ottone, titolo in Cormorant molto grande con una parola in corsivo, sottotitolo di due righe, due bottoni: "Prenota un appuntamento" (pieno) e "Scopri il su misura" (contornato).

3. Manifesto Fondo carta, una frase sola al centro in Cormorant corsivo, grande. Sotto, quattro strumenti del mestiere in SVG a linea sottile — metro, forbici, bottoni, filo — ciascuno con titolo breve e una riga di testo.

4. Il su misura — tre bande alternate Tre blocchi a due colonne, immagine e testo, con l'immagine che si alterna da sinistra a destra: Abito e giacca, Camiceria, Cerimonia. Ogni blocco ha etichetta, titolo, paragrafo, tre righe di dettagli in forma di elenco con filetto sotto, e un link "Prenota una consulenza" che porta al modulo.

5. Citazione a tutta larghezza Foto di sfondo scurita, una frase breve in Cormorant corsivo molto grande, centrata. Serve a spezzare il ritmo, non a spiegare nulla.

6. La famiglia Fondo lino. Tre tappe in orizzontale: 1894 le origini in Abruzzo, l'arrivo a Roma, oggi con Savino e Antonio. Gli anni in Cormorant grande color bordeaux.

7. Galleria Mosaico asimmetrico di sei immagini, una più grande delle altre. Sotto, un link a Instagram. Nessun lightbox: al click si apre Instagram in una scheda nuova.

8. Tessuti Blocco breve e centrato che nomina Dormeuil, Holland & Sherry e i lanifici italiani, resi come testo in Cormorant e non come loghi.

9. Recensioni Tre recensioni Google, centrate, in Cormorant corsivo, con le stelle in ottone. Lascia i testi come segnaposto evidenti: li sostituirò con le recensioni reali.

10. Prenota — la sezione più importante Unica sezione a fondo inchiostro di tutta la pagina, così spicca. A sinistra: titolo, spiegazione di cosa succede dopo l'invio, quattro punti che abbassano l'attrito (dura circa un'ora, non impegna a nulla, prezzi detti subito, si può venire solo a vedere i tessuti), e i contatti diretti telefono, WhatsApp, email. A destra il modulo.

11. Atelier Le tre sedi in colonne separate da filetti verticali, con indirizzo, telefono e link a Google Maps. Sotto, gli orari su tre colonne.

12. Footer Fondo lino, essenziale: ragione sociale, partita IVA, link social, privacy e cookie.

13. Barra fissa solo su mobile Due bottoni a tutta larghezza in fondo allo schermo: "Chiama" e "Prenota". Sparisce quando il modulo di prenotazione è già visibile.

IL MODULO

Campi, in quest'ordine:

Nome e cognome — obbligatorio
Telefono — obbligatorio, tastiera numerica su mobile
Email — obbligatorio
Cosa ti serve — obbligatorio, a tendina: abito o giacca su misura / camicia su misura / abito da sposo o cerimonia / cappotto o capospalla / cravatte e accessori / non lo so ancora, vorrei un consiglio
Quando ti serve — facoltativo: entro un mese / tra uno e tre mesi / oltre tre mesi / nessuna scadenza
Atelier preferito — obbligatorio, tre riquadri selezionabili con nome e via
Quando preferisci passare — facoltativo: mattina feriale / pomeriggio feriale / sabato
Note — facoltativo, area di testo
Consenso privacy — casella obbligatoria con link alla privacy policy

Regole:

Campi con solo filetto inferiore, nessun riquadro pieno, nessun angolo arrotondato.
Validazione al momento dell'invio, non mentre si scrive. Messaggi di errore che dicono cosa manca, senza scusarsi.
All'invio riuscito il modulo sparisce e compare un messaggio: richiesta ricevuta, ti ricontattiamo entro un giorno lavorativo, più il numero di telefono per chi ha fretta.
Se l'invio fallisce, mostra l'errore e riproponi il numero di telefono. Non perdere mai i dati già digitati.
Campo trappola nascosto per lo spam.
Invio via Formspree: lascia l'endpoint come costante in cima al file, la sostituisco io.
TRACCIAMENTO
Predisponi window.dataLayer e lascia commentato lo spazio per gli ID GA4 e Google Ads in cima all'index.html.
All'invio riuscito del modulo, spingi un evento generate_lead con dentro il servizio scelto e l'atelier scelto.
Su ogni click a telefono, WhatsApp, Google Maps, Instagram e su ogni bottone "Prenota", spingi un evento cta_click con un identificativo che dica da quale punto della pagina arriva.
COPY

Riscrivi tutti i testi partendo da quelli del sito attuale, ma con più carattere.

Come devono suonare

Frasi brevi, verbi concreti, prima persona plurale. Si parla al cliente dandogli del tu.
Racconta gesti, non aggettivi: "il capo torna imbastito e lo correggiamo addosso a te" vale più di "qualità artigianale d'eccellenza".
Il mestiere è già interessante: non serve gonfiarlo.

Vietato Eccellenza, unicità, passione, sapientemente, since 1894, esperienza a 360 gradi, mani sapienti, arte del bello, non solo un abito ma uno stile di vita. Vietati anche i punti esclamativi e le emoji.

Titoli Uno per sezione, brevi, con un'idea sola dentro. Meglio "La prima definisce tutte le altre" che "Le nostre camicie su misura di alta qualità".

Bottoni Sempre lo stesso verbo per la stessa azione in tutta la pagina. Si prenota un appuntamento, non si "invia una richiesta di contatto".

SEO E DATI STRUTTURATI
Title: Antichi Telai 1894 | Sartoria e camiceria su misura a Roma
Meta description sotto i 160 caratteri, con "abiti su misura Roma" e il quartiere Monteverde.
Un solo h1, quello dell'hero. Gerarchia dei titoli corretta a scendere.
Testo alternativo descrittivo su ogni immagine, mai il nome del file.
Dati strutturati JSON-LD di tipo ClothingStore con nome, telefono, email, indirizzo di Monteverde, foundingDate 1894, orari di apertura, areaServed Roma e i profili social.
Tag Open Graph con immagine dedicata.
QUALITÀ
Contrasto conforme AA su tutti i testi, compresi quelli sopra le foto.
Focus visibile su tutti gli elementi navigabili da tastiera.
Il modulo deve essere completabile solo da tastiera.
Nessun overflow orizzontale a nessuna larghezza, controlla a 360, 768, 1024 e 1440 pixel.
prefers-reduced-motion disattiva tutte le animazioni.
COSA NON FARE
Niente carrello, prezzi, catalogo prodotti, e-commerce. Hanno già provato a vendere online e non ha funzionato: il sito serve a portare persone in negozio.
Niente chat automatica, popup di benvenuto, banner di sconto, conto alla rovescia.
Niente newsletter: l'unica raccolta dati è il modulo di prenotazione.
Niente foto stock di modelli sorridenti o di sartorie generiche.
Niente sezioni "i nostri valori" con tre icone e frasi vuote.
Niente gradienti viola, ombre diffuse, angoli molto arrotondati, effetti vetro. Questo sito deve sembrare una sartoria romana, non un prodotto software.
PRIMA CONSEGNA

Costruisci l'intera pagina in un colpo solo, poi fammi vedere il risultato. Non chiedermi conferme intermedie sulle scelte di design: prendi tu le decisioni seguendo queste indicazioni, poi correggiamo insieme su quello che vedo.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sartoria-studio-booking.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4689747a-0bcb-4445-af8d-c9e828f4da8c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
