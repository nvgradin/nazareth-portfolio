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

  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#EDE8F0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#EDE8F0;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(36,30,51,0.10);">

        <!-- Cabecera -->
        <tr>
          <td style="background:#241E33;padding:32px 40px;">
            <p style="margin:0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#7B6F8E;">Portfolio · Nazareth Gradín</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:500;color:#FFFFFF;letter-spacing:-0.02em;">${subjectMap[data.type]}</h1>
          </td>
        </tr>

        <!-- Remitente -->
        <tr>
          <td style="padding:24px 40px 0;">
            <p style="margin:0;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#7B6F8E;">De</p>
            <p style="margin:4px 0 0;font-size:15px;color:#241E33;">${data.name} &nbsp;<span style="color:#40394E;">&lt;${data.email}&gt;</span></p>
          </td>
        </tr>

        <!-- Divisor -->
        <tr><td style="padding:20px 40px 0;"><hr style="border:none;border-top:1px solid #D6D0E0;margin:0;"></td></tr>

        <!-- Campos extra (empresa, tipo, etc.) -->
        ${extraFields ? `<tr><td style="padding:20px 40px 0;">${extraFields.replace(/<p>/g, '<p style="margin:0 0 10px;font-size:14px;color:#241E33;">').replace(/<strong>/g, '<strong style="color:#40394E;font-weight:500;">')}</td></tr>` : ''}

        <!-- Mensaje -->
        <tr>
          <td style="padding:20px 40px 32px;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#7B6F8E;">${messageLabel}</p>
            <p style="margin:0;font-size:15px;line-height:1.65;color:#241E33;white-space:pre-wrap;">${data.message}</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#EDE8F0;padding:20px 40px;border-top:1px solid #D6D0E0;">
            <p style="margin:0;font-size:11px;color:#7B6F8E;">nazarethgradin.com · ${new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

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
