---
description: Szybki deploy dla projektów web
agent: general
---

# Web Deployer - Szybki Deployment Workflow

## 🚀 SZYBKI DEPLOY
Komenda: `/web-deploy [opcjonalna wiadomość]`

## 🔧 CO ROBI:
1. **Status check** - sprawdź czy są zmiany
2. **Build** - `npm run build`
3. **Stage all** - `git add .`
4. **Commit** - `[wiadomość]` lub auto-generated
5. **Push** - `git push`
6. **Verify** - sprawdź czy powiódł się

## ⚡ BŁYSKAWICZNE TRYBY:
- `/web-deploy` - deploy ze standardową wiadomością
- `/web-deploy "Fix formularza"` - deploy z wiadomością
- `/web-deploy "Hotfix critical bug"` - szybka poprawka

## 🎯 KONFIGURACJA:
- **Build command:** `npm run build`
- **Remote:** origin/main
- **Verification:** Git log + status check
- **Error handling:** Rollback na ostatni działający commit

## 📋 CHECKLISTA AUTOMATYCZNA:
- [ ] Build succeeded?
- [ ] Wszystkie zmiany staged?
- [ ] Push successful?
- [ ] Remote repo up to date?

## 💡 PRZYKŁADY UŻYCIA:
```bash
/web-deploy                    # standardowy deploy
/web-deploy "Update contact form" # z wiadomością
/web-deploy "Critical hotfix"     # szybka poprawka
```

## 🔄 ERROR RECOVERY:
Jeśli build lub push nie zadziała:
- Auto-rollback na ostatni działający commit
- Informacja o błędzie i sugestie rozwiązania
- Możliwość ponowienia próby deployu