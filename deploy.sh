#!/bin/bash
exec 200>/tmp/deploy-finance-001.lock
flock -n 200 || { echo "$(date): деплой уже выполняется, пропускаю"; exit 1; }

set -e
cd /var/www/finance-001

echo "=== Сохранение локальных правок (если есть) ==="
git stash

echo "=== Обновление кода из GitHub ==="
git pull

echo "=== Восстановление локальных правок ==="
git stash pop || true

echo "=== Установка зависимостей ==="
npm install

echo "=== Сборка проекта ==="
npm run build

echo "=== Перезапуск сайта ==="
pm2 restart finance-001

echo "=== Отправка в IndexNow ==="
python3 scripts/indexnow-submit.py || echo "IndexNow: отправка не удалась (не критично для деплоя)"

echo "=== Готово! ==="
