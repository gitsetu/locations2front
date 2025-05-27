<script lang="ts">
    import { goto } from "$app/navigation";
    import UserCredentials from "$lib/ui/UserCredentials.svelte";
    import UserDetails from "$lib/ui/UserDetails.svelte";
    import Message from "$lib/ui/Message.svelte";
    // import {User} from "../../lib/types/place-types";
    import { appService } from "$lib/services/app-service";

    let firstName = $state("");
    let lastName = $state("");
    let email = $state("");
    let password = $state("");
    let message = $state("");

    // pre-populate for repeat testing
    // let firstName = "new";
    // let lastName = "new";
    // let email = "new@new.com";
    // let password = "new";
    // let message = "";

    async function signup() {
        const user: User = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        console.log("function signup user: ")
        console.log(user)
        let success = await appService.signup(user);
        console.log("success: ", success)
        if (success) {
            goto("/login");
        } else {
            message = "Error Trying to sign up";
        }
    }
</script>

<div class="box">
  {#if message}
    <Message {message} />
  {/if}
  <UserDetails bind:firstName bind:lastName />
  <UserCredentials bind:email bind:password />
  <button onclick={() => signup()} class="button">Sign Up</button>
  <p class="has-text-centered is-size-6">
    Already have an account? <a href="/login" data-cy="login-redirect">Login Here</a>
  </p>
</div>
