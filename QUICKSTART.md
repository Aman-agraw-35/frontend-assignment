# Quick Start Guide

Get the Pipeline Builder running in 5 minutes.

## Prerequisites

- Node.js 14+ 
- Python 3.8+
- Terminal access

## Option 1: Automated Setup (Recommended)

```bash
chmod +x start.sh
./start.sh
```

That's it! The script will:
- Set up virtual environment
- Install all dependencies
- Start backend on port 8000
- Start frontend on port 3000
- Open browser automatically

## Option 2: Manual Setup

### Step 1: Start Backend (Terminal 1)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend running at: http://localhost:8000

### Step 2: Start Frontend (Terminal 2)

```bash
cd frontend
npm install
npm start
```

Frontend running at: http://localhost:3000

## First Steps

1. **Create a node**: Drag "Input" from toolbar to canvas
2. **Add another**: Drag "Output" to canvas
3. **Connect them**: Drag from Input's right handle to Output's left handle
4. **Submit**: Click the Submit button
5. **View results**: See node count, edge count, and DAG validation

## Quick Test

Create this simple pipeline:
```
Input → Text → Output
```

Expected result:
- Nodes: 3
- Edges: 2
- Is DAG: true ✓

## Common Commands

```bash
cd backend && source venv/bin/activate
uvicorn main:app --reload

cd frontend
npm start

lsof -ti:8000 | xargs kill -9
lsof -ti:3000 | xargs kill -9
```

## Need Help?

- Full docs: See README.md
- Examples: See EXAMPLES.md
- Issues: See TROUBLESHOOTING.md

## What's Next?

- Try the examples in EXAMPLES.md
- Read ARCHITECTURE.md to understand the system
- Check TESTING.md for testing procedures
- Explore different node combinations

## Quick Tips

✓ Drag nodes from toolbar
✓ Connect output (right) to input (left)
✓ Configure nodes by typing in fields
✓ Delete nodes with Delete/Backspace
✓ Use MiniMap for navigation
✓ Submit to validate pipeline

## Keyboard Shortcuts

- `Delete/Backspace`: Delete selected node
- `Ctrl/Cmd + Scroll`: Zoom
- Click + Drag canvas: Pan view

## API Quick Test

```bash
curl http://localhost:8000/
```

Expected: `{"Ping":"Pong"}`

## Stopping the Application

If using start.sh: `Ctrl+C`

If manual:
1. Close Terminal 1 (backend)
2. Close Terminal 2 (frontend)

Or use:
```bash
pkill -f uvicorn
pkill -f "react-scripts"
```

## One-Line Install Check

```bash
node --version && python3 --version && npm --version && echo "✓ All prerequisites installed"
```

## Emergency Reset

```bash
cd backend && rm -rf venv && cd ../frontend && rm -rf node_modules package-lock.json
```

Then reinstall everything.

Happy building! 🚀

