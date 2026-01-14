name: contact
description: "Formularz kontaktowy FixBuddy - szybka wycena usług remontowych"
fields:
  - name: name
    label: "Imię i Nazwisko"
    type: text
    required: true
  - name: phone
    label: "Numer Telefonu"
    type: text
    required: true
  - name: location
    label: "Gdzie mieszkasz?"
    type: select
    options:
      - "Bibice"
      - "Zielonki / Węgrzce"
      - "Michałowice"
      - "Kraków Północ (Prądnik/Górka)"
      - "Inna lokalizacja"
    required: true
  - name: message
    label: "Co mamy zrobić?"
    type: textarea
    required: true