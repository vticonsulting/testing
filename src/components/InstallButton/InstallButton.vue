<template>
  <button type="button" class="with-bash-effects">
    <span class="inline-block mr-2">$</span> npm install @boosterthon/core
  </button>
</template>

<script>
export default {
  name: 'InstallButton',
}
</script>

<style>
.with-bash-effects {
  font-family: Consolas, Monaco, "Andale Mono", monospace;
  font-size: 1.2em;
  color: rgb(245, 246, 247);
  text-align: left;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  background: rgb(0, 0, 0);
  border-radius: 8px;
  padding: 12px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none !important;
}
.with-bash-effects::after {
  content: "";
  width: 0.5em;
  display: inline-block;
  background-color: rgb(255, 255, 0);
  height: 2.1rem;
  margin-left: 0.5rem;
}
.with-bash-effects > span { margin-right: 0.5rem; color: rgb(4, 195, 142) }
</style>
