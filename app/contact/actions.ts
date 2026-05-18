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

  const field = (label: string, value: string | undefined, isLink = false) =>
    value ? `
      <tr>
        <td style="padding:0 0 14px;">
          <p style="margin:0 0 3px;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#7B6F8E;">${label}</p>
          <p style="margin:0;font-size:14px;color:#241E33;">${isLink ? `<a href="${value}" style="color:#241E33;">${value}</a>` : value}</p>
        </td>
      </tr>` : '';

  const extraRows =
    data.type === 'proyecto'
      ? [
          field('Tipo de proyecto',     data.projectType),
          field('Empresa / Proyecto',   data.company),
          field('URL',                  data.projectUrl, true),
          field('Presupuesto estimado', data.budget),
          field('Plazo deseado',        data.timeline),
        ].join('')
      : data.type === 'consultoria'
      ? [
          field('Punto del proyecto',   data.stage),
          field('URL de referencia',    data.projectUrl, true),
        ].join('')
      : data.type === 'colaboracion'
      ? [
          field('Empresa / Proyecto',   data.company),
          field('Rol',                  data.role),
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
          <td style="padding:28px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:0 0 14px;">
                  <p style="margin:0 0 3px;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#7B6F8E;">Nombre</p>
                  <p style="margin:0;font-size:16px;font-weight:500;color:#241E33;">${data.name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 14px;">
                  <p style="margin:0 0 3px;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#7B6F8E;">Email</p>
                  <p style="margin:0;font-size:15px;color:#241E33;"><a href="mailto:${data.email}" style="color:#241E33;text-decoration:none;">${data.email}</a></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Divisor -->
        <tr><td style="padding:4px 40px 0;"><hr style="border:none;border-top:1px solid #D6D0E0;margin:0;"></td></tr>

        <!-- Campos extra según tipo -->
        ${extraRows ? `
        <tr>
          <td style="padding:20px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${extraRows}
            </table>
          </td>
        </tr>
        <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #D6D0E0;margin:0;"></td></tr>
        ` : ''}

        <!-- Mensaje -->
        <tr>
          <td style="padding:20px 40px 32px;">
            <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#7B6F8E;">${messageLabel}</p>
            <p style="margin:0;font-size:15px;line-height:1.7;color:#241E33;white-space:pre-wrap;">${data.message}</p>
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
