<script lang="ts">
    import { subTitle } from "$lib/runes.svelte";
    import Card from "$lib/ui/Card.svelte";
    import Places from "$lib/ui/Places.svelte";

    subTitle.text = "Places added";
</script>

<Card title="Places">
  <Places />
</Card>