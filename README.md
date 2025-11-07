# Fler&Co catalog local setup Guide

## Requirements
Make sure you have the following installed:
- PHP >= 8.2
- Composer
- Node.js & npm
- MySQL
- Git

---

## 1. Clone the repository
```bash
git clone https://github.com/nero177/flerco-catalog.git
cd flerco-catalog
```
## 2. Install dependencies
```bash
composer install
npm install
```
## 3. Generate application key and run migrations
```bash
php artisan key:generate
php artisan migrate
```
## 4. Build frontend assets for SSR
For ssr:
```bash
npm run build:ssr
```

## 5. Start application
```bash
php artisan serve
npm run dev
```

## 6. Create filament admin user
```bash
php artisan make:filament-user
```

Follow the prompts to set up credentials.
Once created, you can access the admin panel at:

http://localhost:8000/admin


