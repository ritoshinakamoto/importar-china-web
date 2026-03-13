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

const trendIcon = { up: "↗", stable: "→", down: "↘" };
const trendColor = { up: "#00C853", stable: "#FFB300", down: "#FF1744" };

function ScoreRing({ score, size = 56 }) {
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

function MiniBar({ value, label, color = "#FF4D00" }) {
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

function ProductCard({ product, index, isLocked, onClick }) {
  const badge = badgeConfig[product.badge];
  return (
    <div onClick={onClick} style={{
      background: isLocked ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 16, padding: "20px 24px", cursor: "pointer",
      transition: "all 0.3s ease", position: "relative", overflow: "hidden",
      filter: isLocked ? "blur(2px)" : "none",
      opacity: isLocked ? 0.5 : 1,
    }}
    onMouseEnter={e => { if (!isLocked) { e.currentTarget.style.border = "1px solid rgba(255,77,0,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(-2px)"; }}}
    onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)"; e.currentTarget.style.background = isLocked ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "translateY(0)"; }}
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
          <div style={{ display: "flex", gap: 16, fontSize: 13, color: "rgba(255,255,255,0.5)", flexWrap: "wrap" }}>
            <span>{product.category}</span>
            <span style={{ color: trendColor[product.trend] }}>{trendIcon[product.trend]} Tendencia</span>
            <span>🔍 {product.searches?.toLocaleString()} búsq/mes</span>
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#00C853" }}>{product.marginPct}%</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Margen</div>
        </div>
      </div>
      {isLocked && (
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(10,10,14,0.7)", backdropFilter: "blur(4px)", borderRadius: 16,
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 4 }}>🔒</div>
            <div style={{ color: "#FF4D00", fontWeight: 700, fontSize: 14 }}>Plan Pro requerido</div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductDetail({ product, onClose, plan }) {
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

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)",
      zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#13131a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24,
        maxWidth: 640, width: "100%", maxHeight: "90vh", overflowY: "auto", padding: 32,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 11, color: "#FF4D00", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
              {badgeConfig[product.badge].label}
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fff", margin: 0 }}>{product.name}</h2>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{product.category}</div>
          </div>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.06)", border: "none", color: "#fff", width: 36, height: 36,
            borderRadius: 99, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
          }}>✕</button>
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

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 12, marginBottom: 28,
        }}>
          {[
            { label: "Precio origen", value: `${product.priceOrigin.toFixed(2)}€`, sub: "Alibaba/1688" },
            { label: "Precio destino", value: `${product.priceDest.toFixed(2)}€`, sub: "Amazon ES" },
            { label: "MOQ", value: `${product.moq} uds`, sub: "Mínimo pedido" },
            { label: "Sellers activos", value: product.sellers, sub: "Amazon ES" },
            { label: "Búsquedas/mes", value: product.searches?.toLocaleString(), sub: "Amazon ES" },
            { label: "Tendencia", value: product.trend === "up" ? "↗ Creciente" : "→ Estable", sub: "Últimos 90 días" },
          ].map((item, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "14px 16px",
              border: "1px solid rgba(255,255,255,0.04)",
            }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{item.label}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{item.value}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{item.sub}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: "rgba(255,77,0,0.05)", border: "1px solid rgba(255,77,0,0.15)",
          borderRadius: 16, padding: 24, marginBottom: 24,
        }}>
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
              <div key={i} style={{
                background: item.highlight ? "rgba(0,200,83,0.08)" : "rgba(255,255,255,0.03)",
                borderRadius: 10, padding: 12,
                border: `1px solid ${item.highlight ? "rgba(0,200,83,0.2)" : "rgba(255,255,255,0.04)"}`,
              }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: item.highlight ? "#00C853" : "#fff", marginTop: 4 }}>{item.value}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {plan === "free" && (
          <div style={{
            background: "linear-gradient(135deg, rgba(255,77,0,0.1), rgba(255,77,0,0.02))",
            border: "1px solid rgba(255,77,0,0.2)", borderRadius: 16, padding: 24, textAlign: "center",
          }}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>🔒</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Proveedores verificados disponibles en Pro</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Accede a proveedores verificados, alertas personalizadas y el ranking completo.</div>
            <button style={{
              background: "#FF4D00", color: "#fff", border: "none", padding: "12px 32px",
              borderRadius: 99, fontWeight: 700, fontSize: 15, cursor: "pointer",
            }}>Desbloquear con Pro — 39€/mes</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChinaRadar() {
  const [plan, setPlan] = useState("free");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(products.map(p => p.category))];
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  const visibleProducts = plan === "free" ? products : filtered;

  return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0e", color: "#fff",
      fontFamily: "'DM Sans', system-ui, sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* Header */}
      <header style={{
        padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        position: "sticky", top: 0, background: "rgba(10,10,14,0.9)", backdropFilter: "blur(20px)", zIndex: 50,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #FF4D00, #FF8A00)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
          }}>📡</div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em" }}>
              China<span style={{ color: "#FF4D00" }}>Radar</span>
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              by importardechina.com
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {["free", "pro", "enterprise"].map(p => (
            <button key={p} onClick={() => setPlan(p)} style={{
              padding: "6px 14px", borderRadius: 99, fontSize: 12, fontWeight: 600, cursor: "pointer",
              border: plan === p ? "none" : "1px solid rgba(255,255,255,0.1)",
              background: plan === p ? (p === "enterprise" ? "linear-gradient(135deg, #FF4D00, #FF8A00)" : p === "pro" ? "#FF4D00" : "rgba(255,255,255,0.08)") : "transparent",
              color: plan === p ? "#fff" : "rgba(255,255,255,0.5)",
              textTransform: "capitalize",
            }}>
              {p === "free" ? "Free" : p === "pro" ? "Pro 39€" : "Enterprise 199€"}
            </button>
          ))}
        </div>
      </header>

      {/* Hero */}
      <div style={{
        padding: "48px 24px 32px", textAlign: "center",
        background: "radial-gradient(ellipse at 50% 0%, rgba(255,77,0,0.08) 0%, transparent 60%)",
      }}>
        <div style={{ fontSize: 11, color: "#FF4D00", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>
          Ranking semanal · Semana 11 / 2026
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
          Productos con mayor oportunidad<br />
          <span style={{ color: "#FF4D00" }}>para importar esta semana</span>
        </h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: "0 0 24px", maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
          Datos actualizados cada lunes. Score basado en demanda, márgenes, competencia y facilidad de importación.
        </p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { value: "8", label: "Productos analizados" },
            { value: "62%", label: "Margen medio" },
            { value: "3", label: "🔥 Oportunidades calientes" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#fff" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      {plan !== "free" && (
        <div style={{ padding: "0 24px 16px", display: "flex", gap: 8, overflowX: "auto", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              padding: "6px 14px", borderRadius: 99, fontSize: 12, fontWeight: 500, cursor: "pointer",
              border: filter === cat ? "none" : "1px solid rgba(255,255,255,0.08)",
              background: filter === cat ? "rgba(255,77,0,0.15)" : "transparent",
              color: filter === cat ? "#FF4D00" : "rgba(255,255,255,0.4)",
              whiteSpace: "nowrap",
            }}>
              {cat === "all" ? "Todos" : cat}
            </button>
          ))}
        </div>
      )}

      {/* Product List */}
      <div style={{ padding: "0 24px 40px", maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
        {visibleProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            isLocked={plan === "free" && i >= freeLimit}
            onClick={() => {
              if (plan === "free" && i >= freeLimit) return;
              setSelectedProduct(product);
            }}
          />
        ))}

        {plan === "free" && (
          <div style={{
            textAlign: "center", padding: 40,
            background: "linear-gradient(180deg, transparent 0%, rgba(255,77,0,0.04) 100%)",
            borderRadius: 20, border: "1px dashed rgba(255,77,0,0.2)", marginTop: 8,
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📡</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
              +{products.length - freeLimit} productos más en el ranking
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 20, maxWidth: 400, margin: "0 auto 20px" }}>
              Desbloquea fichas completas, proveedores verificados, calculadora de márgenes y alertas personalizadas.
            </div>
            <button onClick={() => setPlan("pro")} style={{
              background: "linear-gradient(135deg, #FF4D00, #FF8A00)", color: "#fff", border: "none",
              padding: "14px 36px", borderRadius: 99, fontWeight: 700, fontSize: 16, cursor: "pointer",
              boxShadow: "0 4px 24px rgba(255,77,0,0.3)",
            }}>
              Activar Pro — 39€/mes
            </button>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 10 }}>
              Cancela cuando quieras · Acceso inmediato
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          plan={plan}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Footer */}
      <footer style={{
        padding: "24px", borderTop: "1px solid rgba(255,255,255,0.04)",
        textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.25)",
      }}>
        ChinaRadar by importardechina.com · Datos actualizados semanalmente · © 2026
      </footer>
    </div>
  );
}
