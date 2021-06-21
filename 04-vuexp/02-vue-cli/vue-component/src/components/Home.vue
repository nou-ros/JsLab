<template>
    <h3>Home</h3>
</template>

<script>
export default {
    unmounted(){
        console.log("Home component unmounted");
    },

    activated(){
        console.log("Home component is activated");
    },

    deactivated(){
        console.log("Home component is deactivated");
    }
}
</script>