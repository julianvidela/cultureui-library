# 🌈 Culture UI Library

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/julian-videla-87857a253/)
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/julianvidela)

## 🚀 Instalación

```bash
npm install cultureui-library
# o
yarn add cultureui-library
```

## 📦 Requisitos

- React 18+
- TailwindCSS 3.x
- PostCSS configurado (como cualquier proyecto con Tailwind)

> ✅ Los estilos se importan automáticamente. **No hace falta hacer** `import 'cultureui-library/dist/styles.css'`.

---

## 🧩 Uso básico

```tsx
import { AvatarStack, Modal } from "cultureui-library";

export default function MyComponent() {
  return (
    <div className="p-8">
      <AvatarStack
        people={[
          { image: "/img1.jpg", name: "Juli", role: "Dev" },
          { image: "/img2.jpg", name: "Marce", role: "UX" },
        ]}
      />
    </div>
  );
}
```

🎨 Los componentes están estilizados con TailwindCSS y **no requieren configuración adicional**.

---

## 🧱 Componentes disponibles

- `AvatarStack`
- `Carousel`
- `FloatingNavBar`
- `Modal`
- `SocialSelector`
- `StatsWidget`
- `MotionText`
- `AnimatedTooltip`
- `FAQAccordion`
- `TestimonialSlider`

---

## ⚙️ Configuración Tailwind

Asegurate de incluir `cultureui-library` en tu `tailwind.config.js` para que funcionen las clases internas:

```js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/cultureui-library/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🧪 Roadmap (en progreso)

- ✅ Componentes accesibles
- 🌗 Soporte para dark mode dinámico
- 🔐 Integración directa con Supabase Auth

---

## 🧠 Autor

Creado por [@julianvidela](https://github.com/julianvidela) con ❤️ y obsesión por el detalle.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/julian-videla-87857a253/)
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/julianvidela)
