# S

## The heck is this?

S er en [https://facebook.github.io/react/](React)-implementasjon av [https://straumr.skedsmo.kommune.no](Straumr). Komponenter implementeres fortløpende og ved behov/ønske.

## Hva er S til?

+ Prototyping
+ Testing av idéer
+ SPAer
+ Annet???

## Hva er S IKKE til?

+ Produksjon (not just yet)
+ Sårbare applikasjoner (ikke uten grundig security hardening)

## Åssen?

+ Klon repoet
+ `npm run setup` for å installere og sette opp mapper
+ `npm run start` for å starte utviklingsserver
+ Deployment/bygging for prod kommer etterhvert

## Hvor er kartene?

Ikke her. De skal implementeres i en egen pakke siden, ettersom det krever Leaflet. Denne pakken skal ha færrest mulig avhengigheter for å sikre minst mulig filstørrelse, slik at kart kan tas inn ved behov fra en annen pakke.

## Regler for implementering

+ Nettleserstøtte er IE11+.
+ Ingen tredjepartsbiblioteker skal installeres i dependencies "for convenience". Vi skriver selv så langt det går.
+ ES6.
+ Inline styles skal kun brukes til UI states, f.eks `display: none;` for å gjemme containere og lignende. Straumr brukes til resten.
+ Vi utvikler etter nyeste versjon av Straumr-CSS'en.

Skrevet av Vegar because why the heck not
