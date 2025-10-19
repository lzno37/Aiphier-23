"use client";
import { useLanguage } from "@/hooks/Language";

export default function TermsPage() {
  const { currentLanguage } = useLanguage();

  const content = {
    EN: {
      title: "Terms of Service",
      lastUpdated: "Effective Date: 8 OCT 2025",
      importantNotice:
        "IMPORTANT: THESE TERMS CONTAIN A BINDING ARBITRATION CLAUSE AND A CLASS ACTION WAIVER IN SECTION 10.2 THAT AFFECT HOW DISPUTES ARE RESOLVED.",
      introParagraph:
        'These Terms of Service ("Terms") govern the access and use of the services provided by Aiphier LLC ("Aiphier," "we," "our," or "the Company"). By accessing or using any of our services, websites, applications, or products (collectively, the "Service"), you agree to be legally bound by these Terms. If you do not agree with these Terms, you must not access or use the Service.',
      sections: [
        {
          title: "1. Eligibility and Accounts",
          subsections: [
            {
              subtitle: "1.1. Eligibility",
              content:
                "You must be at least 18 years of age to use the Service. By agreeing to these Terms, you represent and warrant that you have the legal capacity to enter into a binding contract with Aiphier.",
            },
            {
              subtitle: "1.2. Accounts",
              content:
                "To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
            },
          ],
        },
        {
          title: "2. Limited License to Use",
          content:
            "Subject to your compliance with these Terms, Aiphier grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service solely for your internal, non-commercial purposes.",
        },
        {
          title: "3. Use Restrictions",
          content:
            "You agree not to, and will not permit others to, perform the following actions:",
          list: [
            "Sell, resell, rent, lease, transfer, assign, distribute, or commercially exploit the Service.",
            "Modify, reverse engineer, decompile, or disassemble any part of the Service.",
            "Use the Service to create a competing product or service.",
            "Use the Service for any illegal or unauthorised purpose.",
            "Infringe the intellectual property rights of Aiphier or third parties.",
          ],
        },
        {
          title: "4. Intellectual Property",
          content:
            "All intellectual property rights in the Service, including copyrights, patents, trademarks, and trade secrets, are the exclusive property of Aiphier LLC or its licensors. These Terms do not grant you any right, title, or interest in the Service, except for the limited license to use set forth in Section 2.",
        },
        {
          title: "5. User Content",
          content:
            "You are solely responsible for all content, data, or information that you upload, post, or display on the Service ('User Content'). By providing User Content, you grant Aiphier a worldwide, non-exclusive, royalty-free, fully paid, sublicensable, and transferable license to use, reproduce, distribute, modify, and display such User Content in connection with the operation of the Service.",
        },
        {
          title: "6. Disclaimer of Warranties",
          content:
            'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. Aiphier EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.',
        },
        {
          title: "7. Limitation of Liability",
          content:
            "To the maximum extent permitted by law, in no event shall Aiphier be liable to you or any third party for any indirect, incidental, special, exemplary, punitive, or consequential damages, including lost profits, lost data, or costs of procurement of substitute goods, arising from these Terms or the use of, or inability to use, the Service. Aiphier’s total cumulative liability to you for any damages arising from or related to these Terms or the Service will at all times be limited to fifty US dollars (USD $50.00).",
        },
        {
          title: "8. Indemnification",
          content:
            "You agree to indemnify and hold Aiphier and its officers, employees, and agents harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of (a) your use of the Service, (b) your violation of these Terms, or (c) your violation of applicable laws or regulations.",
        },
        {
          title: "9. Termination",
          content:
            "We may suspend or terminate your access to the Service at any time, in our sole discretion, with or without cause, and without notice. Upon termination, your right to use the Service will immediately cease. Sections 4, 6, 7, 8, 10, and 11 will survive any termination of these Terms.",
        },
        {
          title: "10. General Provisions",
          subsections: [
            {
              subtitle: "10.1. Dispute Resolution (Binding Arbitration)",
              content:
                "Any dispute or claim arising out of or relating to these Terms or the Service shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules.",
            },
            {
              subtitle: "10.2. Class Action Waiver",
              content:
                "You agree that disputes will be resolved only on an individual basis and not as a plaintiff or class member in any purported class, consolidated, or representative proceeding.",
            },
            {
              subtitle: "10.3. Copyright Policy (DMCA)",
              content:
                "Aiphier respects the intellectual property of others. We have adopted a copyright policy in accordance with the Digital Millennium Copyright Act (DMCA) of 17 U.S.C. § 512. If you believe your work has been copied in a way that constitutes copyright infringement, please send a notification to our Copyright Agent at the contact address below.",
            },
            {
              subtitle: "10.4. Electronic Communications",
              content:
                "You consent to receive electronic communications from Aiphier.",
            },
          ],
        },
        {
          title: "11. Contact Information",
          content:
            "For questions or notices regarding these Terms, including DMCA infringement notification, please contact:",
          list: [
            "Aiphier LLC",
            "Address: 42 Broadway, New York, NY 10004, USA",
            "Email: support@aiphier.com",
          ],
        },
      ],
    },

    ES: {
      title: "Términos de Servicio",
      lastUpdated: "Fecha de entrada en vigor: 8 OCT 2025",
      importantNotice:
        "IMPORTANTE: ESTOS TÉRMINOS CONTIENEN UNA CLÁUSULA DE ARBITRAJE VINCULANTE Y UNA RENUNCIA A DEMANDAS COLECTIVAS EN LA SECCIÓN 10.2 QUE AFECTAN CÓMO SE RESUELVEN LAS DISPUTAS.",
      introParagraph:
        'Estos Términos de Servicio ("Términos") rigen el acceso y uso de los servicios proporcionados por Aiphier LLC ("Aiphier", "nosotros", "nuestro" o "la Compañía"). Al acceder o utilizar cualquiera de nuestros servicios, sitios web, aplicaciones o productos (colectivamente, el "Servicio"), usted acepta estar legalmente obligado por estos Términos. Si no está de acuerdo con estos Términos, no debe acceder ni utilizar el Servicio.',
      sections: [
        {
          title: "1. Elegibilidad y Cuentas",
          subsections: [
            {
              subtitle: "1.1. Elegibilidad",
              content:
                "Debe tener al menos 18 años de edad para utilizar el Servicio. Al aceptar estos Términos, usted declara y garantiza que tiene la capacidad legal para celebrar un contrato vinculante con Aiphier.",
            },
            {
              subtitle: "1.2. Cuentas",
              content:
                "Para acceder a ciertas funciones del Servicio, es posible que deba crear una cuenta. Usted es responsable de mantener la confidencialidad de las credenciales de su cuenta y de todas las actividades que ocurran bajo su cuenta.",
            },
          ],
        },
        {
          title: "2. Licencia Limitada de Uso",
          content:
            "Sujeto al cumplimiento de estos Términos, Aiphier le otorga una licencia limitada, no exclusiva, intransferible y revocable para acceder y utilizar el Servicio únicamente para sus fines internos y no comerciales.",
        },
        {
          title: "3. Restricciones de Uso",
          content:
            "Usted se compromete a no realizar, ni permitir que otros realicen, las siguientes acciones:",
          list: [
            "Vender, revender, alquilar, arrendar, transferir, ceder, distribuir o explotar comercialmente el Servicio.",
            "Modificar, realizar ingeniería inversa, descompilar o desensamblar cualquier parte del Servicio.",
            "Utilizar el Servicio para crear un producto o servicio de la competencia.",
            "Utilizar el Servicio para cualquier propósito ilegal o no autorizado.",
            "Infringir los derechos de propiedad intelectual de Aiphier o de terceros.",
          ],
        },
        {
          title: "4. Propiedad Intelectual",
          content:
            "Todos los derechos de propiedad intelectual sobre el Servicio, incluidos derechos de autor, patentes, marcas comerciales y secretos comerciales, son propiedad exclusiva de Aiphier LLC o de sus licenciantes. Estos Términos no le otorgan ningún derecho, título o interés sobre el Servicio, excepto la licencia limitada de uso establecida en la Sección 2.",
        },
        {
          title: "5. Contenido del Usuario",
          content:
            "Usted es el único responsable de todo el contenido, datos o información que cargue, publique o muestre en el Servicio ('Contenido del Usuario'). Al proporcionar Contenido del Usuario, usted otorga a Aiphier una licencia mundial, no exclusiva, libre de regalías, totalmente pagada, sublicenciable y transferible para usar, reproducir, distribuir, modificar y mostrar dicho Contenido del Usuario en relación con la operación del Servicio.",
        },
        {
          title: "6. Descargo de Garantías",
          content:
            'EL SERVICIO SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD", SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS. Aiphier RENUNCIA EXPRESAMENTE A TODAS LAS GARANTÍAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN PARTICULAR, TÍTULO Y NO INFRACCIÓN. NO GARANTIZAMOS QUE EL SERVICIO SERÁ ININTERRUMPIDO, SEGURO O LIBRE DE ERRORES.',
        },
        {
          title: "7. Limitación de Responsabilidad",
          content:
            "EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, EN NINGÚN CASO Aiphier SERÁ RESPONSABLE ANTE USTED O CUALQUIER TERCERO POR CUALQUIER DAÑO INDIRECTO, INCIDENTAL, ESPECIAL, EJEMPLAR, PUNITIVO O CONSECUENTE, INCLUIDA LA PÉRDIDA DE BENEFICIOS, PÉRDIDA DE DATOS O COSTOS DE ADQUISICIÓN DE BIENES SUSTITUTOS, QUE SURJAN DE ESTOS TÉRMINOS O DEL USO O LA IMPOSIBILIDAD DE USAR EL SERVICIO. LA RESPONSABILIDAD TOTAL ACUMULADA DE Aiphier SE LIMITARÁ EN TODO MOMENTO A CINCUENTA DÓLARES ESTADOUNIDENSES (USD $50.00).",
        },
        {
          title: "8. Indemnización",
          content:
            "Usted acepta indemnizar y eximir de responsabilidad a Aiphier y a sus funcionarios, empleados y agentes de cualquier reclamo o demanda, incluidos los honorarios razonables de abogados, realizados por un tercero debido a o que surjan de (a) su uso del Servicio, (b) su violación de estos Términos, o (c) su violación de las leyes o regulaciones aplicables.",
        },
        {
          title: "9. Terminación",
          content:
            "Podemos suspender o rescindir su acceso al Servicio en cualquier momento, a nuestra entera discreción, con o sin causa, y sin previo aviso. Tras la terminación, su derecho a utilizar el Servicio cesará inmediatamente. Las Secciones 4, 6, 7, 8, 10 y 11 sobrevivirán a cualquier terminación de estos Términos.",
        },
        {
          title: "10. Disposiciones Generales",
          subsections: [
            {
              subtitle: "10.1. Resolución de Disputas (Arbitraje Vinculante)",
              content:
                "Cualquier disputa o reclamo que surja de o esté relacionado con estos Términos o el Servicio se resolverá mediante arbitraje vinculante administrado por la American Arbitration Association (AAA) de acuerdo con sus Reglas de Arbitraje Comercial.",
            },
            {
              subtitle: "10.2. Renuncia a Demandas Colectivas",
              content:
                "Usted acepta que las disputas se resolverán solo de forma individual y no como demandante o miembro de una clase en ningún procedimiento colectivo, consolidado o representativo.",
            },
            {
              subtitle: "10.3. Política de Derechos de Autor (DMCA)",
              content:
                "Aiphier respeta la propiedad intelectual de otros. Hemos adoptado una política de derechos de autor conforme a la Ley de Derechos de Autor del Milenio Digital (DMCA) de 17 U.S.C. § 512. Si cree que su trabajo ha sido copiado de una manera que constituye una infracción de derechos de autor, envíe una notificación a nuestro Agente de Derechos de Autor a la dirección indicada a continuación.",
            },
            {
              subtitle: "10.4. Comunicaciones Electrónicas",
              content:
                "Usted acepta recibir comunicaciones electrónicas de Aiphier.",
            },
          ],
        },
        {
          title: "11. Información de Contacto",
          content:
            "Para preguntas o notificaciones relacionadas con estos Términos, incluida la notificación de infracción de derechos de autor (DMCA), comuníquese con:",
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

      {/* Important notice */}

      {/* Intro paragraph immediately after effective date */}
      {currentContent.introParagraph && (
        <p className="text-gray-700 mb-8 leading-relaxed">
          {currentContent.introParagraph}
        </p>
      )}

      {currentContent.importantNotice && (
        <div className="mb-6  ">
          <p className="text-sm font-medium">
            {currentContent.importantNotice}
          </p>
        </div>
      )}

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
