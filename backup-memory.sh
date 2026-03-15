#!/bin/bash
# Memory Backup System
# Keeps last 5 days of MEMORY.md backups

WORKSPACE="/Users/jeanclawd/.openclaw/workspace"
BACKUP_DIR="$WORKSPACE/Jean Clawd Memory/backups"
MEMORY_FILE="$WORKSPACE/Jean Clawd Memory/MEMORY.md"
DATE=$(date +%Y-%m-%d)
BACKUP_FILE="$BACKUP_DIR/MEMORY-$DATE.md"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Only backup if MEMORY.md exists and has changed
if [ -f "$MEMORY_FILE" ]; then
    # Check if today's backup already exists
    if [ ! -f "$BACKUP_FILE" ]; then
        echo "📦 Creating backup: MEMORY-$DATE.md"
        cp "$MEMORY_FILE" "$BACKUP_FILE"
        
        # Keep only last 5 backups
        cd "$BACKUP_DIR"
        ls -t MEMORY-*.md | tail -n +6 | xargs -I {} rm -f {}
        
        echo "✅ Backup complete. Keeping last 5 backups:"
        ls -t MEMORY-*.md
    else
        echo "ℹ️  Backup for today already exists"
    fi
else
    echo "⚠️  MEMORY.md not found"
fi
