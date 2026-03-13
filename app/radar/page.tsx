"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Lámpara LED Solar Jardín", category: "Hogar & Jardín", score: 94, trend: "up", demand: 92, margin: 89, competition: 28, ease: 85, priceOrigin: 2.80, priceDest: 18.99, moq: 100, investment: 680, marginPct: 62, sellers: 23, searches: 14200, badge: "fire" },
  { id: 2, name: "Organizador Maquillaje Acrílico", category: "Belleza", score: 91, trend: "up", demand: 88, margin: 94, competition: 35, ease: 90, priceOrigin: 1.50, priceDest: 14.99, moq: 200, investment: 720, marginPct: 71, sellers: 18, searches: 9800, badge: "fire" },
  { id: 3, name: "Funda Silicona MagSafe iPhone", category: "Electrónica", score: 87, trend: "up", demand: 95, margin: 82, competition: 45, ease: 78, priceOrigin: 0.85, priceDest: 9.99, moq: 500, investment: 850, marginPct: 58, sellers: 67, searches: 31500, badge: "hot" },
  { id: 4, name: "Set Pinceles Caligrafía", category: "Arte & Papelería", score: 85, trend: "up", demand: 72, margin: 91, competition: 15, ease: 92, priceOrigin: 3.20, priceDest: 24.99, moq: 50, investment: 410, marginPct: 68, sellers: 8, searches: 4300, badge: "hot" },
  { id: 5, name: "Bolsa Térmica Almuerzo Premium", category: "Hogar", score: 83, trend: "stable", demand: 80, margin: 78, competition: 40, ease: 82, priceOrigin: 2.10, priceDest: 15.99, moq: 200, investment: 820, marginPct: 55, sellers: 34, searches: 8700, badge: "hot" },
  { id: 6, name: "Difusor Aceites Esenciales Mini", category: "Hogar & Bienestar", score: 81, trend: "up", demand: 85, margin: 76, competition: 52, ease: 70, priceOrigin: 4.50, priceDest: 29.99, moq: 100, investment: 890, marginPct: 52, sellers: 45, searches: 18400, badge: "potential" },
  { id: 7, name: "Cargador Inalámbrico 3 en 1", category: "Electrónica", score: 79, trend: "stable", demand: 90, margin: 68, competition: 60, ease: 65, priceOrigin: 5.80, priceDest: 32.99, moq: 100, investment: 1120, marginPct: 48, sellers: 89, searches: 22100, badge: "potential" },
  { id: 8, name: "Pegatinas Pared 3D Infantil", category: "Decoración", score: 77, trend: "up", demand: 65, margin: 88, competition: 22, ease: 95, priceOrigin: 0.40, priceDest: 7.99, moq: 500, investment: 520, marginPct: 74, sellers: 12, searches: 3200, badge: "potential" },
];

const freeLimit = 3;

const badgeConfig = {
  fire: { label: "🔥 OPORTUNIDAD CALIENTE", color: "#FF4D00", bg: "rgba(255,77,0,0.08)" },
  hot: { label: "🟢 OPORTUNIDAD", color: "#00C853", bg: "rgba(0,200,83,0.08)" },
  potential: { label: "🟡 POTENCIAL", color: "#FFB300", bg: "rgba(255,179,0,0.08)" },
};

const trendIcon = { up: "↗", stable: "→", down: "↘" } as const;
const trendColor = { up: "#00C853", stable: "#FFB300", down: "#↘" } as const;

function ScoreRing({ score, size = 56 }: { score: number; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 85 ? "#FF4D00" : score >= 70 ? "#00C853" : "#FFB300";
  return (
    <svg width={size} height={size} style={{ flexShrink: 0 }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="4"
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: "stroke-dashoffset 1s ease" }} />
      <text x={size/2} y={size/2 + 1} textAnchor="middle" dominantBaseline="middle"
        fill={color} fontSize={size * 0.3} fontWeight="800" fontFamily="'DM Sans', sans-serif">
        {score}
      </text>
    </svg>
  );
}

function MiniBar({ value, label, color = "#FF4D00" }: { value: number; label: string; color?: string }) {
  return (
    <div style={{ flex: 1, minWidth: 60 }}>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</div>
      <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
        <div style={{ height: 4, background: color, borderRadius: 2, width: `${value}%`, transition: "width 1s ease" }} />
      </div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{value}/100</div>
    </div>
  );
}

function ProductCard({ product, index, isLocked, onClick }: any) {
  const badge = badgeConfig[product.badge as keyof typeof badgeConfig];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onClick={onClick} 
      onMouseEnter={() => !isLocked && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isLocked ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.03)",
        border: isHovered ? "1px solid rgba(255,77,0,0.3)" : "1px solid rgba(255,255,255,0.06)",
        borderRadius: 16, 
        padding: "20px 24px", 
        cursor: "pointer",
        transition: "all 0.3s ease", 
        position: "relative", 
        overflow: "hidden",
        filter: isLocked ? "blur(2px)" : "none",
        opacity: isLocked ? 0.5 : 1,
        transform: isHovered && !isLocked ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.2)", fontWeight: 800, width: 24, fontFamily: "'DM Mono', monospace" }}>
          #{index + 1}
        </div>
        <ScoreRing score={product.score} />
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{product.name}</span>
            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: badge.bg, color: badge.color, fontWeight: 600 }}>{badge.label}</span>
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>{product.category}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <MiniBar value={product.demand} label="Demanda" color="#00C853" />
            <MiniBar value={product.margin} label="Margen" color="#FF4D00" />
            <MiniBar value={100 - product.competition} label="Competencia" color="#FFB300" />
            <MiniBar value={product.ease} label="Facilidad" color="#00BCD4" />
          </div>
        </div>
      </div>
      {!isLocked && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, fontSize: 13 }}>
          <div>
            <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Precio origen</div>
            <div style={{ fontWeight: 700 }}>{product.priceOrigin.toFixed(2)}€</div>
          </div>
          <div>
            <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Precio destino</div>
            <div style={{ fontWeight: 700 }}>{product.priceDest.toFixed(2)}€</div>
          </div>
          <div>
            <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Margen bruto</div>
            <div style={{ fontWeight: 700, color: "#00C853" }}>{product.marginPct}%</div>
          </div>
          <div>
            <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>MOQ</div>
            <div style={{ fontWeight: 700 }}>{product.moq} uds</div>
          </div>
          <div>
            <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Inversión mín.</div>
            <div style={{ fontWeight: 700 }}>{product.investment}€</div>
          </div>
          <div>
            <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Tendencia</div>
            <div style={{ fontWeight: 700, color: trendColor[product.trend as keyof typeof trendColor] }}>{trendIcon[product.trend as keyof typeof trendIcon]} {product.trend === "up" ? "Creciente" : product.trend === "stable" ? "Estable" : "Decreciente"}</div>
          </div>
        </div>
      )}
      {isLocked && (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", pointerEvents: "none", zIndex: 10 }}>
          <div style={{ fontSize: 32, marginBottom: 4 }}>🔒</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Desbloquea con Pro</div>
        </div>
      )}
    </div>
  );
}

function ProductDetail({ product, onClose }: any) {
  const [units, setUnits] = useState(product.moq);
  const shippingPerUnit = 1.20;
  const tariffRate = 0.04;
  const vatRate = 0.21;
  const costPerUnit = product.priceOrigin + shippingPerUnit + (product.priceOrigin * tariffRate);
  const costTotal = costPerUnit * units;
  const costWithVat = costTotal * (1 + vatRate);
  const revenue = product.priceDest * units;
  const profit = revenue - costWithVat;
  const realMargin = ((profit / revenue) * 100).toFixed(1);
  const breakeven = Math.ceil(costWithVat / product.priceDest);
  const badge = badgeConfig[product.badge as keyof typeof badgeConfig];

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#13131a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, maxWidth: 640, width: "100%", maxHeight: "90vh", overflowY: "auto", padding: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 11, color: badge.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
              {badge.label}
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fff", margin: 0 }}>{product.name}</h2>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{product.category}</div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.06)", border: "none", color: "#fff", width: 36, height: 36, borderRadius: 99, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>

        <div style={{ display: "flex", gap: 24, marginBottom: 28, alignItems: "center", flexWrap: "wrap" }}>
          <ScoreRing score={product.score} size={80} />
          <div style={{ display: "flex", gap: 12, flex: 1, flexWrap: "wrap" }}>
            <MiniBar value={product.demand} label="Demanda" color="#4FC3F7" />
            <MiniBar value={product.margin} label="Margen" color="#00C853" />
            <MiniBar value={100 - product.competition} label="Baja compet." color="#FF4D00" />
            <MiniBar value={product.ease} label="Facilidad" color="#AB47BC" />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 12, marginBottom: 28 }}>
          {[
            { label: "Precio origen", value: `${product.priceOrigin.toFixed(2)}€`, sub: "Alibaba/1688" },
            { label: "Precio destino", value: `${product.priceDest.toFixed(2)}€`, sub: "Amazon ES" },
            { label: "MOQ", value: `${product.moq} uds`, sub: "Mínimo pedido" },
            { label: "Sellers activos", value: product.sellers, sub: "Amazon ES" },
            { label: "Búsquedas/mes", value: product.searches?.toLocaleString(), sub: "Amazon ES" },
            { label: "Tendencia", value: product.trend === "up" ? "↗ Creciente" : "→ Estable", sub: "Últimos 90 días" },
          ].map((item, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{item.label}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{item.value}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{item.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(255,77,0,0.05)", border: "1px solid rgba(255,77,0,0.15)", borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#FF4D00", margin: "0 0 16px 0" }}>
            📊 Calculadora de márgenes
          </h3>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>
              Cantidad de unidades: <strong style={{ color: "#fff" }}>{units}</strong>
            </label>
            <input type="range" min={product.moq} max={product.moq * 10} value={units}
              onChange={e => setUnits(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#FF4D00" }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
              <span>{product.moq} (MOQ)</span><span>{product.moq * 10}</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12 }}>
            {[
              { label: "Coste unitario total", value: `${costPerUnit.toFixed(2)}€`, desc: "prod + envío + arancel" },
              { label: "Inversión total", value: `${costWithVat.toFixed(0)}€`, desc: `${units} uds con IVA` },
              { label: "Facturación est.", value: `${revenue.toFixed(0)}€`, desc: `a ${product.priceDest}€/ud` },
              { label: "Beneficio neto", value: `${profit.toFixed(0)}€`, desc: `margen real ${realMargin}%`, highlight: true },
              { label: "Punto equilibrio", value: `${breakeven} uds`, desc: "para recuperar inversión" },
              { label: "ROI estimado", value: `${((profit / costWithVat) * 100).toFixed(0)}%`, desc: "retorno inversión", highlight: true },
            ].map((item, i) => (
              <div key={i} style={{ background: item.highlight ? "rgba(0,200,83,0.08)" : "rgba(255,255,255,0.03)", borderRadius: 10, padding: 12, border: `1px solid ${item.highlight ? "rgba(0,200,83,0.2)" : "rgba(255,255,255,0.04)"}` }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: item.highlight ? "#00C853" : "#fff", marginTop: 4 }}>{item.value}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChinaRadarPage() {
  const [showPaywall, setShowPaywall] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif", background: "#08080c", color: "#fff", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      
      <div style={{ position: "fixed", top: -200, left: "50%", transform: "translateX(-50%)", width: 800, height: 600, background: "radial-gradient(ellipse, rgba(255,77,0,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <nav style={{ position: "sticky", top: 0, zIndex: 50, padding: "16px 24px", background: "rgba(8,8,12,0.85)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #FF4D00, #FF8A00)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🔥</div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>China<span style={{ color: "#FF4D00" }}>Radar</span></div>
        </div>
        <button onClick={() => setShowPaywall(true)} style={{ background: "#FF4D00", color: "#fff", border: "none", padding: "10px 24px", borderRadius: 99, fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "inherit", transition: "all 0.3s" }}>
          Acceder a Pro
        </button>
      </nav>

      <div style={{ textAlign: "center", padding: "100px 24px 80px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: 99, background: "rgba(255,77,0,0.1)", border: "1px solid rgba(255,77,0,0.2)", fontSize: 13, fontWeight: 600, color: "#FF4D00", marginBottom: 24, letterSpacing: "0.02em" }}>
          ⚡️ Actualizado semanalmente
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.04em", maxWidth: 780, margin: "0 auto 20px" }}>
          Descubre <em style={{ fontStyle: "normal", background: "linear-gradient(135deg, #FF4D00, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>qué importar de China</em> esta semana
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.6 }}>
          Productos con alta demanda, buenos márgenes y baja competencia — seleccionados cada semana para que empieces ya.
        </p>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 80px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32, justifyContent: "center" }}>
          {["Todos", "Hogar", "Electrónica", "Belleza", "Deportes", "Mascotas"].map((cat) => (
            <button key={cat} style={{ padding: "8px 20px", borderRadius: 99, border: "1px solid rgba(255,255,255,0.1)", background: cat === "Todos" ? "rgba(255,77,0,0.1)" : "transparent", color: cat === "Todos" ? "#FF4D00" : "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.3s" }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {products.map((p, i) => (
            <ProductCard 
              key={p.id} 
              product={p} 
              index={i} 
              isLocked={i >= freeLimit} 
              onClick={() => i >= freeLimit ? setShowPaywall(true) : setSelectedProduct(p)} 
            />
          ))}
        </div>
      </div>

      {showPaywall && (
        <div onClick={() => setShowPaywall(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "rgba(16,16,20,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 48, maxWidth: 480, width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔥</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Desbloquea el radar completo</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 32 }}>Accede a los 30 productos trending de la semana + calculadora de márgenes + alertas personalizadas.</p>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 24, marginBottom: 24, textAlign: "left" }}>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>Plan Pro</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 48, fontWeight: 900 }}>39€</span>
                <span style={{ fontSize: 18, color: "rgba(255,255,255,0.4)" }}>/mes</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {["Ranking completo (30 productos)", "Calculadora de márgenes", "Alertas personalizadas", "Historial de rankings", "Proveedores sugeridos"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                    <span style={{ color: "#00C853" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button style={{ width: "100%", background: "#FF4D00", color: "#fff", border: "none", padding: "16px 32px", borderRadius: 99, fontWeight: 700, fontSize: 16, cursor: "pointer", fontFamily: "inherit", marginBottom: 16, transition: "all 0.3s" }}>
              Activar Plan Pro
            </button>
            <button onClick={() => setShowPaywall(false)} style={{ width: "100%", background: "transparent", color: "rgba(255,255,255,0.6)", border: "none", padding: "12px", fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>
              Volver al ranking
            </button>
          </div>
        </div>
      )}

      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
