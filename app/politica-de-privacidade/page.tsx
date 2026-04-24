import type { Metadata } from "next";
import LegalPage, { Section, SubSection, BulletList, InfoBox } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade — SemanticZap",
  description:
    "Entenda como o SemanticZap coleta, usa e protege os dados pessoais dos seus usuários e clientes.",
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalPage
      title="Política de Privacidade"
      subtitle="Como coletamos, usamos e protegemos seus dados e os dados dos seus clientes."
      lastUpdated="24 de abril de 2026"
    >
      <Section title="1. Quem somos">
        <p>
          O SemanticZap é um produto da <strong className="text-white">VM Consultoria</strong>,
          pessoa jurídica de direito privado, inscrita no CNPJ sob o n.º 52.243.638/0001-57,
          doravante denominada simplesmente <strong className="text-white">"SemanticZap"</strong>,{" "}
          <strong className="text-white">"nós"</strong> ou <strong className="text-white">"nosso"</strong>.
        </p>
        <p>
          O SemanticZap é uma plataforma de automação de atendimento via WhatsApp que utiliza
          inteligência artificial (IA) para responder mensagens automaticamente em nome das
          empresas que contratam nosso serviço. Para operar, integramos a{" "}
          <strong className="text-white">WhatsApp Business API</strong> (fornecida pela Meta
          Platforms, Inc.) e o modelo de linguagem <strong className="text-white">GPT-4o</strong>{" "}
          (OpenAI, LLC).
        </p>
        <InfoBox>
          <strong className="text-white">Contato do controlador de dados:</strong>
          <br />
          VM Consultoria — SemanticZap
          <br />
          E-mail: <a href="mailto:contato@semanticzap.com.br" className="text-green underline">contato@semanticzap.com.br</a>
          <br />
          CNPJ: 52.243.638/0001-57
        </InfoBox>
      </Section>

      <Section title="2. A quem esta política se aplica">
        <p>Esta Política de Privacidade se aplica a dois grupos distintos:</p>
        <SubSection title="2.1 Clientes SemanticZap (empresas)">
          <p>
            Empresas e empreendedores que se cadastram na plataforma SemanticZap para criar e
            gerenciar agentes de IA no WhatsApp.
          </p>
        </SubSection>
        <SubSection title="2.2 Usuários finais (clientes das empresas)">
          <p>
            Pessoas que enviam mensagens para o número de WhatsApp de uma empresa que utiliza o
            SemanticZap. Esses usuários interagem com o agente de IA configurado pelo nosso cliente.
          </p>
        </SubSection>
      </Section>

      <Section title="3. Dados que coletamos">
        <SubSection title="3.1 Dados dos clientes SemanticZap (empresas)">
          <BulletList
            items={[
              "Nome completo ou razão social e nome fantasia",
              "CPF ou CNPJ",
              "Endereço de e-mail",
              "Número de telefone e número de WhatsApp Business",
              "Dados de faturamento e pagamento (processados por gateway seguro)",
              "Preferências de configuração do agente (nome, personalidade, instruções, mensagens padrão)",
              "Logs de uso da plataforma (acessos, eventos, erros)",
            ]}
          />
        </SubSection>
        <SubSection title="3.2 Dados dos usuários finais (clientes das empresas)">
          <BulletList
            items={[
              "Número de telefone (identificador do WhatsApp)",
              "Nome exibido no perfil do WhatsApp (quando disponibilizado pela plataforma)",
              "Conteúdo das mensagens trocadas com o agente de IA",
              "Timestamps e metadados das conversas",
              "Status de atendimento (bot ou humano)",
            ]}
          />
          <p className="mt-2">
            <strong className="text-white">Importante:</strong> os dados dos usuários finais são
            coletados e tratados por conta e sob instrução do cliente SemanticZap, que é o
            controlador desses dados nos termos da LGPD. O SemanticZap atua como operador de dados
            em relação a essas informações.
          </p>
        </SubSection>
        <SubSection title="3.3 Dados coletados automaticamente">
          <BulletList
            items={[
              "Endereço IP e dados de geolocalização aproximada",
              "Tipo de navegador, sistema operacional e dispositivo (no acesso ao painel web)",
              "Cookies de sessão e preferências de interface",
            ]}
          />
        </SubSection>
      </Section>

      <Section title="4. Como usamos os dados">
        <SubSection title="4.1 Para operar o serviço">
          <BulletList
            items={[
              "Autenticar usuários e gerenciar sessões na plataforma",
              "Enviar e receber mensagens via WhatsApp Business API",
              "Processar conversas com o modelo de IA (GPT-4o) para gerar respostas automáticas",
              "Armazenar o histórico de conversas para manutenção de contexto durante o atendimento",
              "Permitir o takeover humano (assumir a conversa) pelo cliente SemanticZap",
            ]}
          />
        </SubSection>
        <SubSection title="4.2 Para gestão do relacionamento">
          <BulletList
            items={[
              "Enviar notificações transacionais (confirmações, alertas, faturas)",
              "Prestar suporte técnico",
              "Comunicar atualizações de serviço e políticas",
            ]}
          />
        </SubSection>
        <SubSection title="4.3 Para analytics e melhoria do produto">
          <BulletList
            items={[
              "Gerar métricas agregadas e anonimizadas sobre uso da plataforma",
              "Identificar e corrigir erros e falhas de sistema",
              "Desenvolver novas funcionalidades",
            ]}
          />
        </SubSection>
        <p className="mt-2">
          <strong className="text-white">Não vendemos dados pessoais</strong> a terceiros. Não
          utilizamos o conteúdo das conversas dos usuários finais para treinar modelos de IA
          proprietários.
        </p>
      </Section>

      <Section title="5. Compartilhamento com terceiros">
        <p>
          Para prestar o serviço, compartilhamos dados com os seguintes fornecedores, todos sujeitos
          a obrigações contratuais de confidencialidade e proteção de dados:
        </p>
        <SubSection title="5.1 Meta Platforms, Inc. (WhatsApp Business API)">
          <p>
            A entrega e o recebimento de mensagens de WhatsApp são realizados por meio da
            infraestrutura da Meta. Ao utilizar o SemanticZap, você reconhece que as mensagens
            trafegam pela API do WhatsApp Business, sujeita aos{" "}
            <a
              href="https://www.whatsapp.com/legal/business-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green underline"
            >
              Termos de Serviço do WhatsApp Business
            </a>{" "}
            e à{" "}
            <a
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green underline"
            >
              Política de Privacidade da Meta
            </a>
            .
          </p>
        </SubSection>
        <SubSection title="5.2 OpenAI, LLC (GPT-4o)">
          <p>
            O conteúdo das mensagens é enviado à API da OpenAI para geração das respostas automáticas.
            A OpenAI processa os dados conforme sua{" "}
            <a
              href="https://openai.com/policies/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green underline"
            >
              Política de Privacidade
            </a>
            . Utilizamos os contratos de processamento de dados da OpenAI (Data Processing
            Agreement) que proíbem o uso dos dados submetidos via API para treinamento de modelos.
          </p>
        </SubSection>
        <SubSection title="5.3 Processadores de pagamento">
          <p>
            Dados de faturamento são processados por gateways de pagamento certificados PCI-DSS. Não
            armazenamos números completos de cartão de crédito.
          </p>
        </SubSection>
        <SubSection title="5.4 Autoridades e obrigações legais">
          <p>
            Podemos divulgar dados quando exigido por lei, ordem judicial ou autoridade regulatória
            competente, incluindo a Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
        </SubSection>
      </Section>

      <Section title="6. Retenção de dados">
        <BulletList
          items={[
            "Dados de conta dos clientes SemanticZap: mantidos pelo período de vigência do contrato mais 5 anos para fins fiscais e legais.",
            "Histórico de conversas dos usuários finais: mantido por até 12 meses após a última interação, salvo instrução contrária do cliente SemanticZap ou exigência legal.",
            "Logs de sistema: mantidos por 90 dias para fins de segurança e diagnóstico.",
            "Após o encerramento da conta, os dados são anonimizados ou excluídos no prazo de até 30 dias, exceto os que precisam ser retidos por obrigação legal.",
          ]}
        />
      </Section>

      <Section title="7. Segurança">
        <p>
          Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra acesso
          não autorizado, perda, alteração ou divulgação indevida, incluindo:
        </p>
        <BulletList
          items={[
            "Transmissão de dados via TLS/HTTPS",
            "Armazenamento com criptografia em repouso",
            "Controle de acesso com autenticação forte",
            "Monitoramento contínuo de segurança e logs de auditoria",
            "Infraestrutura em nuvem com certificações de segurança reconhecidas",
          ]}
        />
        <p className="mt-2">
          Em caso de incidente de segurança que possa afetar seus dados, notificaremos os titulares
          e a ANPD conforme exigido pela LGPD.
        </p>
      </Section>

      <Section title="8. Transferência internacional de dados">
        <p>
          O processamento de mensagens pela OpenAI (GPT-4o) implica transferência internacional de
          dados para os Estados Unidos. Essa transferência é realizada com base em cláusulas
          contratuais padrão e no Data Processing Agreement celebrado com a OpenAI, que garante nível
          de proteção adequado.
        </p>
        <p>
          A Meta Platforms também processa dados nos Estados Unidos conforme sua política de
          privacidade.
        </p>
      </Section>

      <Section title="9. Seus direitos (LGPD)">
        <p>
          Nos termos da Lei Geral de Proteção de Dados (Lei n.º 13.709/2018), você tem os seguintes
          direitos sobre seus dados pessoais:
        </p>
        <BulletList
          items={[
            "Confirmação da existência de tratamento",
            "Acesso aos dados",
            "Correção de dados incompletos, inexatos ou desatualizados",
            "Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos",
            "Portabilidade dos dados",
            "Eliminação dos dados tratados com base no consentimento",
            "Informação sobre entidades com quem os dados são compartilhados",
            "Revogação do consentimento a qualquer momento",
            "Oposição ao tratamento realizado em desacordo com a LGPD",
          ]}
        />
        <p className="mt-2">
          Para exercer seus direitos, acesse nossa página{" "}
          <a href="/lgpd" className="text-green underline">
            LGPD
          </a>{" "}
          ou entre em contato pelo e-mail{" "}
          <a href="mailto:contato@semanticzap.com.br" className="text-green underline">
            contato@semanticzap.com.br
          </a>
          .
        </p>
      </Section>

      <Section title="10. Cookies">
        <p>
          Utilizamos cookies essenciais para funcionamento da plataforma (autenticação e sessão) e
          cookies analíticos para entender como a plataforma é usada. Você pode gerenciar as
          preferências de cookies nas configurações do seu navegador.
        </p>
      </Section>

      <Section title="11. Alterações nesta política">
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente. Quando as alterações forem
          relevantes, notificaremos via e-mail ou aviso na plataforma com pelo menos 15 dias de
          antecedência. O uso continuado do serviço após a vigência das novas condições constitui
          aceite das alterações.
        </p>
      </Section>

      <Section title="12. Contato">
        <p>
          Para dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato:
        </p>
        <InfoBox>
          <strong className="text-white">VM Consultoria — SemanticZap</strong>
          <br />
          Encarregado de Proteção de Dados (DPO)
          <br />
          E-mail:{" "}
          <a href="mailto:contato@semanticzap.com.br" className="text-green underline">
            contato@semanticzap.com.br
          </a>
          <br />
          CNPJ: 52.243.638/0001-57
        </InfoBox>
      </Section>
    </LegalPage>
  );
}
