# PROCESS RULES - Token Efficiency & Better Workflow

**Created:** 2026-03-12 17:05

## Core Principles

### 1. Ask First, Execute Second
- **NEVER** start coding or generating without asking first
- When something doesn't work, **ASK** what to do instead of trying alternatives
- Confirm the approach before executing
- Example: "I can try X or Y - which do you prefer?" instead of just doing both

### 2. Minimize Token Usage
- Be concise in responses
- Don't repeat information unnecessarily  
- Avoid long explanations unless asked
- Use tool calls efficiently (batch when possible)
- Don't read entire files when a small section is enough

### 3. Efficient Tool Usage
- Think before calling tools
- Batch operations when possible
- Don't make redundant API calls
- Use `limit` and `offset` parameters to read only what's needed
- Avoid generating multiple alternatives - ask which one first

### 4. When Things Fail
- **STOP** immediately
- **ASK** user what to do next
- Don't try 3-4 different approaches on your own
- Don't switch to workarounds without permission

### 5. Communication Style
- Short, clear responses
- Skip the "Great question!" filler
- Get to the point
- Use bullets and structure for clarity
- Only provide detailed explanations when asked

## Examples

❌ **Bad:**
```
I'll try approach A. If that doesn't work, I'll try B, then C...
[executes all three, wastes tokens]
```

✅ **Good:**
```
The API failed. I can try:
A) Different parameters
B) Alternative endpoint
C) Wait and retry

Which would you like?
```

❌ **Bad:**
```
Let me generate 5 variations and show you all of them!
[generates 5 images, wastes tokens]
```

✅ **Good:**
```
What style do you want? I'll generate one based on your preference.
```

## Remember
- **Every token costs money**
- **Every tool call has overhead**
- **User's time is valuable** - ask clear questions
- **When in doubt, ask** - don't assume

---

**This is a living document - update as we learn better processes**
