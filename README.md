# Mini Shop

אפליקציית חנות קטנה שנבנתה עם React ו-TypeScript

## פיצ'רים

הצגת מוצרים מ-Fake Store API, חיפוש מוצרים, עמוד פרטי מוצר, הוספה והסרה ממועדפים, מצב Light / DarK, מצבי loading, error empty, ניווט עם React Router

## טכנולוגיות

React, TypeScript, React Router, Zustand, Context API, CSS לא סיימתי

## ניהול State

### Zustand
משמש לניהול המועדפים בכל האפליקציה.

כולל:
הוספת מוצר למועדפים, הסרת מוצר מהמועדפים, בדיקה אם מוצר נמצא במועדפים, הצגת מספר המועדפים ב-Header

### Context API
משמש לניהול מצב התצוגה Light / Dark.

## Hooks

"useState" לניהול state מקומי, למשל החיפוש
"useEffect" לטעינת נתונים ופעולות צד
"useRef" לפוקוס אוטומטי על שדה החיפוש
"useParams" לקריאת מזהה המוצר מה-URL
"useNavigate" לחזרה לעמוד המוצרים
"useContext" לגישה ל-Theme
"useFetch" Custom Hook לטעינת נתונים מה-API עם loading ו-error

## Routes

`/` רשימת מוצרים
`/products/:id` פרטי מוצר
`/favorites` מוצרים מועדפים

## הרצת הפרויקט

npm install
npm run dev