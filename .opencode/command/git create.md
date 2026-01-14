---
description: Complete Git repository setup and initial push
agent: general
---

Run complete Git initialization workflow. Usage: /git create [remote-url]

Performs these steps:
1. git init (if not already initialized)
2. git add README.md (or all files if no README)
3. git commit -m "first commit"
4. git branch -M main
5. git remote add origin [remote-url] (if URL provided)
6. git push -u origin main

If remote already exists, will use existing remote configuration.
Shows progress and handles errors gracefully.