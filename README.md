# Token Capturer - Extensão Chrome

Uma extensão para o Google Chrome que captura automaticamente tokens enviados em requisições HTTP com um cabeçalho específico e os exibe em um popup.

## Funcionalidades

- **Monitoramento em tempo real:** Monitora continuamente as requisições da aba ativa.
- **Captura de token:** Captura tokens presentes no cabeçalho `authorizationproxy` das requisições HTTP.
- **Armazenamento seguro:** Armazena o token capturado usando a API de armazenamento local do Chrome.
- **Exibição no popup:** Exibe o token capturado em um popup simples.
- **Cópia para a área de transferência:** Permite copiar o token para uso em outras aplicações.

---

## Pré-requisitos

- Navegador **Google Chrome** (versão compatível com Manifest V3).

---

## Como Instalar

1. Clone este repositório ou baixe os arquivos do projeto.
2. Abra o navegador Google Chrome.
3. Navegue para `chrome://extensions/`.
4. Ative o **Modo do Desenvolvedor** no canto superior direito.
5. Clique em **"Carregar sem compactação"**.
6. Selecione a pasta onde os arquivos da extensão estão localizados.

---

## Como Usar

1. Acesse o site desejado (por exemplo: `https://bancodepreco.tce.mg.gov.br/`).
2. Realize as ações necessárias para que o token seja gerado.
3. Clique no ícone da extensão na barra de ferramentas do Chrome.
4. O token será exibido no popup.
5. Clique no botão **"Copiar Token"** para copiá-lo para a área de transferência.

---

## Tecnologias Utilizadas

- **Manifest V3** - Plataforma de desenvolvimento para extensões do Chrome.
- **JavaScript** - Implementação da lógica de captura e manipulação de tokens.
- **HTML e CSS** - Para o design do popup.
- **Chrome Storage API** - Armazena tokens capturados de forma segura.
- **Chrome WebRequest API** - Intercepta e monitora requisições HTTP.

---

## Problemas Conhecidos

1. **Cabeçalho ausente:** Certifique-se de que o cabeçalho `authorizationproxy` está presente nas requisições HTTP realizadas pela aba.
2. **Permissões de URL:** Verifique se os domínios do site estão configurados corretamente no `manifest.json` em `host_permissions`.
3. **Limitações do Manifest V3:** A API `webRequestBlocking` não é suportada no Manifest V3, mas o sistema foi ajustado para funcionar com as restrições atuais.

---

## Contribuindo

1. Faça um fork deste repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Envie suas alterações: `git commit -m 'Adicionei uma nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## Contato

Desenvolvido por Diego Falabella.   
LinkedIn: https://www.linkedin.com/in/diego-falabella/
