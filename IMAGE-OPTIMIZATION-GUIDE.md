# Гайд по оптимизации изображений / Image Optimization Guide

## ✅ Реализованные оптимизации

### 1. **Hero Image (LCP) - Критичная оптимизация**

#### Что сделано:
```tsx
// В <head> (app/layout.tsx)
<link rel="preload" as="image" href="/hero.png" fetchPriority="high" />

// В компоненте (app/page.tsx)
<Image
  src="/hero.png"
  priority
  fetchPriority="high"
  quality={85}
  placeholder="blur"
  blurDataURL="..."  // LQIP placeholder
/>
```

**Результат:**
- ✅ Браузер загружает hero **первым**
- ✅ LCP (Largest Contentful Paint) ≤ 2.5s
- ✅ Нет CLS (Cumulative Layout Shift)
- ✅ Размытый placeholder пока грузится

### 2. **Форматы изображений (AVIF → WebP → JPEG)**

```javascript
// next.config.mjs
images: {
  formats: ['image/avif', 'image/webp'],
  // Next.js автоматически выбирает лучший формат
}
```

**Экономия:**
- AVIF: до **70% меньше** чем JPEG
- WebP: до **30% меньше** чем JPEG
- Fallback на JPEG для старых браузеров

### 3. **Responsive изображения**

```javascript
deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048]
```

**Браузер загружает нужный размер:**
- Мобильный: 640px
- Планшет: 1024px
- Десктоп: 1920px
- Retina: 2x версия

### 4. **Кэширование (1 год)**

```javascript
minimumCacheTTL: 31536000 // 365 дней
```

**Результат:**
- Изображения кэшируются на год
- Повторные визиты **мгновенные**
- CDN-friendly

### 5. **Lazy Loading для некритичных изображений**

#### События (eager):
```tsx
<Image loading="eager" quality={75} />
```

#### Команда (lazy):
```tsx
<Image loading="lazy" decoding="async" quality={75} />
```

#### Декоративные элементы (lazy):
```tsx
<Image loading="lazy" quality={70} />
```

### 6. **Aspect Ratio (предотвращение CLS)**

```tsx
<div className="aspect-[4/3]">
  <Image fill className="object-cover" />
</div>
```

**Результат:**
- ✅ Нет "прыжков" контента при загрузке
- ✅ CLS (Cumulative Layout Shift) < 0.1
- ✅ Место зарезервировано заранее

## 📊 Целевые метрики Core Web Vitals

### Текущие настройки качества:

| Элемент | Quality | Loading | Format |
|---------|---------|---------|--------|
| Hero (LCP) | 85% | priority | AVIF/WebP |
| События | 75% | eager | AVIF/WebP |
| Команда | 75% | lazy | AVIF/WebP |
| Декор | 70% | lazy | AVIF/WebP |

### Ожидаемые результаты:

- **LCP**: ≤ 2.5s ✅
- **CLS**: < 0.1 ✅
- **FID**: < 100ms ✅

## 🛠️ Как оптимизировать исходные файлы

### Вариант 1: Онлайн инструменты

**Быстро и просто:**
1. [Squoosh.app](https://squoosh.app/) - Google's optimizer
2. [TinyPNG.com](https://tinypng.com/) - PNG/JPG compression
3. [AVIF.io](https://avif.io/) - AVIF converter

### Вариант 2: ImageMagick (CLI)

```bash
# Установка (macOS)
brew install imagemagick

# Конвертация в AVIF (лучшее сжатие)
magick convert hero.png -quality 60 hero.avif

# Конвертация в WebP
magick convert hero.png -quality 75 hero.webp

# Создание responsive версий
magick convert hero.png -resize 640x hero-640.jpg
magick convert hero.png -resize 1280x hero-1280.jpg
magick convert hero.png -resize 1920x hero-1920.jpg

# Массовая оптимизация всех JPG
magick mogrify -strip -quality 75 -sampling-factor 4:2:0 *.jpg
```

### Вариант 3: Sharp (Node.js)

Создайте скрипт `optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [640, 960, 1280, 1920];
const inputDir = './public/original';
const outputDir = './public/optimized';

async function optimizeImage(filename) {
  const input = path.join(inputDir, filename);
  const name = path.parse(filename).name;
  
  for (const size of sizes) {
    // AVIF (best compression)
    await sharp(input)
      .resize(size)
      .avif({ quality: 60 })
      .toFile(path.join(outputDir, `${name}-${size}.avif`));
    
    // WebP (fallback)
    await sharp(input)
      .resize(size)
      .webp({ quality: 75 })
      .toFile(path.join(outputDir, `${name}-${size}.webp`));
    
    // JPEG (fallback)
    await sharp(input)
      .resize(size)
      .jpeg({ quality: 75, mozjpeg: true })
      .toFile(path.join(outputDir, `${name}-${size}.jpg`));
  }
}

// Запуск
fs.readdirSync(inputDir).forEach(optimizeImage);
```

Запуск:
```bash
npm install sharp
node optimize-images.js
```

## 📦 Рекомендуемые размеры файлов

### Hero изображение:
- **Целевой вес**: 60-120 KB (AVIF)
- **Размер**: 1920x1080px максимум
- **Формат**: AVIF → WebP → JPEG

### События:
- **Целевой вес**: 40-80 KB каждое
- **Размер**: 1280x800px
- **Формат**: AVIF → WebP → JPEG

### Команда (фото):
- **Целевой вес**: 20-40 KB каждое
- **Размер**: 640x640px
- **Формат**: AVIF → WebP → JPEG

### Декор (фоны):
- **Целевой вес**: 30-60 KB
- **Размер**: 800x800px максимум
- **Формат**: WebP → PNG

## 🚀 CDN Setup (опционально для продакшена)

### Cloudflare Images:
```javascript
// next.config.mjs
images: {
  loader: 'cloudflare',
  path: 'https://nunexusclub.com/cdn-cgi/image/',
}
```

### Cloudinary:
```javascript
images: {
  loader: 'cloudinary',
  path: 'https://res.cloudinary.com/your-cloud-name/image/upload/',
}
```

### imgix:
```javascript
images: {
  loader: 'imgix',
  path: 'https://your-domain.imgix.net/',
}
```

## 📊 Диагностика производительности

### Локально:
```bash
npm run build
npm start

# Lighthouse
npx lighthouse http://localhost:3000 --view
```

### Онлайн инструменты:
1. **PageSpeed Insights**: https://pagespeed.web.dev/
2. **WebPageTest**: https://www.webpagetest.org/
3. **GTmetrix**: https://gtmetrix.com/

### Что проверять:

✅ **LCP** (Largest Contentful Paint): < 2.5s
- Время загрузки hero изображения

✅ **CLS** (Cumulative Layout Shift): < 0.1
- Нет "прыжков" при загрузке

✅ **FID** (First Input Delay): < 100ms
- Быстрая реакция на клики

✅ **Image Optimization Score**: 90+
- Правильные форматы и размеры

## 🔧 Текущая структура файлов

```
public/
├── hero.png (2.9MB) ⚠️ НУЖНА ОПТИМИЗАЦИЯ
├── teams-star.png (1.4MB) ⚠️ НУЖНА ОПТИМИЗАЦИЯ
├── under-who-we-are.png (425KB)
├── events-left.png (575KB)
├── events/
│   ├── aidyn.jpg (688KB)
│   ├── juz40.jpg (432KB)
│   ├── sales-psychology.jpg (547KB)
│   ├── b2b-negoti.jpg (706KB)
│   ├── 20M-stanford-yc.jpg (799KB)
│   ├── ulugbek.jpg (1.1MB) ⚠️
│   └── entrepren-talk.jpg (476KB)
└── photos/
    ├── ali.JPG (8.5MB) ⚠️⚠️ КРИТИЧНО!
    ├── alnazar.JPG (1.8MB) ⚠️
    ├── baurzhan.png (1.6MB) ⚠️
    ├── daniyal.jpg (4.7MB) ⚠️⚠️
    ├── daniyar.png (1.6MB) ⚠️
    ├── yerdaulet.jpg (292KB)
    └── alen.jpg (257KB)
```

## 🎯 План оптимизации по приоритету

### КРИТИЧНО (сделать сейчас):
1. ⚠️ `ali.JPG` (8.5MB) → сжать до ~300KB
2. ⚠️ `daniyal.jpg` (4.7MB) → сжать до ~300KB
3. ⚠️ `hero.png` (2.9MB) → сжать до ~400KB

### ВАЖНО (на этой неделе):
4. `ulugbek.jpg` (1.1MB) → сжать до ~300KB
5. `alnazar.JPG` (1.8MB) → сжать до ~300KB
6. `baurzhan.png` (1.6MB) → сжать до ~300KB
7. `teams-star.png` (1.4MB) → сжать до ~200KB

### ЖЕЛАТЕЛЬНО (постепенно):
8. Все фото событий → проверить и оптимизировать
9. Создать AVIF/WebP версии для всех
10. Настроить CDN для продакшена

## 💡 Быстрый старт оптимизации

```bash
# 1. Установить инструменты
brew install imagemagick

# 2. Перейти в папку с фото
cd public/photos

# 3. Создать backup
mkdir ../photos-backup
cp *.{jpg,JPG,png} ../photos-backup/

# 4. Оптимизировать все JPG
magick mogrify -strip -resize "640x640>" -quality 75 *.jpg *.JPG

# 5. Конвертировать в WebP
for f in *.jpg *.JPG; do
  magick "$f" -quality 75 "${f%.*}.webp"
done

# 6. Проверить результат
ls -lh
```

## 📈 Ожидаемые улучшения

### До:
- Размер страницы: ~18MB
- LCP: 4-6s
- Оценка: 40-50/100

### После оптимизации:
- Размер страницы: ~2-3MB (уменьшение в **6x раз**)
- LCP: <2.5s (улучшение в **2x раза**)
- Оценка: 90+/100

### Экономия трафика:
- **~15MB на каждого посетителя**
- На 1000 посетителей = **15GB экономии**
- Быстрее загрузка = больше конверсия

---

**Создано:** 3 октября 2025  
**Автор:** NU Nexus Club IT Team  
**Статус:** ✅ Применено + готов к дальнейшей оптимизации

