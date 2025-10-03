# Оптимизация производительности / Performance Optimization

## ✅ Выполненные оптимизации

### 1. **Оптимизация изображений (Image Optimization)**

#### Включена автоматическая оптимизация Next.js:
```javascript
// next.config.mjs
images: {
  formats: ['image/webp', 'image/avif'],  // Современные форматы
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,  // Кэширование 60 секунд
}
```

**Результат:**
- ✅ Автоконвертация в WebP/AVIF (сжатие до 70%)
- ✅ Адаптивные размеры для разных экранов
- ✅ Кэширование обработанных изображений

### 2. **Стратегии загрузки (Loading Strategies)**

#### Hero изображение (приоритетное):
```tsx
<Image priority quality={85} sizes="100vw" />
```
- Загружается первым
- Высокое качество (85%)
- Полная ширина экрана

#### События (eager loading):
```tsx
<Image loading="eager" quality={85} sizes="(max-width: 768px) 100vw, 80vw" />
```
- Загружается сразу (видимая область)
- Адаптивные размеры

#### Команда (lazy loading):
```tsx
<Image loading="lazy" quality={80} sizes="(max-width: 768px) 280px, 320px" />
```
- Отложенная загрузка
- Фиксированные размеры карточек

#### Декоративные элементы (lazy + низкое качество):
```tsx
<Image loading="lazy" quality={70-75} />
```
- Загружаются последними
- Пониженное качество (незаметно для декора)

### 3. **Сжатие контента (Compression)**
```javascript
compress: true  // GZIP/Brotli сжатие
```

### 4. **Размеры исходных файлов**

**Большие файлы (требуют внимания):**
- `hero.png` - 2.9MB → сжимается Next.js
- `teams-star.png` - 1.4MB → quality=70, lazy
- `under-who-we-are.png` - 425KB → quality=75, lazy
- `events-left.png` - 575KB → quality=70, lazy

**Фото команды:**
- `ali.JPG` - 8.5MB ⚠️ (очень большой!)
- `alnazar.JPG` - 1.8MB
- `daniyal.jpg` - 4.7MB ⚠️
- `baurzhan.png` - 1.6MB

## 📊 Ожидаемые улучшения

### До оптимизации:
- Размер страницы: ~15-20MB
- Время загрузки: 5-10 секунд (медленный интернет)
- Format: PNG/JPG (без сжатия)

### После оптимизации:
- Размер страницы: ~3-5MB (WebP)
- Время загрузки: 1-3 секунды
- Format: WebP/AVIF + lazy loading
- **Ускорение: до 5x раз** 🚀

## 🔧 Дополнительные рекомендации

### 1. Оптимизация исходных файлов (опционально)

Можно дополнительно сжать исходники перед загрузкой:

**Инструменты для сжатия:**
```bash
# Установка ImageMagick
brew install imagemagick

# Сжатие PNG (без потери качества)
magick mogrify -strip -quality 85 *.png

# Конвертация в WebP
magick convert input.jpg -quality 85 output.webp

# Массовое сжатие JPG
magick mogrify -strip -quality 85 -sampling-factor 4:2:0 *.jpg
```

**Онлайн инструменты:**
- [TinyPNG](https://tinypng.com/) - сжатие PNG/JPG
- [Squoosh](https://squoosh.app/) - WebP конвертация
- [ImageOptim](https://imageoptim.com/) - Mac приложение

### 2. CDN (для продакшена)

```javascript
// next.config.mjs
images: {
  loader: 'custom',
  loaderFile: './my-loader.js',
  domains: ['cdn.yourdomain.com'],
}
```

### 3. Preloading критичных ресурсов

```tsx
// app/layout.tsx
<head>
  <link rel="preload" href="/hero.png" as="image" />
</head>
```

### 4. Мониторинг производительности

**Google PageSpeed Insights:**
```
https://pagespeed.web.dev/?url=nunexusclub.com
```

**Цели:**
- ✅ Performance Score: >90
- ✅ First Contentful Paint (FCP): <1.8s
- ✅ Largest Contentful Paint (LCP): <2.5s
- ✅ Cumulative Layout Shift (CLS): <0.1

## 🎯 Текущие настройки качества

| Элемент | Quality | Loading | Приоритет |
|---------|---------|---------|-----------|
| Hero | 85% | priority | Высший |
| События | 85% | eager | Высокий |
| Команда | 80% | lazy | Средний |
| Декор | 70-75% | lazy | Низкий |

## ⚡ Советы по дальнейшей оптимизации

### 1. Используйте правильные форматы:
- **Фото**: JPG (или WebP)
- **Иллюстрации с прозрачностью**: PNG (или WebP)
- **Декор/фоны**: WebP/AVIF

### 2. Оптимальные размеры:
- Hero: 1920x1080px максимум
- События: 1200x800px
- Команда: 640x640px
- Декор: 800x800px максимум

### 3. Экспериментируйте с quality:
```tsx
quality={60}  // Декор (не заметно)
quality={75}  // Обычные фото
quality={85}  // Важные изображения
quality={95}  // Только для критичных
```

## 🚀 Как проверить результат

1. **Откройте DevTools (F12)**
2. **Вкладка Network**
3. **Обновите страницу (Ctrl+Shift+R)**
4. **Проверьте:**
   - Размер изображений (.webp или .avif)
   - Время загрузки
   - Порядок загрузки (priority, eager, lazy)

### Ожидаемые результаты:
```
hero.png → hero.webp (300-500KB)
teams-star.png → teams-star.webp (100-200KB)
ali.JPG → ali.webp (400-600KB вместо 8.5MB!)
```

## 📱 Мобильная оптимизация

Next.js автоматически:
- ✅ Генерирует меньшие размеры для мобильных
- ✅ Использует `sizes` атрибут для выбора размера
- ✅ Применяет WebP/AVIF для поддерживающих браузеров

## ⚠️ Важно

После изменения `next.config.mjs` **перезапустите dev server**:

```bash
# Остановите сервер (Ctrl+C)
# Удалите кэш
rm -rf .next

# Запустите снова
npm run dev
```

---

**Обновлено:** 3 октября 2025
**Автор:** NU Nexus Club IT Team

