<script lang="ts">
    export let places = [
        {
            title: 40,
            category: "paypal",
            donor: "bart@simpson.com",
            collection: { lastName: "Simpson", firstName: "Lisa" },
            latitude: "52.161290",
            longitude: "-7.51540"
        },
        {
            title: 90,
            category: "direct",
            donor: "marge@simpson.com",
            collection: { lastName: "Simpson", firstName: "maggie" },
            latitude: "52.261290",
            longitude: "-7.231540"
        },
        {
            title: 430,
            category: "paypal",
            donor: "homer@simpson.com",
            collection: { lastName: "Flanders", firstName: "Ned" },
            latitude: "52.361290",
            longitude: "-7.241540"
        }
    ];
</script>

<table class="table is-fullwidth">
  <thead>
  <tr>
    <th>Place</th>
    <th>Category</th>
    <th>Latitude</th>
    <th>Longitude</th>
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
        {place.latitude}
      </td>
      <td>
        {place.longitude}
      </td>
    </tr>
  {/each}
  </tbody>
</table>
