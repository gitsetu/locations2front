<script lang="ts">
    import Coordinates from "$lib/ui/Coordinates.svelte";

    const collections = [
        {
            firstName: "Lisa",
            lastName: "Simpson",
            office: "President"
        },
        {
            firstName: "Maggie",
            lastName: "Simpson",
            office: "President"
        },
        {
            firstName: "Ned",
            lastName: "Flanders",
            office: "President"
        }
    ];

    let title = $state(0);
    let selectedCollection = $state("Simpson, Lisa");
    let categories = ["paypal", "direct"];
    let selectedCategory = $state("paypal");

    let latitude = $state(52.160858);
    let longitude = $state(-7.15242);

    async function place() {
        console.log(`Just placed: ${title} to ${selectedCollection} via ${selectedCategory} payment`);
        console.log(`latitude: ${latitude}, longitude: ${longitude}`);
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
          <option>{collection.lastName},{collection.firstName}</option>
        {/each}
      </select>
    </div>
  </div>
  <Coordinates bind:latitude bind:longitude />
  <div class="field">
    <div class="control">
      <button onclick={() => place()} class="button">Donate</button>
    </div>
  </div>
</div>