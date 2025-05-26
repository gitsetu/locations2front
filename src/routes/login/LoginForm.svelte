<script lang="ts">
    import { goto } from "$app/navigation";
    import { loggedInUser } from "$lib/runes.svelte";
    import Message from "$lib/ui/Message.svelte";
    import UserCredentials from "$lib/ui/UserCredentials.svelte";

    let email = $state("");
    let password = $state("");
    let message = $state("");

    async function login() {
        // const success = false;
        // fixme : forced to true for testing
        const success = true;
        if (success) {
            // const success = false;
            // fixme : forced logged in user for testing
            loggedInUser.email = email;

            goto("/donate");
        } else {
            email = "";
            password = "";
            message = "Invalid Credentials";
        }
    }
</script>

<div class="box">
  {#if message}
    <Message {message} />
  {/if}
  <UserCredentials bind:email bind:password />
  <button onclick={() => login()} class="button">Log In</button>
</div>