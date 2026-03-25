#!/bin/bash
#
# 啟動京都旅遊指南網頁容器
#

set -euo pipefail

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly COMPOSE_FILE="${SCRIPT_DIR}/docker/docker-compose.yml"

echo "正在啟動京都旅遊指南..."
docker compose -f "${COMPOSE_FILE}" up -d --build
echo "網頁已啟動：http://localhost:8888"
