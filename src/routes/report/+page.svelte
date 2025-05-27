<script lang="ts">
    // import { subTitle } from "$lib/runes.svelte";
    import Card from "$lib/ui/Card.svelte";
    import Places from "$lib/ui/Places.svelte";
    import { loggedInUser, subTitle } from "$lib/runes.svelte";
    import { appService } from "$lib/services/app-service";
    import { onMount } from "svelte";
    import type { Place } from "$lib/types/app-types";

    subTitle.text = "Places added";

    let places: Place[] = [];
    onMount(async () => {
        places = await appService.getPlaces(loggedInUser.token);
    });
</script>

<Card title="Places">
  <Places {places}/>
</Card>