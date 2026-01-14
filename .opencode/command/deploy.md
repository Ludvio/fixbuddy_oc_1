---
description: Kuloodporny deploy workflow - stage, build, verify, commit, push, verify
agent: general
---

# Kuloodporny Deploy Workflow

Krok 1: Sprawdź status repozytorium
- `git status` - sprawdź czy są zmiany
- Jeśli nie ma zmian -> informuj "nie ma co commitować"
- Jeśli są zmiany -> kontynuuj

Krok 2: Build projektu
- `npm run build` - zbuduj projekt
- Sprawdź czy build się powiódł
- Jeśli nie -> błąd krytyczny, stop

Krok 3: Stage zmian
- `git add .` - dodaj wszystkie zmiany
- Sprawdź czy staging się powiódł

Krok 4: Commit
- `git commit -m "[automatyczny commit]"` - commituj zmiany
- Sprawdź hash commita
- Jeśli nie -> błąd krytyczny, stop

Krok 5: Push na GitHub
- `git push` - wypchnij zmiany
- Sprawdź czy push się powiódł
- Jeśli nie -> błąd krytyczny, stop

Krok 6: Weryfikacja na GitHub
- Sprawdź czy commit jest zdalny
- Jeśli nie -> powtórz push
- Jeśli nadal nie -> błąd krytyczny

Krok 7: Weryfikacja Netlify
- Informuj że deploy rozpoczety
- Nie deklaruj sukcesu bez sprawdzenia

Zasady:
- NIGDY nie mów "sukces" bez weryfikacji
- Każdy krok musi być zweryfikowany
- Przy błędzie - informuj i przerywaj
- Tylko fakty, zero założeń