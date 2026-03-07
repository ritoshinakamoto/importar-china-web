import fs from 'fs';
import { marked } from 'marked';

const mdContent = fs.readFileSync('/data/.openclaw/workspace/memory/blog-drafts/2026-03-02-claude-contrato-alibaba.md', 'utf-8');

// Remove YAML frontmatter if exists
const contentWithoutFrontmatter = mdContent.replace(/^---[\s\S]+?---\n/, '');

// Convert markdown to HTML
const htmlContent = marked(contentWithoutFrontmatter);

const newPost = {
  title: "Cómo Usé Claude para Detectar Cláusulas Peligrosas en Mi Contrato con Alibaba (Y Ahorré $12,000)",
  slug: "claude-contrato-alibaba-ahorro-12000",
  excerpt: "Mi proveedor chino parecía confiable... hasta que la IA encontró una cláusula que me obligaba a comprar 500 unidades adicionales sin aviso previo. Sistema completo de 4 pasos para revisar contratos con IA.",
  date: "Sun, 02 Mar 2026 09:00:00 +0000",
  categories: ["Proveedores", "IA", "Guías"],
  content: htmlContent
};

// Read current posts
const allPosts = JSON.parse(fs.readFileSync('/data/.openclaw/workspace/importar-china-web/lib/all-posts.json', 'utf-8'));

// Add new post at the beginning (most recent)
allPosts.unshift(newPost);

// Write back
fs.writeFileSync('/data/.openclaw/workspace/importar-china-web/lib/all-posts.json', JSON.stringify(allPosts, null, 2));

console.log('✅ Post agregado exitosamente. Total posts:', allPosts.length);
