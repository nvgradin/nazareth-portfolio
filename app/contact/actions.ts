'use server';

export type ContactType = 'proyecto' | 'consultoria' | 'colaboracion';

export interface ContactFormData {
  type: ContactType;
  name: string;
  email: string;
  message: string;
  // Proyecto
  projectType?: string;
  company?: string;
  projectUrl?: string;
  budget?: string;
  timeline?: string;
  // Consultoría
  stage?: string;
  // Colaboración
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
    proyecto:    `[Proyecto] ${data.name}`,
    consultoria: `[Mentoría/Consulta] ${data.name}`,
    colaboracion:`[Colaboración] ${data.name}`,
  };

  const extraFields =
    data.type === 'proyecto'
      ? [
          data.projectType ? `<p><strong>¿Qué necesitas?</strong> ${data.projectType}</p>` : '',
          data.company     ? `<p><strong>Empresa:</strong> ${data.company}</p>` : '',
          data.projectUrl  ? `<p><strong>URL del proyecto:</strong> <a href="${data.projectUrl}">${data.projectUrl}</a></p>` : '',
          data.budget      ? `<p><strong>Presupuesto estimado:</strong> ${data.budget}</p>` : '',
          data.timeline    ? `<p><strong>¿Cuándo lanzar?</strong> ${data.timeline}</p>` : '',
        ].join('')
      : data.type === 'consultoria'
      ? [
          data.stage      ? `<p><strong>¿En qué punto estás?</strong> ${data.stage}</p>` : '',
          data.projectUrl ? `<p><strong>URL de referencia:</strong> <a href="${data.projectUrl}">${data.projectUrl}</a></p>` : '',
        ].join('')
      : data.type === 'colaboracion'
      ? [
          data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : '',
          data.role    ? `<p><strong>Rol:</strong> ${data.role}</p>` : '',
        ].join('')
      : '';

  const messageLabel = data.type === 'consultoria' ? '¿En qué necesitas ayuda?' : 'Mensaje';

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; color: #241E33;">
      <h2 style="margin-bottom: 4px;">${subjectMap[data.type]}</h2>
      <p style="color: #606E67; margin-top: 0;">${data.email}</p>
      <hr style="border: none; border-top: 1px solid #E2DDD5; margin: 16px 0;" />
      ${extraFields}
      <p><strong>${messageLabel}:</strong></p>
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
      sender: { name: 'Portfolio · Nazareth Gradín', email: 'hola@nazarethgradin.com' },
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
