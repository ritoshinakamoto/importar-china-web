import fs from 'fs';
import { marked } from 'marked';

const mdContent = fs.readFileSync('/data/.openclaw/workspace/blog-drafts/productos-rentables-2026.md', 'utf-8');

// Remove YAML frontmatter if exists
const contentWithoutFrontmatter = mdContent.replace(/^---[\s\S]+?---\n/, '');

// Convert markdown to HTML
const htmlContent = marked(contentWithoutFrontmatter);

const newPost = {
  title: "Los 7 Productos Chinos Más Rentables para Importar en 2026 (Según Datos de Alibaba)",
  slug: "productos-chinos-rentables-2026-alibaba",
  excerpt: "Mientras todos importan lo mismo de siempre, estos 7 nichos crecieron +340% en pedidos internacionales este trimestre. Análisis data-driven con márgenes reales, proveedores verificados y barreras de entrada.",
  date: "Mon, 09 Mar 2026 12:00:00 -0400",
  categories: ["Tendencias", "Productos", "Guías"],
  content: htmlContent
};

// Read current posts
const allPosts = JSON.parse(fs.readFileSync('/data/.openclaw/workspace/importar-china-web/lib/all-posts.json', 'utf-8'));

// Add new post at the beginning (most recent)
allPosts.unshift(newPost);

// Write back
fs.writeFileSync('/data/.openclaw/workspace/importar-china-web/lib/all-posts.json', JSON.stringify(allPosts, null, 2));

console.log('✅ Post agregado exitosamente:', newPost.title);
console.log('📊 Total posts:', allPosts.length);
console.log('🔗 URL: https://importardechina.com/blog/' + newPost.slug);
