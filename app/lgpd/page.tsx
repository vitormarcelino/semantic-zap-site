import type { Metadata } from "next";
import LegalPage, { Section, SubSection, BulletList, InfoBox } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "LGPD — SemanticZap",
  description:
    "Saiba como o SemanticZap cumpre a Lei Geral de Proteção de Dados (LGPD) e como você pode exercer seus direitos.",
  robots: { index: true, follow: true },
};

export default function Lgpd() {
  return (
    <LegalPage
      title="LGPD"
      subtitle="Como cumprimos a Lei Geral de Proteção de Dados e como você pode exercer seus direitos."
      lastUpdated="24 de abril de 2026"
    >
      <Section title="1. Sobre a LGPD">
        <p>
          A <strong className="text-white">Lei Geral de Proteção de Dados Pessoais (LGPD)</strong>,
          Lei n.º 13.709/2018, é a legislação brasileira que regula o tratamento de dados pessoais
          por pessoas físicas e jurídicas, com o objetivo de proteger os direitos fundamentais de
          liberdade e privacidade.
        </p>
        <p>
          A VM Consultoria, responsável pelo produto SemanticZap, está comprometida com o
          cumprimento integral da LGPD em todas as suas operações.
        </p>
      </Section>

      <Section title="2. Papéis no tratamento de dados">
        <SubSection title="2.1 SemanticZap como controlador">
          <p>
            O SemanticZap atua como <strong className="text-white">controlador</strong> dos dados
            pessoais dos seus <strong className="text-white">clientes</strong> (empresas e
            empreendedores cadastrados na plataforma). Isso significa que definimos as finalidades e
            os meios do tratamento desses dados.
          </p>
        </SubSection>
        <SubSection title="2.2 SemanticZap como operador">
          <p>
            Em relação aos dados dos <strong className="text-white">usuários finais</strong> (os
            clientes das empresas que usam o SemanticZap), atuamos como{" "}
            <strong className="text-white">operador</strong>. O tratamento desses dados é realizado
            sob instrução dos nossos clientes, que são os controladores dessas informações.
          </p>
          <p>
            Se você é usuário final e deseja exercer seus direitos sobre dados processados durante
            um atendimento via WhatsApp de uma empresa, deve contatar diretamente a empresa que
            utilizou o SemanticZap para atendê-lo.
          </p>
        </SubSection>
      </Section>

      <Section title="3. Bases legais para o tratamento">
        <p>
          O SemanticZap trata dados pessoais com fundamento nas seguintes bases legais previstas no
          art. 7.º da LGPD:
        </p>
        <SubSection title="Execução de contrato (art. 7.º, V)">
          <p>
            Dados de conta, de faturamento e de configuração dos clientes são tratados para
            viabilizar a prestação do serviço contratado.
          </p>
        </SubSection>
        <SubSection title="Legítimo interesse (art. 7.º, IX)">
          <p>
            Dados de uso e logs técnicos são tratados para melhorar a segurança, detectar fraudes e
            aprimorar a plataforma, respeitando os direitos e expectativas dos titulares.
          </p>
        </SubSection>
        <SubSection title="Cumprimento de obrigação legal (art. 7.º, II)">
          <p>
            Certos dados são retidos para cumprir obrigações fiscais, contábeis e regulatórias
            previstas em lei.
          </p>
        </SubSection>
        <SubSection title="Consentimento (art. 7.º, I)">
          <p>
            Para comunicações de marketing e envio de novidades, utilizamos o consentimento
            explícito do titular, que pode ser revogado a qualquer momento.
          </p>
        </SubSection>
      </Section>

      <Section title="4. Categorias de dados e finalidades">
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 pr-4 font-headline font-semibold text-white/80 w-1/3">
                  Categoria de dados
                </th>
                <th className="text-left py-3 pr-4 font-headline font-semibold text-white/80 w-1/3">
                  Finalidade
                </th>
                <th className="text-left py-3 font-headline font-semibold text-white/80 w-1/3">
                  Base legal
                </th>
              </tr>
            </thead>
            <tbody className="font-body text-text-muted">
              {[
                ["Dados de cadastro (nome, e-mail, CNPJ)", "Criação e gestão da conta", "Execução de contrato"],
                ["Dados de faturamento", "Cobrança e emissão de nota fiscal", "Execução de contrato / Obrigação legal"],
                ["Dados de configuração do agente", "Operação do serviço contratado", "Execução de contrato"],
                ["Logs de acesso e uso", "Segurança, diagnóstico e melhoria", "Legítimo interesse"],
                ["Histórico de conversas (usuários finais)", "Continuidade de contexto no atendimento", "Execução de contrato (como operador)"],
                ["E-mail (marketing)", "Comunicados e novidades do produto", "Consentimento"],
              ].map(([cat, fin, base], i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-3 pr-4">{cat}</td>
                  <td className="py-3 pr-4">{fin}</td>
                  <td className="py-3">{base}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="5. Compartilhamento de dados">
        <p>Os dados são compartilhados apenas com:</p>
        <BulletList
          items={[
            "Meta Platforms (WhatsApp Business API) — para entrega e recebimento de mensagens",
            "OpenAI (GPT-4o) — para geração das respostas automáticas do agente",
            "Gateway de pagamento certificado PCI-DSS — para processamento de cobranças",
            "Autoridades competentes — quando exigido por lei ou ordem judicial",
          ]}
        />
        <p>
          Todos os fornecedores são submetidos a contratos de processamento de dados que impõem
          obrigações de confidencialidade e segurança compatíveis com a LGPD.
        </p>
      </Section>

      <Section title="6. Seus direitos como titular">
        <p>
          Conforme o art. 18 da LGPD, você tem os seguintes direitos em relação aos seus dados
          pessoais tratados pelo SemanticZap:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {[
            {
              title: "Confirmação e acesso",
              desc: "Saber se tratamos seus dados e obter uma cópia deles.",
            },
            {
              title: "Correção",
              desc: "Corrigir dados incompletos, inexatos ou desatualizados.",
            },
            {
              title: "Anonimização ou eliminação",
              desc: "Solicitar a anonimização ou exclusão de dados desnecessários ou excessivos.",
            },
            {
              title: "Portabilidade",
              desc: "Receber seus dados em formato estruturado para uso em outro serviço.",
            },
            {
              title: "Revogação do consentimento",
              desc: "Retirar o consentimento a qualquer tempo, sem ônus.",
            },
            {
              title: "Oposição",
              desc: "Opor-se a tratamentos realizados em desacordo com a LGPD.",
            },
            {
              title: "Informação sobre compartilhamento",
              desc: "Saber com quais terceiros seus dados são compartilhados.",
            },
            {
              title: "Revisão de decisões automatizadas",
              desc: "Solicitar revisão de decisões tomadas exclusivamente por tratamento automatizado.",
            },
          ].map((right, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <p className="font-headline font-semibold text-sm text-white mb-1">{right.title}</p>
              <p className="font-body text-xs text-text-muted leading-relaxed">{right.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="7. Como exercer seus direitos">
        <p>
          Para exercer qualquer dos direitos acima, envie uma solicitação para nosso Encarregado de
          Proteção de Dados com as seguintes informações:
        </p>
        <BulletList
          items={[
            "Seu nome completo",
            "E-mail cadastrado na plataforma (ou número de telefone, no caso de usuário final)",
            "Descrição clara do direito que deseja exercer",
            "Documento de identificação (para verificação de identidade)",
          ]}
        />
        <p>
          Responderemos no prazo de até <strong className="text-white">15 dias úteis</strong>,
          podendo ser prorrogado por igual período em casos complexos, com comunicação ao
          solicitante.
        </p>
        <InfoBox>
          <strong className="text-white">Canal de solicitação:</strong>
          <br />
          E-mail:{" "}
          <a href="mailto:contato@semanticzap.com.br" className="text-green underline">
            contato@semanticzap.com.br
          </a>
          <br />
          <span className="text-text-muted/70 text-xs mt-1 block">
            Assunto do e-mail: "Solicitação de Direitos LGPD — [seu nome]"
          </span>
        </InfoBox>
      </Section>

      <Section title="8. Encarregado de Proteção de Dados (DPO)">
        <p>
          O SemanticZap designou um Encarregado de Proteção de Dados (Data Protection Officer —
          DPO), responsável por:
        </p>
        <BulletList
          items={[
            "Receber comunicações dos titulares e da ANPD",
            "Orientar funcionários e operadores sobre práticas de proteção de dados",
            "Executar as demais atribuições previstas na LGPD",
          ]}
        />
        <InfoBox>
          <strong className="text-white">Encarregado de Proteção de Dados</strong>
          <br />
          VM Consultoria — SemanticZap
          <br />
          E-mail:{" "}
          <a href="mailto:contato@semanticzap.com.br" className="text-green underline">
            contato@semanticzap.com.br
          </a>
        </InfoBox>
      </Section>

      <Section title="9. Incidentes de segurança">
        <p>
          Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos
          titulares, o SemanticZap cumprirá as obrigações de notificação previstas no art. 48 da
          LGPD, comunicando a ocorrência à ANPD e aos titulares afetados dentro de um prazo razoável.
        </p>
      </Section>

      <Section title="10. Transferência internacional de dados">
        <p>
          Os dados podem ser transferidos para os Estados Unidos em virtude do uso da OpenAI
          (GPT-4o) e da Meta (WhatsApp Business API). Essas transferências são realizadas com base
          em mecanismos adequados de proteção (contratos de processamento de dados, cláusulas
          contratuais padrão), conforme exigido pelo art. 33 da LGPD.
        </p>
      </Section>

      <Section title="11. Contato e petição à ANPD">
        <p>
          Se não estiver satisfeito com nossa resposta ou entender que seus direitos não foram
          atendidos, você pode peticionar à{" "}
          <strong className="text-white">
            Autoridade Nacional de Proteção de Dados (ANPD)
          </strong>
          , órgão regulador responsável pela fiscalização da LGPD no Brasil, pelo endereço{" "}
          <a
            href="https://www.gov.br/anpd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green underline"
          >
            www.gov.br/anpd
          </a>
          .
        </p>
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
