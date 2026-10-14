# Conteúdo e validação para publicação

As alterações foram feitas nos arquivos usados pela aplicação React/Vite. Não houve publicação nem mudança de hospedagem.

## Conteúdo a fornecer ou confirmar

- Fotografias reais da fábrica, produção e equipe. A página utiliza as imagens de embalagens Nobre já presentes no projeto; confirmar a procedência e aprovação dessas imagens para publicação.
- Descrição documentada dos controles de qualidade efetivamente realizados: inspeções, testes, lotes e conferência de embalagens. Nenhum desses controles foi anunciado sem evidência.
- Quantidade de cartuchos por caixa de transporte e condições de produção para cada modelo de marca própria. Quantidades mínimas, prazos e capacidade não foram inventados.
- Fotografias e apresentações comerciais do papel-alumínio e dos descartáveis. Esses produtos aparecem como cartões de texto, sem espaços provisórios de fotografia.
- Depoimentos reais com autorização e exemplos de marcas atendidas com permissão de exposição. Os depoimentos demonstrativos foram retirados da página.

## Verificação

- Compilação: `npm run build`.
- Verificação da página renderizada, âncoras, existência dos arquivos de imagem, mensagens iniciais de orçamento e número comercial: `node scripts/verify-site.mjs`.
- A verificação visual e de interação no navegador em celular e desktop permanece pendente: o navegador integrado falhou ao conectar nesta sessão. Conferir seletores, fechamento do aviso, menu, foco por teclado e ausência de rolagem horizontal antes da publicação.
- As mensagens de WhatsApp são preparadas no link; o envio é concluído pelo visitante no WhatsApp. Nenhuma mensagem foi enviada durante a implementação.
