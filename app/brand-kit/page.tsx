"use client";

import { useState } from "react";

const brandColors = {
  primary: {
    teal: { hex: "#1A9E8F", name: "Teal Principal", usage: "Color estrella de la marca. Títulos destacados, iconos, acentos principales, enlaces." },
    tealDark: { hex: "#147A6E", name: "Teal Oscuro", usage: "Hover states, bordes activos, variante de profundidad." },
    tealLight: { hex: "#E6F7F5", name: "Teal Claro", usage: "Fondos de sección, badges, estados hover suaves." },
  },
  secondary: {
    navy: { hex: "#1B2B4B", name: "Navy / Texto Principal", usage: "Titulares, botones primarios, texto principal en modo claro." },
    navyLight: { hex: "#344563", name: "Navy Claro", usage: "Subtítulos, texto secundario en modo oscuro." },
  },
  accent: {
    fire: { hex: "#E85D2A", name: "Fuego / CTA", usage: "Call-to-actions urgentes, badges 'caliente', alertas de oportunidad en ChinaRadar." },
    fireLight: { hex: "#FFF0EB", name: "Fuego Claro", usage: "Fondo de alertas, badges de oportunidad." },
    green: { hex: "#0FAF62", name: "Verde Éxito", usage: "Márgenes positivos, confirmaciones, checks, métricas favorables." },
    greenLight: { hex: "#ECFDF5", name: "Verde Claro", usage: "Fondo de métricas positivas." },
    gold: { hex: "#E5A820", name: "Oro / Premium", usage: "Plan Enterprise, elementos premium, nivel intermedio de score." },
  },
  neutral: {
    white: { hex: "#FFFFFF", name: "Blanco", usage: "Fondo principal modo claro." },
    offwhite: { hex: "#F8F9FA", name: "Gris Papel", usage: "Fondo de secciones alternas, cards." },
    border: { hex: "#E2E8F0", name: "Gris Borde", usage: "Bordes de cards, separadores, líneas." },
    textMuted: { hex: "#64748B", name: "Gris Texto", usage: "Texto secundario, descripciones, metadatos." },
    dark: { hex: "#0A0A0E", name: "Negro Profundo", usage: "Fondo principal modo oscuro (ChinaRadar)." },
    darkSurface: { hex: "#13131A", name: "Superficie Oscura", usage: "Cards en modo oscuro." },
  },
};

const typography = {
  display: { name: "Fraunces", weight: "700-900", usage: "Títulos principales (h1, h2) en la web principal. Transmite autoridad y experiencia.", sample: "Importa de China", fallback: "Georgia, serif" },
  heading: { name: "DM Sans", weight: "600-800", usage: "Títulos de sección, UI de ChinaRadar, nombres de producto, labels. Moderno y legible.", sample: "ChinaRadar Pro", fallback: "system-ui, sans-serif" },
  body: { name: "DM Sans", weight: "400-500", usage: "Texto de cuerpo, descripciones, párrafos. Legibilidad máxima.", sample: "Descubre qué importar esta semana con datos reales de demanda y márgenes.", fallback: "system-ui, sans-serif" },
  mono: { name: "DM Mono", weight: "400-500", usage: "Datos numéricos, scores, precios, códigos TARIC, métricas.", sample: "62% margen · €2.80/ud · Score: 94", fallback: "monospace" },
};

const modes = {
  light: { name: "Modo Claro", usage: "Web principal (importardechina.com), blog, páginas de producto, servicios.", bg: "#FFFFFF", text: "#1B2B4B", surface: "#F8F9FA", border: "#E2E8F0" },
  dark: { name: "Modo Oscuro", usage: "ChinaRadar app, dashboards de datos, herramientas interactivas.", bg: "#0A0A0E", text: "#FFFFFF", surface: "#13131A", border: "rgba(255,255,255,0.08)" },
};

function ColorSwatch({ hex, name, usage, size = "normal" }: { hex: string; name: string; usage?: string; size?: "normal" | "large" }) {
  const [copied, setCopied] = useState(false);
  const isLight = hex.startsWith("#F") || hex.startsWith("#E") || hex === "#FFFFFF";
  return (
    <div
      onClick={() => { navigator.clipboard?.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      style={{
        cursor: "pointer", transition: "transform 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <div style={{
        width: size === "large" ? 160 : 120, height: size === "large" ? 100 : 72,
        background: hex, borderRadius: 12,
        border: isLight ? "1px solid #E2E8F0" : "none",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: isLight ? "#1B2B4B" : "#fff", opacity: copied ? 1 : 0, transition: "opacity 0.2s" }}>
          {copied ? "¡Copiado!" : ""}
        </span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: "#1B2B4B" }}>{name}</div>
      <div style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", color: "#64748B", marginBottom: 2 }}>{hex}</div>
      {usage && <div style={{ fontSize: 11, color: "#94A3B8", maxWidth: size === "large" ? 160 : 120, lineHeight: 1.4 }}>{usage}</div>}
    </div>
  );
}

function Section({ title, subtitle, children, id }: { title: string; subtitle: string; children: React.ReactNode; id: string }) {
  return (
    <section id={id} style={{ marginBottom: 64 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#1A9E8F", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 6 }}>{subtitle}</div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1B2B4B", margin: 0, letterSpacing: "-0.02em" }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function BrandGuide() {
  const [activeTab, setActiveTab] = useState("colors");

  const tabs = [
    { id: "colors", label: "Colores" },
    { id: "typography", label: "Tipografía" },
    { id: "modes", label: "Modos" },
    { id: "logos", label: "Logos" },
    { id: "components", label: "Componentes" },
    { id: "rules", label: "Reglas" },
  ];

  return (
    <div style={{
      minHeight: "100vh", background: "#FFFFFF",
      fontFamily: "'DM Sans', system-ui, sans-serif", color: "#1B2B4B",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&family=Fraunces:wght@700;800;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <header style={{
        padding: "32px 40px", borderBottom: "1px solid #E2E8F0",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        position: "sticky", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", zIndex: 50,
      }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}>
            <span style={{ color: "#1A9E8F" }}>●</span> Brand Kit
          </div>
          <div style={{ fontSize: 12, color: "#64748B" }}>ImportarDeChina.com · Sistema de diseño unificado · v1.0</div>
        </div>
        <div style={{ display: "flex", gap: 4, background: "#F8F9FA", borderRadius: 10, padding: 4 }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 600, fontFamily: "inherit",
              background: activeTab === t.id ? "#1B2B4B" : "transparent",
              color: activeTab === t.id ? "#fff" : "#64748B",
              transition: "all 0.2s",
            }}>{t.label}</button>
          ))}
        </div>
      </header>

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 40px" }}>

        {/* COLORS */}
        {activeTab === "colors" && (
          <>
            <Section title="Paleta de colores principal" subtitle="Identidad cromática" id="primary">
              <p style={{ color: "#64748B", marginBottom: 32, lineHeight: 1.6, maxWidth: 600 }}>
                El teal transmite confianza y expertise. El navy aporta seriedad. El fuego genera urgencia y acción.
                Juntos crean un ecosistema visual coherente entre la web principal y las herramientas.
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#1A9E8F" }}>Primarios — Identidad de marca</h3>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 40 }}>
                {Object.values(brandColors.primary).map(c => <ColorSwatch key={c.hex} {...c} size="large" />)}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#1B2B4B" }}>Secundarios — Texto y estructura</h3>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 40 }}>
                {Object.values(brandColors.secondary).map(c => <ColorSwatch key={c.hex} {...c} size="large" />)}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#E85D2A" }}>Acentos — Acción y estado</h3>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 40 }}>
                {Object.values(brandColors.accent).map(c => <ColorSwatch key={c.hex} {...c} />)}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#64748B" }}>Neutros — Fondos y bordes</h3>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {Object.values(brandColors.neutral).map(c => <ColorSwatch key={c.hex} {...c} />)}
              </div>
            </Section>
          </>
        )}

        {/* TYPOGRAPHY */}
        {activeTab === "typography" && (
          <Section title="Sistema tipográfico" subtitle="Tipografía" id="typography">
            <p style={{ color: "#64748B", marginBottom: 32, lineHeight: 1.6, maxWidth: 600 }}>
              Fraunces para los títulos de la web principal (autoridad, confianza). DM Sans para todo lo demás
              (moderna, técnica, legible). DM Mono para datos y métricas.
            </p>

            {Object.entries(typography).map(([key, font]) => (
              <div key={key} style={{
                background: "#F8F9FA", borderRadius: 16, padding: 28, marginBottom: 16,
                border: "1px solid #E2E8F0",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#1A9E8F", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{key}</div>
                    <div style={{ fontSize: 20, fontWeight: 700 }}>{font.name}</div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={{ padding: "4px 10px", background: "#E6F7F5", borderRadius: 6, fontSize: 12, color: "#1A9E8F", fontWeight: 600 }}>Weight: {font.weight}</span>
                  </div>
                </div>
                <div style={{
                  fontFamily: key === "display" ? "'Fraunces', Georgia, serif" : key === "mono" ? "'DM Mono', monospace" : "'DM Sans', sans-serif",
                  fontSize: key === "display" ? 36 : key === "heading" ? 28 : key === "mono" ? 18 : 16,
                  fontWeight: key === "display" || key === "heading" ? 700 : 400,
                  color: "#1B2B4B", lineHeight: 1.4, marginBottom: 12,
                  letterSpacing: key === "display" ? "-0.02em" : key === "mono" ? "0.02em" : "0",
                }}>
                  {font.sample}
                </div>
                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>{font.usage}</div>
              </div>
            ))}

            <div style={{ background: "#FFF0EB", borderRadius: 12, padding: 20, marginTop: 24, border: "1px solid rgba(232,93,42,0.15)" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#E85D2A", marginBottom: 8 }}>⚠️ Escala tipográfica</div>
              <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
                H1: 48-64px · H2: 28-36px · H3: 20-24px · Body: 15-16px · Small: 12-13px · Micro: 10-11px.
                En ChinaRadar (modo oscuro), subir el body a 15px mínimo para legibilidad en pantalla.
              </div>
            </div>
          </Section>
        )}

        {/* MODES */}
        {activeTab === "modes" && (
          <Section title="Modo claro y modo oscuro" subtitle="Aplicación contextual" id="modes">
            <p style={{ color: "#64748B", marginBottom: 32, lineHeight: 1.6, maxWidth: 600 }}>
              La web principal usa modo claro (confianza, profesionalidad). ChinaRadar y las herramientas de datos usan modo oscuro (inmersión, foco en datos). Ambos comparten la misma paleta.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {Object.entries(modes).map(([key, mode]) => (
                <div key={key} style={{
                  background: mode.bg, borderRadius: 20, padding: 32, border: `1px solid ${mode.border}`,
                  color: mode.text,
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#1A9E8F", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{mode.name}</div>
                  <div style={{ fontSize: 13, color: key === "dark" ? "rgba(255,255,255,0.5)" : "#64748B", marginBottom: 24, lineHeight: 1.5 }}>{mode.usage}</div>

                  {/* Mini mockup */}
                  <div style={{ background: mode.surface, borderRadius: 12, padding: 16, border: `1px solid ${mode.border}`, marginBottom: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #1A9E8F, #147A6E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>📡</div>
                      <span style={{ fontWeight: 700, fontSize: 14 }}>China<span style={{ color: "#1A9E8F" }}>Radar</span></span>
                    </div>
                    <div style={{ fontSize: 12, color: key === "dark" ? "rgba(255,255,255,0.4)" : "#64748B", marginBottom: 8 }}>Producto trending</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 700, fontSize: 15 }}>Lámpara LED Solar</span>
                      <span style={{ color: "#0FAF62", fontWeight: 800, fontSize: 16 }}>62%</span>
                    </div>
                    <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                      <span style={{ padding: "4px 10px", borderRadius: 99, background: key === "dark" ? "rgba(232,93,42,0.12)" : "#FFF0EB", color: "#E85D2A", fontSize: 11, fontWeight: 600 }}>🔥 Caliente</span>
                      <span style={{ padding: "4px 10px", borderRadius: 99, background: key === "dark" ? "rgba(26,158,143,0.12)" : "#E6F7F5", color: "#1A9E8F", fontSize: 11, fontWeight: 600 }}>↗ Tendencia</span>
                    </div>
                  </div>
                  <button style={{
                    width: "100%", padding: "12px", borderRadius: 10, border: "none",
                    background: key === "dark" ? "#1A9E8F" : "#1B2B4B",
                    color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "inherit", cursor: "pointer",
                  }}>
                    {key === "dark" ? "Ver ranking completo" : "Explorar productos"}
                  </button>
                </div>
              ))}
            </div>

            <div style={{ background: "#E6F7F5", borderRadius: 12, padding: 20, marginTop: 24, border: "1px solid rgba(26,158,143,0.15)" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1A9E8F", marginBottom: 8 }}>🔗 Regla de transición</div>
              <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
                Cuando el usuario pasa de importardechina.com (claro) a ChinaRadar (oscuro), el teal #1A9E8F actúa como hilo conductor visual. El logo, los badges y los acentos principales mantienen el mismo color en ambos modos.
              </div>
            </div>
          </Section>
        )}

        {/* LOGOS */}
        {activeTab === "logos" && (
          <Section title="Sistema de logos" subtitle="Identidad visual" id="logos">
            <p style={{ color: "#64748B", marginBottom: 32, lineHeight: 1.6, maxWidth: 600 }}>
              El logo principal de ImportarDeChina se mantiene. ChinaRadar tiene un sub-logo que conecta visualmente con la marca madre mediante el teal y el tag "by importardechina.com".
            </p>

            {/* Main logo */}
            <div style={{ background: "#F8F9FA", borderRadius: 16, padding: 40, marginBottom: 20, border: "1px solid #E2E8F0", textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Logo Principal</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 8 }}>
                <div style={{ width: 48, height: 48, borderRadius: 99, background: "linear-gradient(135deg, #1A9E8F, #147A6E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🎋</div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1B2B4B", letterSpacing: "0.08em", textTransform: "uppercase" }}>IMPORTAR</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#1A9E8F", letterSpacing: "-0.01em", marginTop: -4 }}>de CHINA</div>
                </div>
              </div>
            </div>

            {/* ChinaRadar logos */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <div style={{ background: "#FFFFFF", borderRadius: 16, padding: 40, border: "1px solid #E2E8F0", textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>ChinaRadar — Modo Claro</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #1A9E8F, #147A6E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📡</div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#1B2B4B", letterSpacing: "-0.02em" }}>
                      China<span style={{ color: "#1A9E8F" }}>Radar</span>
                    </div>
                    <div style={{ fontSize: 9, color: "#64748B", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: -2 }}>by importardechina.com</div>
                  </div>
                </div>
              </div>
              <div style={{ background: "#0A0A0E", borderRadius: 16, padding: 40, textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>ChinaRadar — Modo Oscuro</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #1A9E8F, #147A6E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📡</div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
                      China<span style={{ color: "#1A9E8F" }}>Radar</span>
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: -2 }}>by importardechina.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "#E6F7F5", borderRadius: 12, padding: 20, border: "1px solid rgba(26,158,143,0.15)" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1A9E8F", marginBottom: 8 }}>📐 Reglas del logo</div>
              <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.8 }}>
                • El icono 📡 siempre va sobre fondo teal degradado (nunca plano).<br/>
                • "China" siempre en teal #1A9E8F, "Radar" en el color del texto del contexto.<br/>
                • El tag "by importardechina.com" siempre presente en aplicaciones independientes.<br/>
                • Espacio mínimo alrededor del logo: 1x la altura del icono.<br/>
                • Nunca deformar, rotar, cambiar colores o añadir sombras al logo.
              </div>
            </div>
          </Section>
        )}

        {/* COMPONENTS */}
        {activeTab === "components" && (
          <Section title="Componentes base" subtitle="UI Kit" id="components">
            <p style={{ color: "#64748B", marginBottom: 32, lineHeight: 1.6, maxWidth: 600 }}>
              Estos componentes se usan en toda la plataforma. Los colores se adaptan al modo (claro/oscuro) pero la estructura es idéntica.
            </p>

            {/* Buttons */}
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Botones</h3>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <button style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: "#1B2B4B", color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "inherit", cursor: "pointer" }}>Primario Navy</button>
              <button style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: "#1A9E8F", color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "inherit", cursor: "pointer" }}>Primario Teal</button>
              <button style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: "#E85D2A", color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "inherit", cursor: "pointer" }}>CTA Fuego</button>
              <button style={{ padding: "12px 28px", borderRadius: 10, border: "2px solid #E2E8F0", background: "transparent", color: "#1B2B4B", fontWeight: 600, fontSize: 14, fontFamily: "inherit", cursor: "pointer" }}>Secundario</button>
              <button style={{ padding: "12px 28px", borderRadius: 99, border: "none", background: "#1A9E8F", color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "inherit", cursor: "pointer" }}>Pill CTA</button>
            </div>

            {/* Badges */}
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Badges de score</h3>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <span style={{ padding: "6px 14px", borderRadius: 99, background: "#FFF0EB", color: "#E85D2A", fontSize: 13, fontWeight: 600 }}>🔥 Oportunidad caliente</span>
              <span style={{ padding: "6px 14px", borderRadius: 99, background: "#ECFDF5", color: "#0FAF62", fontSize: 13, fontWeight: 600 }}>🟢 Oportunidad</span>
              <span style={{ padding: "6px 14px", borderRadius: 99, background: "#FFFBEB", color: "#E5A820", fontSize: 13, fontWeight: 600 }}>🟡 Potencial</span>
              <span style={{ padding: "6px 14px", borderRadius: 99, background: "#E6F7F5", color: "#1A9E8F", fontSize: 13, fontWeight: 600 }}>↗ Tendencia</span>
            </div>

            {/* Cards */}
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Cards de producto</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
              {/* Light card */}
              <div style={{ background: "#F8F9FA", borderRadius: 16, padding: 20, border: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: 10, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Modo claro</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontWeight: 700 }}>Lámpara LED Solar</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 700, color: "#0FAF62" }}>62%</span>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ padding: "3px 8px", borderRadius: 6, background: "#FFF0EB", color: "#E85D2A", fontSize: 11, fontWeight: 600 }}>🔥 94</span>
                  <span style={{ padding: "3px 8px", borderRadius: 6, background: "#E6F7F5", color: "#1A9E8F", fontSize: 11, fontWeight: 600 }}>€2.80/ud</span>
                </div>
              </div>
              {/* Dark card */}
              <div style={{ background: "#13131A", borderRadius: 16, padding: 20, border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Modo oscuro</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontWeight: 700 }}>Lámpara LED Solar</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 700, color: "#0FAF62" }}>62%</span>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(232,93,42,0.12)", color: "#E85D2A", fontSize: 11, fontWeight: 600 }}>🔥 94</span>
                  <span style={{ padding: "3px 8px", borderRadius: 6, background: "rgba(26,158,143,0.12)", color: "#1A9E8F", fontSize: 11, fontWeight: 600 }}>€2.80/ud</span>
                </div>
              </div>
            </div>

            {/* Form inputs */}
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Inputs</h3>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <input placeholder="tu@email.com" style={{ padding: "12px 18px", borderRadius: 10, border: "2px solid #E2E8F0", background: "#fff", fontSize: 14, fontFamily: "inherit", width: 240, outline: "none" }} />
              <input placeholder="Búsqueda de producto..." style={{ padding: "12px 18px", borderRadius: 10, border: "2px solid #1A9E8F", background: "#E6F7F5", fontSize: 14, fontFamily: "inherit", width: 240, outline: "none", color: "#1B2B4B" }} />
            </div>
          </Section>
        )}

        {/* RULES */}
        {activeTab === "rules" && (
          <Section title="Reglas de aplicación" subtitle="Governance" id="rules">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "✅", title: "Jerarquía cromática", desc: "Teal = marca e identidad. Navy = texto y estructura. Fuego = acción y urgencia. Verde = datos positivos. Nunca usar fuego como color de marca ni teal como color de alerta." },
                { icon: "✅", title: "Un solo CTA por pantalla", desc: "Cada pantalla tiene un único botón principal (navy o fuego). El resto son secundarios (outline o ghost). Nunca dos botones del mismo peso visual juntos." },
                { icon: "✅", title: "Modo claro = confianza", desc: "importardechina.com, blog, landing pages, páginas de producto y servicios siempre en modo claro. Transmitir profesionalidad y seguridad." },
                { icon: "✅", title: "Modo oscuro = herramienta", desc: "ChinaRadar, dashboards, calculadoras y herramientas de datos en modo oscuro. Transmitir inmersión, foco y tecnología." },
                { icon: "✅", title: "Tag 'by importardechina.com'", desc: "Cualquier sub-producto (ChinaRadar, NegociaBot, etc.) lleva siempre el tag de la marca madre debajo del logo. Tamaño: 50% menor que el nombre del producto." },
                { icon: "✅", title: "Fraunces solo para H1/H2", desc: "La tipografía serif (Fraunces) solo se usa en los títulos principales de la web. Todo lo demás es DM Sans. Nunca mezclar Fraunces con modo oscuro." },
                { icon: "⛔", title: "Nunca usar naranja puro (#FF4D00)", desc: "El fuego de la marca es #E85D2A (más cálido, menos agresivo). El naranja puro se reserva como prohibido — demasiado 'startup genérica'." },
                { icon: "⛔", title: "Nunca combinar teal + fuego como colores iguales", desc: "Teal siempre domina (60-70%), fuego siempre es acento puntual (5-10%). Si ambos compiten, la jerarquía visual se rompe." },
              ].map((rule, i) => (
                <div key={i} style={{
                  background: rule.icon === "⛔" ? "#FFF0EB" : "#F8F9FA",
                  borderRadius: 12, padding: 20,
                  border: `1px solid ${rule.icon === "⛔" ? "rgba(232,93,42,0.15)" : "#E2E8F0"}`,
                }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "start" }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{rule.icon}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{rule.title}</div>
                      <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>{rule.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}
      </main>
    </div>
  );
}
