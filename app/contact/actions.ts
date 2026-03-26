'use server';

export type ContactType = 'proyecto' | 'colaboracion' | 'conversacion';

export interface ContactFormData {
  type: ContactType;
  name: string;
  email: string;
  message: string;
  // Proyecto
  budget?: string;
  // Conversación (recruiter)
  company?: string;
  role?: string;
}

export interface ActionResult {
  ok: boolean;
  error?: string;
}

export async function sendContactForm(data: ContactFormData): Promise<ActionResult> {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return { ok: false, error: 'Configuración incompleta. Inténtalo más tarde.' };
  }

  const subjectMap: Record<ContactType, string> = {
    proyecto:      `[Proyecto] ${data.name}`,
    colaboracion:  `[Colaboración] ${data.name}`,
    conversacion:  `[Conversación] ${data.name}`,
  };

  const extraFields = data.type === 'proyecto'
    ? `<p><strong>Presupuesto estimado:</strong> ${data.budget || '—'}</p>`
    : data.type === 'conversacion'
    ? `<p><strong>Empresa:</strong> ${data.company || '—'}</p><p><strong>Rol:</strong> ${data.role || '—'}</p>`
    : '';

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; color: #241E33;">
      <h2 style="margin-bottom: 4px;">${subjectMap[data.type]}</h2>
      <p style="color: #606E67; margin-top: 0;">${data.email}</p>
      <hr style="border: none; border-top: 1px solid #E2DDD5; margin: 16px 0;" />
      ${extraFields}
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap;">${data.message}</p>
    </div>
  `;

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: { name: data.name, email: 'noreply@nazarethgradin.com' },
      to: [{ email: 'hola@nazarethgradin.com', name: 'Nazareth' }],
      replyTo: { email: data.email, name: data.name },
      subject: subjectMap[data.type],
      htmlContent,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Brevo error:', err);
    return { ok: false, error: 'No se pudo enviar. Inténtalo más tarde.' };
  }

  return { ok: true };
}
