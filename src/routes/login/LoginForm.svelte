<script lang="ts">
    import { goto } from "$app/navigation";
    import { loggedInUser } from "$lib/runes.svelte";
    import { appService } from "$lib/services/app-service";
    import Message from "$lib/ui/Message.svelte";
    import UserCredentials from "$lib/ui/UserCredentials.svelte";

    let email = $state("");
    let password = $state("");
    let message = $state("");

    async function login() {
        console.log(`attempting to log in email: ${email} with password: ${password}`);
        let session = await appService.login(email, password);
        if (session) {
            loggedInUser.email = email;
            loggedInUser.name = session.name;
            loggedInUser.token = session.token;
            loggedInUser._id = session._id;
            localStorage.app = JSON.stringify(loggedInUser);
            console.log(`Session: ${JSON.stringify(session)}`);
            goto("/place");
        } else {
            email = "";
            password = "";
            message = "Invalid Credentials";
        }
    }
</script>

{#if message}
  <Message {message} />
{/if}
<form on:submit|preventDefault={login}>
  <UserCredentials bind:email bind:password />
  <button class="button is-success is-fullwidth">Log In</button>
</form>