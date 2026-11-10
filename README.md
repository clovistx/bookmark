# bookmark (redirecionamento)

Este repositório só existe para não quebrar o endereço antigo do STASH.

- Antes: https://clovistx.github.io/bookmark/
- Agora: https://clovistx.github.io/stash/

O jornal em si vive em `clovistx/stash`. Cada HTML daqui aponta `rel=canonical` e redireciona (meta refresh + `location.replace`, preservando query e hash) para o mesmo caminho em `/stash/`.

O `404.html` cobre qualquer caminho que ainda não tenha um stub (edições futuras incluídas).
