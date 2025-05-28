<script lang="ts">
    import { loggedInUser } from "$lib/runes.svelte";
    import { appService } from "$lib/services/app-service";
    import type { Place } from "$lib/types/app-types";
    import Coordinates from "$lib/ui/Coordinates.svelte";

    // const collections = [
    //     {
    //         firstName: "Lisa",
    //         lastName: "Simpson",
    //         office: "President"
    //     },
    //     {
    //         firstName: "Maggie",
    //         lastName: "Simpson",
    //         office: "President"
    //     },
    //     {
    //         firstName: "Ned",
    //         lastName: "Flanders",
    //         office: "President"
    //     }
    // ];

    let title = $state("Interesting Place");
    let selectedCollection = $state("Town, Park");
    let categories = ["Park", "Lake"];
    let selectedCategory = $state("Park");
    let message = $state("Add a Place");

    let latitude = $state(52.160858);
    let longitude = $state(-7.15242);

    let { collections = [] } = $props();
    // let { categories = [] } = $props();

    // async function place() {
    //     console.log(`Just placed: ${title} to ${selectedCollection} via ${selectedCategory} payment`);
    //     console.log(`latitude: ${latitude}, longitude: ${longitude}`);
    // }

    async function addPlace() {
        if (selectedCollection && title && selectedCategory) {
            const collection = collections.find((collection) => collection._id === selectedCollection);
            if (collection) {
                console.log("collection: ", collection)
                const place: Place = {
                    title: title,
                    category: selectedCategory,
                    collectionid: selectedCollection,
                    latitude: latitude,
                    longitude: longitude,
                    // user: loggedInUser._id
                };
                console.log("place: ", place)
                const success = await appService.addPlace(place, loggedInUser.token);
                if (!success) {
                    message = "Place not added - some error occurred";
                    return;
                }
                message = `Thanks! You added the place: ${title}, with category: ${category}, to ${collection.title}`;
            }
        } else {
            message = "Please enter title, category and collection";
        }
    }
</script>

<div>
  <div class="field">
    <label class="label" for="title">Enter Name of Place:</label>
    <input bind:value={title} class="input" id="title" name="title" type="text" />
  </div>

  <div class="field">
    <div class="control">
      <label class="label" for="title">Select Category:</label>
      {#each categories as category}
        <input bind:group={selectedCategory} class="radio" type="radio" value={category} /> {category}
      {/each}
    </div>
  </div>
  <div class="field">
    <label class="label" for="title">Select Collection:</label>
    <div class="select">
      <select bind:value={selectedCollection}>
        {#each collections as collection}
          <option value={collection._id}>{collection.title}</option>
        {/each}
      </select>
    </div>
  </div>
  <Coordinates bind:latitude bind:longitude />
  <div class="field">
    <div class="control">
      <button onclick={() => addPlace()} class="button">Add Place</button>
    </div>
  </div>
</div>