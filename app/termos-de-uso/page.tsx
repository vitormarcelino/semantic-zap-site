import type { Metadata } from "next";
import LegalPage, { Section, SubSection, BulletList, InfoBox } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Uso — SemanticZap",
  description:
    "Leia os Termos de Uso do SemanticZap antes de utilizar nossa plataforma de automação de WhatsApp com IA.",
  robots: { index: true, follow: true },
};

export default function TermosDeUso() {
  return (
    <LegalPage
      title="Termos de Uso"
      subtitle="Condições que regem o uso da plataforma SemanticZap."
      lastUpdated="24 de abril de 2026"
    >
      <Section title="1. Aceitação dos Termos">
        <p>
          Ao criar uma conta, acessar ou utilizar a plataforma SemanticZap, você confirma que leu,
          entendeu e concorda em cumprir estes Termos de Uso e nossa{" "}
          <a href="/politica-de-privacidade" className="text-green underline">
            Política de Privacidade
          </a>
          .
        </p>
        <p>
          Se você está utilizando o SemanticZap em nome de uma empresa ou organização, declara
          ter autoridade para vincular essa entidade a estes termos.
        </p>
        <p>
          Caso não concorde com qualquer parte destes termos, não utilize a plataforma.
        </p>
      </Section>

      <Section title="2. Descrição do Serviço">
        <p>
          O SemanticZap é uma plataforma SaaS (Software as a Service) que permite a empresas criar e
          gerenciar agentes de IA para atendimento automatizado via WhatsApp, com suporte a
          atendimento híbrido (bot + humano). O serviço inclui:
        </p>
        <BulletList
          items={[
            "Painel de configuração visual do agente de IA (sem necessidade de código)",
            "Integração com WhatsApp Business API (Meta)",
            "Processamento de linguagem natural via GPT-4o (OpenAI)",
            "Atendimento híbrido com takeover humano em tempo real",
            "Dashboard de analytics e histórico de conversas",
            "Gestão multi-agente e multi-número",
          ]}
        />
        <p>
          O SemanticZap opera como intermediário tecnológico e não é parte das conversas entre as
          empresas e seus clientes finais.
        </p>
      </Section>

      <Section title="3. Elegibilidade e Cadastro">
        <p>Para utilizar o SemanticZap, você deve:</p>
        <BulletList
          items={[
            "Ter pelo menos 18 anos ou a maioridade legal em sua jurisdição",
            "Fornecer informações de cadastro verdadeiras, precisas e atualizadas",
            "Manter a confidencialidade das suas credenciais de acesso",
            "Possuir uma conta legítima no WhatsApp Business",
            "Cumprir os Termos de Serviço do WhatsApp Business Platform (Meta)",
          ]}
        />
        <p>
          Você é responsável por todas as atividades realizadas com suas credenciais. Em caso de
          acesso não autorizado, notifique-nos imediatamente.
        </p>
      </Section>

      <Section title="4. Conformidade com WhatsApp Business Platform">
        <p>
          O SemanticZap utiliza a{" "}
          <strong className="text-white">WhatsApp Business Platform API</strong> da Meta Platforms,
          Inc. Ao usar nosso serviço, você concorda em cumprir integralmente:
        </p>
        <BulletList
          items={[
            "Política Comercial do WhatsApp Business (WhatsApp Business Policy)",
            "Diretrizes de Mensagens do WhatsApp (WhatsApp Messaging Guidelines)",
            "Política de Uso Aceitável da Meta (Meta Platform Terms)",
            "Toda legislação aplicável sobre comunicações eletrônicas e proteção de dados",
          ]}
        />
        <SubSection title="4.1 Uso permitido via WhatsApp">
          <BulletList
            items={[
              "Atendimento ao cliente iniciado pelo próprio usuário final (mensagens inbound)",
              "Respostas dentro da janela de 24 horas estabelecida pela Meta",
              "Envio de notificações transacionais aprovadas via templates HSM",
              "Atendimento híbrido bot + humano com transição transparente",
            ]}
          />
        </SubSection>
        <SubSection title="4.2 Uso proibido via WhatsApp">
          <BulletList
            items={[
              "Envio de spam, mensagens não solicitadas ou marketing em massa não autorizado",
              "Comunicações que violem as políticas da Meta ou do WhatsApp",
              "Uso em setores proibidos pela Meta (armas, produtos ilegais, conteúdo adulto não autorizado, etc.)",
              "Qualquer atividade que viole leis aplicáveis ou direitos de terceiros",
            ]}
          />
        </SubSection>
        <InfoBox>
          A violação das políticas da Meta pode resultar na suspensão do número de WhatsApp Business
          do cliente, independentemente de ação do SemanticZap. O SemanticZap não se responsabiliza
          por suspensões resultantes de uso indevido pelo cliente.
        </InfoBox>
      </Section>

      <Section title="5. Obrigações do Cliente">
        <p>Ao utilizar o SemanticZap, você se compromete a:</p>
        <BulletList
          items={[
            "Utilizar a plataforma exclusivamente para fins legítimos de atendimento ao cliente",
            "Obter os consentimentos necessários dos seus usuários finais para coleta e tratamento de dados via WhatsApp, conforme a LGPD e demais leis aplicáveis",
            "Manter uma Política de Privacidade própria e acessível aos seus usuários finais, informando o uso de IA no atendimento",
            "Não coletar, armazenar ou processar dados sensíveis (saúde, biometria, orientação sexual, etc.) sem as salvaguardas adequadas",
            "Responder com diligência às solicitações de usuários finais relacionadas a dados pessoais",
            "Notificar o SemanticZap imediatamente sobre qualquer incidente de segurança que envolva dados processados na plataforma",
            "Manter os dados de acesso e a conta em sigilo",
          ]}
        />
      </Section>

      <Section title="6. Usos Proibidos">
        <p>É expressamente proibido utilizar o SemanticZap para:</p>
        <BulletList
          items={[
            "Qualquer atividade ilegal, fraudulenta ou enganosa",
            "Assédio, discriminação ou ameaças contra qualquer pessoa",
            "Distribuição de malware, vírus ou código malicioso",
            "Violação de direitos de propriedade intelectual de terceiros",
            "Coleta não autorizada de dados pessoais",
            "Impersonação de outras empresas, marcas ou pessoas",
            "Qualquer atividade que sobrecarregue, interfira ou prejudique a infraestrutura do SemanticZap ou de terceiros",
            "Contornar medidas de segurança, autenticação ou limitações técnicas da plataforma",
            "Revenda ou sublicenciamento do serviço sem autorização expressa por escrito",
          ]}
        />
      </Section>

      <Section title="7. Planos, Pagamento e Cancelamento">
        <SubSection title="7.1 Período de teste">
          <p>
            Novos clientes têm acesso gratuito por 30 dias, sem necessidade de cartão de crédito.
            Ao final do período de teste, a conta é suspensa automaticamente até a escolha de um
            plano pago.
          </p>
        </SubSection>
        <SubSection title="7.2 Faturamento">
          <p>
            Os planos são cobrados mensalmente ou anualmente, conforme escolha do cliente. Os valores
            são informados na página de preços e podem ser atualizados com aviso prévio de 30 dias.
          </p>
        </SubSection>
        <SubSection title="7.3 Cancelamento">
          <p>
            Você pode cancelar sua assinatura a qualquer momento pelo painel. O acesso permanece
            ativo até o fim do período já pago. Não há reembolso proporcional por cancelamento
            antecipado, exceto nos casos exigidos por lei.
          </p>
        </SubSection>
      </Section>

      <Section title="8. Propriedade Intelectual">
        <p>
          Todo o código, design, marca, logotipos, funcionalidades e conteúdo da plataforma
          SemanticZap são de propriedade exclusiva da VM Consultoria e protegidos pela legislação
          de propriedade intelectual aplicável.
        </p>
        <p>
          Os dados, configurações, histórico de conversas e conteúdo gerado pelo cliente em sua
          conta pertencem ao próprio cliente. O SemanticZap não reivindica propriedade sobre esses
          dados.
        </p>
        <p>
          Ao utilizar o serviço, o cliente concede ao SemanticZap uma licença limitada, não
          exclusiva e não transferível para processar seus dados exclusivamente para a prestação do
          serviço contratado.
        </p>
      </Section>

      <Section title="9. Disponibilidade e SLA">
        <p>
          O SemanticZap emprega seus melhores esforços para manter a plataforma disponível 24/7.
          No entanto, não garantimos disponibilidade ininterrupta. Manutenções programadas serão
          comunicadas com antecedência sempre que possível.
        </p>
        <p>
          A disponibilidade da funcionalidade de WhatsApp depende da infraestrutura da Meta e está
          fora do controle direto do SemanticZap.
        </p>
      </Section>

      <Section title="10. Limitação de Responsabilidade">
        <p>
          Na máxima extensão permitida pela lei aplicável, o SemanticZap não se responsabiliza por:
        </p>
        <BulletList
          items={[
            "Danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou impossibilidade de uso da plataforma",
            "Perda de dados, lucros cessantes ou interrupção de negócios",
            "Conteúdo gerado pelo agente de IA que não reflita a intenção do cliente ou que contenha imprecisões",
            "Suspensão ou restrição de conta no WhatsApp Business por parte da Meta",
            "Falhas de terceiros como OpenAI, Meta ou provedores de infraestrutura",
            "Uso indevido da plataforma pelo cliente ou por terceiros com as credenciais do cliente",
          ]}
        />
        <p>
          A responsabilidade total do SemanticZap por qualquer reclamação fica limitada ao valor
          pago pelo cliente nos 3 meses anteriores ao evento que deu origem à reclamação.
        </p>
      </Section>

      <Section title="11. Indenização">
        <p>
          Você concorda em indenizar e isentar o SemanticZap, seus diretores, funcionários e
          parceiros de quaisquer reclamações, danos, perdas, custos ou despesas (incluindo
          honorários advocatícios razoáveis) decorrentes de: (a) violação destes Termos; (b) uso
          indevido da plataforma; (c) violação de direitos de terceiros; ou (d) não cumprimento de
          obrigações legais perante seus usuários finais.
        </p>
      </Section>

      <Section title="12. Rescisão">
        <p>
          O SemanticZap pode suspender ou encerrar sua conta, a qualquer tempo e sem aviso prévio,
          em caso de violação destes Termos, das políticas da Meta ou de qualquer lei aplicável.
          Em caso de encerramento por justa causa, nenhum reembolso será devido.
        </p>
        <p>
          Após o encerramento, o cliente terá 30 dias para solicitar a exportação dos seus dados.
          Após esse prazo, os dados serão excluídos conforme nossa Política de Privacidade.
        </p>
      </Section>

      <Section title="13. Alterações nos Termos">
        <p>
          Podemos modificar estes Termos a qualquer momento. Alterações materiais serão comunicadas
          por e-mail com antecedência mínima de 15 dias. O uso continuado da plataforma após a
          vigência das novas condições constitui aceite tácito.
        </p>
      </Section>

      <Section title="14. Legislação Aplicável e Foro">
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. As partes elegem o
          foro da comarca de domicílio do cliente, ou, na ausência de foro definido, o da cidade de
          São Paulo/SP, com exclusão de qualquer outro, por mais privilegiado que seja.
        </p>
      </Section>

      <Section title="15. Contato">
        <InfoBox>
          <strong className="text-white">VM Consultoria — SemanticZap</strong>
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
