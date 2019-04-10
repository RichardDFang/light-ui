<template>
    <a class="cell-line">
        <div class="cell-wrapper">
            <div class="cell-content">
                <slot name="icon">
                    <i class="cell-icon"></i>
                </slot>
                <slot name="cell-title">
                    <span class="cell-text" v-text="title"></span>
                    <span v-if="label" class="cell-label" v-text="label"></span>
                </slot>
            </div>
            <div class="cell-value">
                <slot name="cell-value">
                    <span v-text="value"></span>
                </slot>
            </div>
        </div>
    </a>
</template>
<script>
export default {
    name: "lt-cell",
    props: {
        title: String,
        value: {}
    }
};
</script>

<style>
.cell-line {
    display: flex;
}

.cell-wrapper {
    display: flex;
    width: 100%;
}

.cell-content {
    flex: 1
}
</style>
