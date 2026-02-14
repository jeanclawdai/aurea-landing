# MEMORY.md - Long-Term Memory

## About You (User)
- **Name:** JB
- **Telegram:** @Jborgia (ID: 2134797207)
- **Email:** jeanclawdg.ai@gmail.com (mentioned in bootstrap)
- **Timezone:** Europe/Lisbon (GMT+0)
- **GitHub:** jeanclawdai

## Your Preferences
- **UI/UX:** Material Design 3, dark themes, pastel accent colors
- **Work Style:** Technical, independent work preferred ("do this overnight")
- **Communication:** Direct, no fluff
- **Platform:** Uses mobile (needs mobile-friendly features)
- **Frameworks:** Can use Tailwind CSS, React, Next.js, etc.

## File Organization
**Base:** `~/Documents/Clawbot/`
- `Projects/` - Code and development projects
- `Assets/` - Images, designs, media
- `Finances/` - Financial documents
- `Agents/` - AI agent configurations

**Store files there when it makes sense** (user's preference)

## Active Projects

### Task Dashboard (Main Focus as of Feb 2026)
**Purpose:** Todo/task management with AI assistant integration  
**Repo:** https://github.com/jeanclawdai/task-dashboard  
**Live:** https://task-dashboard-kohl-eight.vercel.app  
**Password:** jeanclawd2026

**Tech Stack:**
- Frontend: Vanilla JS, Material Design 3
- Backend: Vercel serverless functions
- Database: Vercel KV (Upstash Redis)
- Notifications: Telegram Bot API

**Key Features:**
- 4 columns: To Do, In Progress, Review, Done
- Drag & drop (desktop) + move buttons (mobile)
- Telegram notifications when tasks change
- Filters: All/Pending/Running/Completed
- Notifications toggle (ON/OFF)

**Integration:**
- I can add tasks when you ask via Telegram
- I can start/update tasks when you tell me
- You get notifications when tasks move

## Things You've Built Together
1. **Task Dashboard** (Feb 13-14, 2026)
   - Full-stack web app
   - Telegram integration
   - Production deployment on Vercel

## Important Decisions
- **Material Design 3:** Chosen for dashboard UI (Feb 14)
- **Vercel KV over Redis:** Simpler for serverless (Feb 14)
- **API-first architecture:** Frontend calls backend API for all operations (Feb 14)
- **Telegram as primary notification channel** (Feb 14)

## Lessons Learned
1. **Mobile matters:** Always test mobile UX (drag-drop doesn't work)
2. **API integration critical:** LocalStorage-only = no backend features
3. **Overnight work pattern:** You like giving me long tasks to do independently
4. **Production-first:** Not interested in prototypes, wants working solutions

## Your Questions About Me
**Q: Do you save local data? Memory in 1 month?**  
**A:** (Explained in this conversation) I persist via files, not innate memory. Must write things down.

## Memory Backup System
**Script:** `backup-memory.sh`  
**Schedule:** Once per day (automated via HEARTBEAT.md)  
**Retention:** Last 5 days  
**Location:** `memory/backups/MEMORY-YYYY-MM-DD.md`

The backup runs automatically and rotates old backups. If anything goes wrong with MEMORY.md, restore from `memory/backups/`.

---

**Last Updated:** 2026-02-14  
**Memory Files:** See `Jean Clawd Memory/YYYY-MM-DD.md` for daily logs  
**Backups:** `Jean Clawd Memory/backups/MEMORY-*.md` (rolling 5-day history)
