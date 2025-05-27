<script lang="ts">
    import { loggedInUser, subTitle } from "$lib/runes.svelte";
    import { appService } from "$lib/services/app-service";
    import Card from "$lib/ui/Card.svelte";
    import { onMount } from "svelte";
    import PlaceForm from "./PlaceForm.svelte";
    import type { Collection } from "$lib/types/app-types";

    subTitle.text = "Add a Location";
    let collections: Collection[] = [];

    onMount(async () => {
        collections = await appService.getCollections(loggedInUser.token);
    });
</script>

<Card title="Add a place">
  <PlaceForm {collections}/>
</Card>