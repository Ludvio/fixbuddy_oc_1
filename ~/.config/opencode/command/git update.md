---
description: Update repository with latest changes and push
agent: general
---

Run Git update workflow to stage, commit and push changes. Usage: /git update [commit message]

Performs these steps automatically:
1. git status (check for changes)
2. git add . (stage all changes)
3. git commit -m "[commit message]" (uses provided message or auto-generates based on changes)
4. git push (push to remote)

If no changes detected, informs that repository is up to date.
If no commit message provided, generates one based on modified files.