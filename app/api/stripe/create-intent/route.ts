import { NextRequest, NextResponse } from 'next/server';
import { getProduct } from '@/lib/products';

export async function POST(req: NextRequest) {
  try {
    const { email, productId } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const product = getProduct(productId);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json({ error: 'Stripe key not configured' }, { status: 500 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    // Create checkout session via Stripe API (raw fetch)
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'payment_method_types[0]': 'card',
        'line_items[0][price_data][currency]': 'eur',
        'line_items[0][price_data][product_data][name]': product.name,
        'line_items[0][price_data][product_data][description]': product.description,
        'line_items[0][price_data][unit_amount]': product.price.toString(),
        'line_items[0][quantity]': '1',
        'customer_email': email,
        'mode': 'payment',
        'success_url': `${baseUrl}${product.successUrl}?session_id={CHECKOUT_SESSION_ID}&email=${encodeURIComponent(email)}`,
        'cancel_url': `${baseUrl}${product.cancelUrl}`,
        'metadata[product]': productId,
        'metadata[version]': '1.0',
      }).toString(),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Stripe API Error:', error);
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: response.status }
      );
    }

    const session = await response.json();

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Checkout Error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
