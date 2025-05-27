<script lang="ts">
    import { subTitle } from "$lib/runes.svelte";
    import Card from "$lib/ui/Card.svelte";
    import PlaceForm from "./PlaceForm.svelte";

    subTitle.text = "Add a Location";
</script>

<Card title="Add a place">
  <PlaceForm />
</Card>