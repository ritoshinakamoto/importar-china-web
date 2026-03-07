'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Template {
  id: number;
  title: string;
  subject: string;
  content: string;
  stage: string;
  color: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: 'Primer Contacto - Solicitud Cotización',
    subject: 'Inquiry for [PRODUCTO] - [TU EMPRESA]',
    stage: 'prospección',
    color: 'teal',
    content: `Dear [NOMBRE PROVEEDOR],

I hope this email finds you well.

My name is [TU NOMBRE] and I represent [TU EMPRESA], a company based in [PAÍS] specialized in [SECTOR/NICHO]. We are currently sourcing [PRODUCTO] for our [MERCADO/CANAL - e.g., retail stores / e-commerce platform / wholesale distribution].

I found your company on Alibaba and I am interested in your [PRODUCTO ESPECÍFICO - referencia Alibaba si aplica]. Before proceeding, I would like to request a formal quotation with the following details:

**Product Specifications:**
- Product: [DESCRIPCIÓN EXACTA]
- Material: [ESPECIFICAR - ej: ABS plastic, stainless steel, cotton, etc.]
- Size/Dimensions: [MEDIDAS]
- Color: [COLORES]
- Packaging: [INDIVIDUAL / RETAIL BOX / CUSTOMIZED]
- Quantity: [CANTIDAD] units (initial order)

**Please include in your quotation:**
1. FOB price per unit (for [CIUDAD PUERTO CHINA - ej: Shenzhen, Ningbo, Shanghai])
2. MOQ (Minimum Order Quantity)
3. Production lead time (after order confirmation)
4. Payment terms
5. Product certifications (CE, RoHS, FDA, etc. if applicable)
6. Sample availability and cost

**Additional questions:**
- Do you offer Trade Assurance on Alibaba?
- Can you provide product samples before bulk order?
- Do you accept customization? (logo, colors, packaging)

I have attached a detailed product specification sheet for your reference.

Please send me your best quotation at your earliest convenience. We are looking for a reliable long-term partner and plan to place orders every [FRECUENCIA - ej: month / quarter].

Looking forward to your reply.

Best regards,

[TU NOMBRE]
[TU CARGO]
[TU EMPRESA]
[EMAIL]
[TELÉFONO con código país]
[WEBSITE si aplica]`
  },
  {
    id: 2,
    title: 'Solicitud de Muestras',
    subject: 'Sample Request - [PRODUCTO] - Order Ref: [REFERENCIA]',
    stage: 'prospección',
    color: 'teal',
    content: `Dear [NOMBRE],

Thank you for your quotation received on [FECHA].

Before proceeding with a bulk order, we would like to request product samples to evaluate quality and compliance with our requirements.

**Sample Details:**
- Product: [PRODUCTO]
- Quantity: [CANTIDAD] samples (typically 2-5 units)
- Preferred shipping method: DHL/FedEx Express
- Delivery address: [DIRECCIÓN COMPLETA]

**Please confirm:**
1. Sample cost per unit
2. Shipping cost to [PAÍS]
3. Production time for samples
4. Payment method for samples (PayPal / Bank transfer / Alibaba)
5. Will sample cost be refundable on bulk order?

We understand samples are typically paid by the buyer. Please provide your best sample pricing and we will arrange payment immediately upon confirmation.

Time is important for us, so if you can send samples within [PLAZO - ej: 3-5 days], that would be ideal.

Looking forward to your reply.

Best regards,
[TU NOMBRE]`
  },
  {
    id: 3,
    title: 'Negociación Precio',
    subject: 'Re: Quotation - Price Discussion for [PRODUCTO]',
    stage: 'prospección',
    color: 'teal',
    content: `Dear [NOMBRE],

Thank you for your quotation dated [FECHA].

We are very interested in your [PRODUCTO]. However, after reviewing your pricing, we would like to discuss the possibility of a more competitive rate for the following reasons:

1. **Order volume:** We plan to order [CANTIDAD] units initially, with potential to scale to [CANTIDAD MAYOR] units per month if the first order is successful.

2. **Competitive benchmark:** We have received quotes from [2-3] other suppliers ranging from $[PRECIO MENOR] to $[PRECIO MAYOR] per unit for similar products.

3. **Long-term partnership:** We are not looking for a one-time transaction. Our goal is to establish a long-term relationship with consistent monthly orders.

**Our target price:** $[TU PRECIO TARGET] per unit FOB [PUERTO]

We understand you need to maintain your margins, so we are flexible on:
- Payment terms (we can offer 50% deposit instead of 30%)
- Increasing MOQ if needed
- Accepting longer lead time

Could you review your pricing and let us know if there is room for adjustment? We are genuinely interested in working with you and believe this could be mutually beneficial.

Looking forward to your response.

Best regards,
[TU NOMBRE]`
  },
  {
    id: 4,
    title: 'Confirmación Orden',
    subject: 'Order Confirmation - PO#[NÚMERO] - [PRODUCTO]',
    stage: 'producción',
    color: 'blue',
    content: `Dear [NOMBRE],

I am pleased to confirm our order after reviewing and approving the samples received on [FECHA].

**Order Details:**
- PO Number: [TU NÚMERO PO]
- Product: [PRODUCTO - con referencia]
- Quantity: [CANTIDAD] units
- Unit Price: $[PRECIO] FOB [PUERTO]
- Total Order Value: $[TOTAL]
- Production Lead Time: [DÍAS] days
- Expected Ship Date: [FECHA]

**Confirmed Specifications:**
[Lista specs exactas como en las muestras aprobadas]

**Payment Terms:**
- 30% deposit: $[CANTIDAD] (to be paid within 2 business days)
- 70% balance: $[CANTIDAD] (before shipment, upon QC approval)

**Next Steps:**
1. Please send Proforma Invoice with these details
2. We will arrange deposit payment immediately
3. Please confirm production start date after deposit received
4. We request production photos at 25%, 50%, and 90% completion
5. Pre-shipment inspection will be scheduled before final payment

Please confirm receipt of this order and send the Proforma Invoice.

Looking forward to a successful collaboration.

Best regards,
[TU NOMBRE]`
  },
  {
    id: 5,
    title: 'Seguimiento Producción',
    subject: 'Production Status Update Request - PO#[NÚMERO]',
    stage: 'producción',
    color: 'blue',
    content: `Dear [NOMBRE],

I hope production is going well.

I am writing to request a status update on our order PO#[NÚMERO] for [PRODUCTO].

According to our agreement, production started on [FECHA INICIO] and the estimated completion date is [FECHA FIN].

**Please provide:**
1. Current production progress (% complete)
2. Any issues or delays encountered
3. Updated photos of the production line
4. Estimated date for pre-shipment inspection
5. Confirmation of shipping date

We are planning our inventory and need to coordinate with our customers, so timely information is very important.

Please reply at your earliest convenience.

Thank you for your cooperation.

Best regards,
[TU NOMBRE]`
  },
  {
    id: 6,
    title: 'Solicitud Inspección Pre-embarque',
    subject: 'Pre-shipment Inspection Request - PO#[NÚMERO]',
    stage: 'producción',
    color: 'blue',
    content: `Dear [NOMBRE],

As we discussed, production for PO#[NÚMERO] is nearing completion.

We would like to schedule a pre-shipment inspection before you arrange shipping.

**Inspection Details:**
- Inspection company: [SGS / Bureau Veritas / AsiaInspection / V-Trust]
- Preferred inspection date: [FECHA]
- Location: Your factory at [DIRECCIÓN]
- Duration: Approximately [2-4] hours

**Inspection scope:**
1. Visual inspection (appearance, defects, damages)
2. Measurement check (dimensions, weight)
3. Function testing (if applicable)
4. Packaging inspection
5. Quantity verification
6. Random sampling per AQL standards

The inspection company will contact you directly to coordinate. Please ensure:
- All products are ready and packed
- Factory access is available
- Your QC manager can be present

We will only release the balance payment (70%) after receiving a satisfactory inspection report.

Please confirm you can accommodate the inspection on [FECHA].

Best regards,
[TU NOMBRE]`
  },
  {
    id: 7,
    title: 'Aprobación Pago Final',
    subject: 'Final Payment Approval - PO#[NÚMERO]',
    stage: 'producción',
    color: 'blue',
    content: `Dear [NOMBRE],

We have received and reviewed the pre-shipment inspection report from [EMPRESA INSPECCIÓN] for PO#[NÚMERO].

I am pleased to inform you that the products have passed inspection with [RESULTADO - ej: "minor defects within acceptable AQL limits" / "excellent quality, zero major defects"].

**Payment Confirmation:**
- Balance amount: $[CANTIDAD] (70% of total)
- Payment method: [BANK TRANSFER / ALIBABA TRADE ASSURANCE]
- Expected payment date: [FECHA - typically within 1-2 business days]

Please provide:
1. Final commercial invoice
2. Packing list
3. Shipping arrangement confirmation
4. Estimated departure and arrival dates
5. Tracking information once shipment is dispatched

We will process the payment immediately upon receiving these documents.

Please confirm receipt of this email and provide the requested documents.

Thank you for your excellent cooperation throughout this order.

Best regards,
[TU NOMBRE]`
  },
  {
    id: 8,
    title: 'Manejo Defectos/Problemas',
    subject: 'Quality Issue Report - PO#[NÚMERO] - Resolution Request',
    stage: 'relación',
    color: 'green',
    content: `Dear [NOMBRE],

I hope this email finds you well.

I am writing regarding PO#[NÚMERO] which we received on [FECHA].

Unfortunately, upon inspection, we have found some quality issues that need to be addressed:

**Issue Description:**
[DESCRIPCIÓN DETALLADA del problema - con fotos adjuntas si es posible]

**Affected Quantity:**
- Total units received: [CANTIDAD]
- Defective units: [CANTIDAD] ([PORCENTAJE]%)
- Nature of defects: [TIPO DE DEFECTO]

I have attached photos documenting the issues for your reference.

**Proposed Solution:**
We would like to discuss a resolution. Options could include:
1. Partial refund for the defective units
2. Replacement shipment for defective items
3. Discount on next order as compensation

We value our business relationship and believe this is an isolated incident. We are confident we can find a fair solution that works for both parties.

Please review the attached photos and let us know your proposed resolution.

Looking forward to your response.

Best regards,
[TU NOMBRE]`
  },
  {
    id: 9,
    title: 'Solicitud Descuento Pedido Repetido',
    subject: 'Repeat Order Inquiry - Discount Request for Loyal Customer',
    stage: 'relación',
    color: 'green',
    content: `Dear [NOMBRE],

I hope you are doing well.

We have been working together for [TIEMPO - ej: 6 months / 1 year] and have placed [NÚMERO] successful orders totaling $[CANTIDAD].

We are very satisfied with your product quality and service, and we plan to continue our partnership long-term.

**New Order Details:**
- Product: [PRODUCTO]
- Quantity: [CANTIDAD] units
- Current price: $[PRECIO] per unit

As a loyal customer with a proven track record, we would like to request a better price for this and future orders.

**Our request:**
- Target price: $[PRECIO OBJETIVO] per unit (approximately [PORCENTAJE]% discount)
- Increased order frequency: [FRECUENCIA - ej: bi-weekly instead of monthly]
- Larger order quantities: [CANTIDAD MAYOR] units per order

We believe this pricing adjustment is reasonable given:
1. Our consistent order history
2. Increased order volume
3. Zero payment delays
4. Minimal support/service requirements

Please let us know if you can accommodate this request. We truly value our partnership and want to continue growing together.

Looking forward to your positive response.

Best regards,
[TU NOMBRE]`
  },
  {
    id: 10,
    title: 'Solicitar Customización',
    subject: 'Customization Request - Logo & Packaging',
    stage: 'relación',
    color: 'green',
    content: `Dear [NOMBRE],

We are interested in customizing your [PRODUCTO] for our brand.

**Customization Requirements:**

1. **Logo Printing:**
   - Location: [UBICACIÓN en el producto]
   - Method: [Silk screen / Laser engraving / Heat transfer / Embroidery]
   - Colors: [COLORES - provide Pantone codes if possible]
   - Size: [DIMENSIONES]

2. **Packaging:**
   - Custom retail box with our branding
   - Box dimensions: [MEDIDAS]
   - Printing: Full color (CMYK)
   - Material: [Cardboard / Rigid box / etc.]

3. **Other Requirements:**
   - Instruction manual in [IDIOMA]
   - Barcode/QR code on packaging
   - CE/RoHS marking if applicable

**Questions:**
1. What is the MOQ for customized products?
2. Additional cost per unit for customization?
3. One-time setup/mold fee?
4. Production lead time for custom order?
5. Can you provide a digital mockup before production?
6. Can we order a small batch (10-50 units) for testing before bulk?

I can provide high-resolution logo files (AI/PSD/PDF) and detailed packaging design.

Please let me know if customization is possible and provide a quotation.

Best regards,
[TU NOMBRE]`
  },
  {
    id: 11,
    title: 'Cambio Forma de Pago',
    subject: 'Payment Terms Adjustment Request',
    stage: 'optimización',
    color: 'purple',
    content: `Dear [NOMBRE],

After [NÚMERO] successful orders and [TIEMPO] of partnership, we would like to discuss adjusting our payment terms.

**Current Terms:** 30% deposit, 70% before shipment
**Proposed Terms:** Net 30 (full payment 30 days after shipment)

**Rationale:**
1. We have demonstrated reliability with [NÚMERO] on-time payments
2. Zero disputes or chargebacks
3. Growing order volume ($[CANTIDAD] in total business)
4. Better cash flow would allow us to increase order frequency

We understand this requires trust, so we propose:
- Start with Net 15 for 2-3 orders, then move to Net 30
- Provide trade references if needed
- Set a credit limit of $[CANTIDAD] per order
- Continue using Alibaba Trade Assurance for protection

Alternatively, we are open to:
- Slight price increase in exchange for better terms
- Personal guarantee or additional documentation
- Phased approach starting with smaller net orders

Please let us know if this is possible. We value our partnership and see this as a natural progression.

Best regards,
[TU NOMBRE]`
  },
  {
    id: 12,
    title: 'Solicitar Referencias/Certificados',
    subject: 'Request for References and Certifications',
    stage: 'optimización',
    color: 'purple',
    content: `Dear [NOMBRE],

Before finalizing our order, we need to complete our supplier verification process.

**Please provide:**

1. **Business Documentation:**
   - Business license (copy)
   - Export license
   - Company profile/brochure

2. **Certifications:**
   - ISO 9001 (Quality Management)
   - ISO 14001 (Environmental)
   - Product-specific: CE, RoHS, FDA, FCC (if applicable)
   - Factory audit reports (if available)

3. **References:**
   - 2-3 customer references (preferably from [TU REGIÓN/PAÍS])
   - Contact information (name, company, email)
   - Permission to contact them

4. **Production Capacity:**
   - Monthly production capacity
   - Number of production lines
   - Number of employees
   - Factory size (square meters)

This information is required by our procurement department and will remain confidential.

Please send these documents at your earliest convenience so we can proceed with the order.

Thank you for your cooperation.

Best regards,
[TU NOMBRE]`
  },
  {
    id: 13,
    title: 'Cerrar Relación Profesionalmente',
    subject: 'Thank You - Future Collaboration',
    stage: 'optimización',
    color: 'purple',
    content: `Dear [NOMBRE],

Thank you for your time and effort in providing quotes and information for [PRODUCTO].

After careful consideration, we have decided to move forward with a different supplier for this particular project. This decision is based on [RAZÓN OPCIONAL - ej: "budget constraints" / "specific technical requirements" / "timing considerations"].

However, we were impressed with your professionalism and product quality. We would like to keep your contact information for future opportunities.

We may reach out again when:
- Our product requirements change
- We expand into new product lines
- Budget allows for your pricing

Thank you again for your assistance. We wish you continued success with your business.

Best regards,
[TU NOMBRE]

P.S. Please feel free to contact us if you have any special offers or new products that might fit our needs.`
  },
  {
    id: 14,
    title: 'Felicitaciones Año Nuevo Chino',
    subject: 'Happy Chinese New Year! 🎊',
    stage: 'optimización',
    color: 'purple',
    content: `Dear [NOMBRE],

As Chinese New Year approaches, I wanted to take a moment to send my warm wishes to you and your team.

恭喜发财! (Gong Xi Fa Cai!)

Thank you for your excellent partnership this past year. We truly appreciate:
- Your consistent product quality
- Professional service
- On-time deliveries
- Flexibility and problem-solving

We look forward to an even more successful year ahead and growing our business together.

**Important:** Please confirm your factory closure dates so we can plan our orders accordingly:
- Last production day before holiday: [FECHA]
- Factory reopening date: [FECHA]
- First shipments resume: [FECHA]

Wishing you prosperity, health, and happiness in the Year of the [ANIMAL].

Best regards,
[TU NOMBRE]

P.S. If you have any special promotions or new products launching after the holiday, please let us know!`
  },
  {
    id: 15,
    title: 'Recordatorio Pago Amistoso',
    subject: 'Payment Reminder - Invoice #[NÚMERO]',
    stage: 'optimización',
    color: 'purple',
    content: `Dear [NOMBRE],

I hope you are doing well.

This is a friendly reminder regarding the balance payment for PO#[NÚMERO].

**Payment Details:**
- Invoice Number: [NÚMERO]
- Amount Due: $[CANTIDAD]
- Original Due Date: [FECHA]
- Days Overdue: [NÚMERO]

We apologize for the delay. We experienced [RAZÓN - ej: "unexpected cash flow issues" / "administrative delays" / "bank transfer complications"].

We plan to process the payment by [NUEVA FECHA - within 3-5 days].

We value our partnership and want to assure you this is a one-time situation. We have taken steps to ensure timely payments going forward.

Thank you for your patience and understanding. Please let us know if you need any additional information to process the payment when it arrives.

Best regards,
[TU NOMBRE]

P.S. To make up for the delay, we would be happy to provide advance payment (50% deposit instead of 30%) on our next order as a gesture of good faith.`
  }
];

interface TemplateCardProps {
  template: Template;
  isExpanded: boolean;
  onToggle: () => void;
}

function TemplateCard({ template, isExpanded, onToggle }: TemplateCardProps) {
  const colorMap: Record<string, string> = {
    teal: 'border-teal-400 bg-teal-50 hover:bg-teal-100',
    blue: 'border-blue-400 bg-blue-50 hover:bg-blue-100',
    green: 'border-green-400 bg-green-50 hover:bg-green-100',
    purple: 'border-purple-400 bg-purple-50 hover:bg-purple-100',
  };

  const colorMapExpanded: Record<string, string> = {
    teal: 'border-teal-500 bg-teal-50',
    blue: 'border-blue-500 bg-blue-50',
    green: 'border-green-500 bg-green-50',
    purple: 'border-purple-500 bg-purple-50',
  };

  return (
    <div className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${
      isExpanded ? colorMapExpanded[template.color] : 'border-gray-200 hover:shadow-lg'
    }`}>
      <button
        onClick={onToggle}
        className={`w-full p-5 text-left transition-all ${
          isExpanded ? 'bg-white' : colorMap[template.color]
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 bg-${template.color}-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
              {template.id}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">{template.title}</h4>
              {!isExpanded && (
                <p className="text-xs text-gray-500 mt-1">Click para ver template completo</p>
              )}
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="p-6 bg-white border-t-2 border-gray-200">
          <div className="mb-4">
            <div className="text-sm font-semibold text-gray-700 mb-1">Asunto:</div>
            <div className="px-4 py-2 bg-gray-100 rounded text-sm text-gray-900 font-mono">
              {template.subject}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-700 mb-2">Contenido del Email:</div>
            <div className="px-4 py-4 bg-gray-50 rounded border border-gray-200">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
                {template.content}
              </pre>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(`Subject: ${template.subject}\n\n${template.content}`);
              }}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              📋 Copiar al Portapapeles
            </button>
            <button
              onClick={onToggle}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TemplatesExpandable() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const templatesByStage = {
    prospección: templates.filter(t => t.stage === 'prospección'),
    producción: templates.filter(t => t.stage === 'producción'),
    relación: templates.filter(t => t.stage === 'relación'),
    optimización: templates.filter(t => t.stage === 'optimización'),
  };

  return (
    <div className="space-y-10">
      {/* Etapa 1 */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">🔍</span>
          Etapa 1: Prospección y Cotización
        </h3>
        <div className="space-y-3">
          {templatesByStage.prospección.map(template => (
            <TemplateCard
              key={template.id}
              template={template}
              isExpanded={expandedId === template.id}
              onToggle={() => setExpandedId(expandedId === template.id ? null : template.id)}
            />
          ))}
        </div>
      </div>

      {/* Etapa 2 */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">⚙️</span>
          Etapa 2: Orden y Producción
        </h3>
        <div className="space-y-3">
          {templatesByStage.producción.map(template => (
            <TemplateCard
              key={template.id}
              template={template}
              isExpanded={expandedId === template.id}
              onToggle={() => setExpandedId(expandedId === template.id ? null : template.id)}
            />
          ))}
        </div>
      </div>

      {/* Etapa 3 */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">🤝</span>
          Etapa 3: Gestión de Relación
        </h3>
        <div className="space-y-3">
          {templatesByStage.relación.map(template => (
            <TemplateCard
              key={template.id}
              template={template}
              isExpanded={expandedId === template.id}
              onToggle={() => setExpandedId(expandedId === template.id ? null : template.id)}
            />
          ))}
        </div>
      </div>

      {/* Etapa 4 */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">💎</span>
          Etapa 4: Optimización
        </h3>
        <div className="space-y-3">
          {templatesByStage.optimización.map(template => (
            <TemplateCard
              key={template.id}
              template={template}
              isExpanded={expandedId === template.id}
              onToggle={() => setExpandedId(expandedId === template.id ? null : template.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
