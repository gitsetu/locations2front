<script lang="ts">
    import { loggedInUser } from "$lib/runes.svelte";
</script>

<nav class="navbar is-full-width">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/dashboard">
        <span class="icon"> <i class="fas fa-map-marker-alt"></i></span>
        <span><strong>Locations</strong> </span>
      </a>
    </div>
    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="/place"> Add a Place </a>
        <a class="navbar-item" href="/report"> Report </a>
        <a class="navbar-item" href="/logout"> Logout [{loggedInUser.email}]</a>
      </div>
      <div></div>
    </div>
  </div>
</nav>
