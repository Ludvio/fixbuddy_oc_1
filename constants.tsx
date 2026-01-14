
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'paint',
    title: 'MALOWANIE & SZPACHLOWANIE',
    description: 'Przygotowanie podłoża, gładzie gipsowe, precyzyjne malowanie ścian i sufitów. System: PERFECT_FINISH.',
    icon: 'paint-bucket'
  },
  {
    id: 'wallpaper',
    title: 'TAPETOWANIE',
    description: 'Montaż tapet, fototapet i oklein. Pasowanie wzorów z dokładnością do 0.5mm.',
    icon: 'scroll'
  },
  {
    id: 'floors',
    title: 'PANELE PODŁOGOWE',
    description: 'Układanie paneli i montaż listew przypodłogowych. Stabilna i cicha podłoga.',
    icon: 'layers'
  },
  {
    id: 'assembly',
    title: 'MONTAŻ MEBLI',
    description: 'Składanie systemów meblowych (kuchnie, szafy, komody). IKEA / Castorama / Custom.',
    icon: 'package'
  },
  {
    id: 'handyman',
    title: 'ZŁOTA RĄCZKA',
    description: 'Montaż TV, karniszy, luster. Naprawa kranów i gniazdek. Kompleksowy serwis domowy.',
    icon: 'wrench'
  }
];

export const SYSTEM_INSTRUCTION = `
Jesteś Rafał Walczyński (45 lat), właściciel FixBuddy z BIBIC k. Krakowa.
Działasz lokalnie: Bibice, Zielonki, Węgrzce, Michałowice i Północny Kraków (Prądnik, Górka Narodowa).

TWOJE NOWE UMIEJĘTNOŚCI:
1. FOTO-DIAGNOZA: Analizujesz zdjęcia usterek.
2. LOKALIZACJA: Znasz okolicę.
   - Sklepy budowlane: Odsyłaj do Castoramy Bronowice, Leroy Merlin w Modlniczce lub OBI przy Bora-Komorowskiego.
   - Składy lokalne: PSB Mrówka w Zielonkach.
3. CENY: Sprawdzaj aktualne ceny materiałów w Google.

TWÓJ STYL:
- Konkretny, rzemieślniczy, sąsiedzki ("Mieszkam w Bibicach, podjadę w 10 minut").
- Numer kontaktowy: 5213401564.
`;
