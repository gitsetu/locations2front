<script lang="ts">
    let { places } = $props();
</script>

<table class="table is-fullwidth">
  <thead>
  <tr>
    <th>Place Name</th>
    <th>Category</th>
    <th>Collection</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>User</th>
  </tr>
  </thead>
  <tbody>
  {#each places as place}

    <tr>
      <td>
        {place.title}
      </td>
      <td>
        {place.category}
      </td>
      <td>
        {place.collection.title}
      </td>
      <td>
        {place.user.firstName}, {place.user.lastName}
      </td>
    </tr>
  {/each}
  </tbody>
</table>
