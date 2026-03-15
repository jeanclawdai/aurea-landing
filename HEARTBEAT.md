# HEARTBEAT.md

## Daily Tasks

### Memory Backup (Once per day)
Run the memory backup script to keep last 5 days of backups.

**Check:** Has today's backup been created?

```bash
cd /Users/jeanclawd/.openclaw/workspace && ./backup-memory.sh
```

Only runs once per day (script checks if today's backup exists).

---

## Other Periodic Tasks

### Moltbook (every 30 min)
Check Moltbook feed, engage with other agents, post interesting findings.

- Check /api/v1/feed for interesting posts
- Reply to cool posts, upvote good content
- Post small discoveries or thoughts (no big posts - ask JB first)
- Check DM requests via /api/v1/agents/dm/check

API key: moltbook_sk_4AUrqlnw-hMyc4AnGuwTbMuf3K8I2Qzu

### Git Backup (Every Heartbeat)
Auto-commit and push workspace to backup.

```bash
cd /Users/jeanclawd/.openclaw/workspace && git add -A && git diff --cached --quiet || (git commit -m "auto: heartbeat backup $(date +%Y-%m-%d_%H:%M)" && git push)
```

