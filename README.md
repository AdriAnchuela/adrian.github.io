# anchuela.com — Portfolio

Portfolio personal de Adrián Anchuela. Sitio estático construido con [Astro](https://astro.build), bilingüe (EN en `/`, ES en `/es/`), con tema claro/oscuro y desplegable en GitHub Pages.

## Desarrollo

Requiere **Node 22+** (con Homebrew: `brew install node`; el Node 18 de nvm no sirve).

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # build de producción en dist/
npm run preview   # servir el build localmente
```

## Estructura

- `src/data/` — proyectos, experiencia, educación y datos de contacto (contenido en EN y ES juntos).
- `src/i18n/` — textos de interfaz por idioma.
- `src/components/` — una sección por componente (`Hero`, `Projects`, etc.).
- `src/layouts/Base.astro` — SEO, hreflang y el script que aplica el tema antes del primer render.
- `public/cv/` — **copia aquí tu CV como `AnchuelaAdrianCV.pdf`** (los botones de descarga apuntan a esa ruta).

Para editar contenido casi nunca hace falta tocar componentes: edita `src/data/*` y `src/i18n/*`.

## Publicar en GitHub Pages

1. Crea un repo en GitHub y sube este proyecto:
   ```bash
   git remote add origin git@github.com:TU_USUARIO/portfolio.git
   git push -u origin main
   ```
2. En el repo: **Settings → Pages → Source: GitHub Actions**.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica el sitio.

## Apuntar anchuela.com

El archivo `public/CNAME` ya contiene `anchuela.com`. En tu proveedor DNS:

1. Crea 4 registros **A** para el dominio raíz (`@`) apuntando a las IPs de GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. (Opcional) Registro **CNAME** para `www` apuntando a `TU_USUARIO.github.io`.
3. En **Settings → Pages → Custom domain** escribe `anchuela.com` y activa **Enforce HTTPS** cuando el certificado esté listo (puede tardar unos minutos tras propagarse el DNS).

Con dominio custom (CNAME) el sitio se sirve en la raíz, así que no importa el nombre del repo.
