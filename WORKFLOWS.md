# WORKFLOWS.md - Multi-Model Usage Guide

## Quick Reference

### Default Models by Task
- **💬 Chat:** Minimax M2.5 (default)
- **🖼️ Image Reading:** Kimi K2.5 (automatic)
- **🧑‍💻 Code Review:** Claude Sonnet 4
- **🎨 Image Generation:** Gemini 2.5 Flash Image

### Model Switching
```bash
# Default chat
/model minimax/MiniMax-M2.5

# Code review mode  
/model anthropic/claude-sonnet-4-20250514

# Back to default
/model minimax/MiniMax-M2.5
```

### Image Generation Script
Create images with this working command:

```bash
#!/bin/bash
# Usage: ./generate_image.sh "A cute cat on a windowsill"
PROMPT="$1"
curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=AIzaSyC434BDvg48vW2VOerGBiSrnYvHsLTNsBg" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d "{\"contents\":[{\"parts\":[{\"text\":\"$PROMPT\"}]}]}" | python3 -c "
import sys, json, base64, datetime
d = json.load(sys.stdin)
if 'candidates' in d:
    parts = d['candidates'][0]['content']['parts']
    for part in parts:
        if 'inlineData' in part:
            timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
            filename = f'/Users/jeanclawd/.openclaw/workspace/generated_{timestamp}.jpg'
            with open(filename, 'wb') as f:
                f.write(base64.b64decode(part['inlineData']['data']))
            print(f'Image saved: {filename}')
"
```

### API Keys (Working)
- **Google:** `AIzaSyC434BDvg48vW2VOerGBiSrnYvHsLTNsBg`
- **Moonshot:** `sk-nYK32jrvaHNIOBbq7smqMMxWrVwURSuGPGtYhirRWBSgK7tq`
- **Anthropic:** `sk-ant-oat01-...` (in config)

## Common Workflows

### 1. Frontend Design Review
1. `/model anthropic/claude-sonnet-4-20250514`
2. Upload image/code for review
3. Get detailed code analysis

### 2. Image Analysis + Generation
1. Upload image (automatically uses Kimi)
2. Get analysis
3. Generate variations with image generation script

### 3. Content Creation
1. Use Minimax for ideation
2. Generate supporting images with Gemini
3. Review with Claude for refinement

**Last Updated:** 2026-03-12 15:31 GMT
**Status:** All models tested and working ✅