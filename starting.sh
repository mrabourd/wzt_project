#!/bin/bash
SESSION="my_project"

echo "Postgres"
if sudo service postgresql status > /dev/null 2>&1; then
    echo "✅ Postgres is already started"
else
    echo "🚀 Postgres is stopped. Starting postgres..."
    sudo service postgresql start
fi

echo "📂 Backend"
tmux new-session -d -s $SESSION -n "backend" "cd backend-project && npm run start:dev; exec bash"
sleep 5

echo "📂 remote-addresses..."
tmux new-window -t $SESSION:1 -n "remote" "cd frontend-project && npm run dev -w remote-addresses; exec bash"
sleep 10

echo "📂 host..."
tmux new-window -t $SESSION:2 -n "host" "cd frontend-project && npm run dev -w host; exec bash"

echo "⏳ waiting for servers..."
sleep 15

explorer.exe "http://localhost:3001"
tmux attach-session -t $SESSION
