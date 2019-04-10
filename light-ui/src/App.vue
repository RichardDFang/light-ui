<template>
    <div class="list-box">
        <cell
            title = "toast"
            value = "获埃及法"
        ></cell>
    </div>
</template>

<script>
import cell from '../package/cell';

export default {
    name: 'App',
    components: {
        cell
    }
}
</script>

<style>
.list-box {
    display: flex;
    flex-direction: column;
}
</style>


