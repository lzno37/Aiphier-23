"use client";
import { useLanguage } from "@/hooks/Language";

export default function PrivacyPage() {
  const { currentLanguage } = useLanguage();

  const content = {
    EN: {
      title: "Privacy Policy",
      lastUpdated: "Effective Date: 8 OCT 2025",
      intro:
        'This Privacy Policy describes how Aiphier LLC ("Aiphier," "We," "Our," or "the Company") collects, uses, and discloses your personal information when you use our service (the "Service").',
      sections: [
        {
          title: "1. Information We Collect",
          content: "We collect two main types of information:",
          subsections: [
            {
              subtitle: "1.1. Personal Information (Personal Data)",
              content:
                "Information that can be used to directly identify you. This may include:",
              list: [
                "First and Last Name",
                "Email Address",
                "Mailing Address",
                "Phone Number",
                "Payment Information (handled by third-party payment processors)",
              ],
            },
            {
              subtitle: "1.2. Usage and Tracking Information",
              content:
                "Information collected automatically about your access and use of the Service. This includes:",
              list: [
                "IP Address",
                "Browser Type and Operating System",
                "Pages Visited and Time Spent",
                "Clickstream Data and Activity on the Service",
                "Cookies and Tracking Technologies: We use cookies and similar technologies (web beacons, tags) to track activity on our Service and store certain information.",
              ],
            },
          ],
        },
        {
          title: "2. How We Use Your Information",
          list: [
            "Service Provision: To operate, maintain, and improve the Service.",
            "Account Management: To manage your registration as a user and provide you with access to Service functionalities.",
            "Communications: To send you notifications, security updates, and marketing communications (if you have opted in).",
            "Analytics: To monitor Service usage, analyze trends, and evaluate the effectiveness of our promotional campaigns.",
            "Legal Compliance: To comply with legal obligations and protect our rights.",
          ],
        },
        {
          title: "3. Disclosure and Sharing of Information",
          intro:
            "We may share your personal information in the following circumstances, always aiming to minimize disclosure:",
          subsections: [
            {
              subtitle: "3.1. Service Providers",
              content:
                "We share information with third parties who perform services on our behalf (e.g., web hosting, data analytics, payment processing). These providers are contractually bound to maintain confidentiality and use the information only for the purposes we have instructed.",
            },
            {
              subtitle: "3.2. Business Transfers",
              content:
                "In the event of a merger, acquisition, or asset sale, your information may be transferred. We will notify you before this occurs.",
            },
            {
              subtitle: "3.3. Legal Compliance and Law Enforcement",
              content:
                "We may disclose your information if we believe in good faith that it is necessary to:",
              list: [
                "Comply with a legal obligation or court order.",
                "Protect and defend the rights or property of Aiphier.",
                "Protect the personal safety of Service users or the public.",
              ],
            },
          ],
        },
        {
          title: "4. Data Transfer",
          content:
            "Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction. By using the Service, you consent to such transfer. We will take all reasonably necessary steps to ensure your data is treated securely and in accordance with this Privacy Policy.",
        },
        {
          title: "5. Children's Privacy",
          content:
            "Our Service is not directed to anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",
        },
        {
          title: "6. Your Rights",
          content:
            "You have the right to access, update, or request the deletion of your personal information. You can exercise these rights through your account settings or by contacting us directly.",
        },
        {
          title: "7. Changes to this Privacy Policy",
          content:
            'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Policy on this page and updating the "Effective Date."',
        },
        {
          title: "8. Contact",
          content:
            "If you have questions about this Privacy Policy, you can contact us at:",
          list: [
            "Aiphier LLC",
            "Address: 42 Broadway, New York, NY 10004, USA",
            "Email: support@aiphier.com",
          ],
        },
      ],
    },

    ES: {
      title: "Política de Privacidad",
      lastUpdated: "Fecha de entrada en vigor: 8 OCT 2025",
      intro:
        'Esta Política de Privacidad describe cómo Aiphier LLC ("Aiphier", "Nosotros", "Nuestro" o "la Compañía") recopila, utiliza y divulga su información personal cuando utiliza nuestro servicio (el "Servicio").',
      sections: [
        {
          title: "1. Información que Recopilamos",
          content: "Recopilamos dos tipos principales de información:",
          subsections: [
            {
              subtitle: "1.1. Información Personal (Datos Personales)",
              content:
                "Información que puede utilizarse para identificarle directamente. Esto puede incluir:",
              list: [
                "Nombre y Apellido",
                "Dirección de correo electrónico",
                "Dirección postal",
                "Número de teléfono",
                "Información de pago (gestionada por terceros procesadores de pago)",
              ],
            },
            {
              subtitle: "1.2. Información de Uso y Seguimiento",
              content:
                "Información recopilada automáticamente sobre su acceso y uso del Servicio. Esto incluye:",
              list: [
                "Dirección IP",
                "Tipo de navegador y sistema operativo",
                "Páginas visitadas y tiempo de permanencia",
                "Datos de clics y actividad en el Servicio",
                "Cookies y Tecnologías de Seguimiento: Utilizamos cookies y tecnologías similares (balizas web, etiquetas) para rastrear la actividad en nuestro Servicio y almacenar cierta información.",
              ],
            },
          ],
        },
        {
          title: "2. Uso de su Información",
          list: [
            "Provisión del Servicio: Para operar, mantener y mejorar el Servicio.",
            "Gestión de Cuentas: Para administrar su registro como usuario y proporcionarle acceso a las funcionalidades del Servicio.",
            "Comunicaciones: Para enviarle notificaciones, actualizaciones de seguridad y comunicaciones de marketing (si ha optado por recibirlas).",
            "Análisis: Para monitorear el uso del Servicio, analizar tendencias y evaluar la efectividad de nuestras campañas promocionales.",
            "Cumplimiento Legal: Para cumplir con obligaciones legales y proteger nuestros derechos.",
          ],
        },
        {
          title: "3. Divulgación y Compartición de Información",
          intro:
            "Podemos compartir su información personal en las siguientes circunstancias, siempre con el objetivo de minimizar la divulgación:",
          subsections: [
            {
              subtitle: "3.1. Proveedores de Servicios",
              content:
                "Compartimos información con terceros que realizan servicios en nuestro nombre (por ejemplo, alojamiento web, análisis de datos, procesamiento de pagos). Estos proveedores están obligados contractualmente a mantener la confidencialidad y a utilizar la información solo para los fines que les hemos indicado.",
            },
            {
              subtitle: "3.2. Transferencias Comerciales",
              content:
                "En caso de fusión, adquisición o venta de activos, su información puede ser transferida. Le notificaremos antes de que esto ocurra.",
            },
            {
              subtitle: "3.3. Cumplimiento Legal y Aplicación de la Ley",
              content:
                "Podemos divulgar su información si creemos de buena fe que es necesario para:",
              list: [
                "Cumplir con una obligación legal o una orden judicial.",
                "Proteger y defender los derechos o la propiedad de Aiphier.",
                "Proteger la seguridad personal de los usuarios del Servicio o del público.",
              ],
            },
          ],
        },
        {
          title: "4. Transferencia de Datos",
          content:
            "Su información, incluidos los Datos Personales, puede ser transferida y mantenida en ordenadores ubicados fuera de su estado, provincia, país u otra jurisdicción gubernamental. Al utilizar el Servicio, usted acepta dicha transferencia. Tomaremos todas las medidas razonablemente necesarias para garantizar que sus datos se traten de forma segura y de conformidad con esta Política de Privacidad.",
        },
        {
          title: "5. Privacidad de los Niños",
          content:
            "Nuestro Servicio no está dirigido a personas menores de 13 años. No recopilamos conscientemente información de identificación personal de niños menores de 13 años. Si usted es padre o tutor y cree que su hijo nos ha proporcionado información personal, contáctenos inmediatamente.",
        },
        {
          title: "6. Sus Derechos",
          content:
            "Usted tiene derecho a acceder, actualizar o solicitar la eliminación de su información personal. Puede ejercer estos derechos a través de la configuración de su cuenta o contactándonos directamente.",
        },
        {
          title: "7. Cambios a esta Política de Privacidad",
          content:
            'Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos cualquier cambio publicando la nueva Política en esta página y actualizando la "Fecha de entrada en vigor".',
        },
        {
          title: "8. Contacto",
          content:
            "Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos en:",
          list: [
            "Aiphier LLC",
            "Dirección: 42 Broadway, New York, NY 10004, EE. UU.",
            "Correo Electrónico: support@aiphier.com",
          ],
        },
      ],
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="max-w-4xl mx-auto px-4 py-24 font-light">
      <h1 className="text-4xl font-light mb-4 text-gray-900">
        {currentContent.title}
      </h1>
      <p className="text-gray-600 mb-4">{currentContent.lastUpdated}</p>

      <p className="text-gray-700 mb-10 leading-relaxed">
        {currentContent.intro}
      </p>

      <div className="space-y-12">
        {currentContent.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-light text-gray-900">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-gray-600">{section.content}</p>
            )}

            {section.subsections && (
              <div className="space-y-3">
                {section.subsections.map((sub, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-normal text-gray-900">
                      {sub.subtitle}
                    </h3>
                    <p className="text-gray-600">{sub.content}</p>
                    {sub.list && (
                      <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                        {sub.list.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {section.list && (
              <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
