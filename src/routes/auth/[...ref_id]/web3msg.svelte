<script lang="ts">
    export let msg = "no message...";
    export let main_class = "px-1 mx-1 mb-1";
</script>
<div class="bg-code-dark {main_class}">
	<code class="code-small">{msg}</code>
</div>
<style>
    .code-small {
        font-size: 0.65em;
    }
    .bg-code-dark {
        background: var(--section-background-color);
    }
</style>