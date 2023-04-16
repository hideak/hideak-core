<template>
  <div class="d-flex flex-column align-items-center">
    <div class="mb-4">
      Pesquise conteúdo nas páginas de projetos, currículo, contato e outras informações.
    </div>
    <BaseInput class="home-page-search-bar" type="text" placeholder="O que vamos aprender hoje?" leftIcon="search"
      buttonLabel="Pesquisar" buttonColor="primary" />
  </div>
</template>

<style lang="scss" scoped>
.home-page-search-bar {
  max-width: 36rem;
}
</style>