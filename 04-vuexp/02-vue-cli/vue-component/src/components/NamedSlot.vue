<template>
    <form >
        <div class="help">
            <slot name="help"></slot>
        </div>
        <div class="fields">
            <slot name="fields"></slot>
        </div>
        <div class="button">
            <slot name="button"></slot>
        </div>

        <slot>Default slot</slot>
    </form>
</template>

<script>

export default{
    name: "NamedSlot"
}
</script>
