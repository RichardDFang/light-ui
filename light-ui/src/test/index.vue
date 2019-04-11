<template>
    <div class="list-box">
        <router-view></router-view>
        <cell title="toast" value="获埃及法" is-link href="/test/cell"></cell>
        <mt-cell title="toast" value="获埃及法" is-link to="/test/cell"></mt-cell>
    </div>
</template>
<script>
import cell from "../../package/cell";
export default {
    name: 'index',
    components: {
        cell
    }
}
</script>

