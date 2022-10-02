<script lang="ts">
    import { page } from '$app/stores';
</script>
<main>
    <div class="error text-center">
        <h1>{$page.status}: {$page.error?.message}</h1>
    </div>
</main>
<style>
    .error {
        padding: 250px 0px 145px 0px;
    }
</style>