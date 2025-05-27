<script lang="ts">
    let { latitude = $bindable(0.0), longitude = $bindable(0.0) } = $props();
</script>

<div class="box field is-horizontal">
  <div class="field-label is-normal">
    <label for="longitude" class="label">Longitude</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded">
        <input id="longitude" class="input" type="float" bind:value={latitude} />
      </p>
    </div>
    <div class="field-label is-normal">
      <label for="latitude" class="label">Latitude</label>
    </div>
    <div class="field">
      <p class="control is-expanded">
        <input id="latitude" class="input" type="float" bind:value={longitude} />
      </p>
    </div>
  </div>
</div>