
<template>

    <div class="NavBar">
        <b-navbar class="nav" toggleable type="dark" variant="dark">

            <b-navbar-toggle target="sidebar-backdrop">
                <b-icon icon="layout-text-sidebar"></b-icon>
            </b-navbar-toggle>
            
            <b-sidebar id="sidebar-backdrop" :backdrop-variant="dark" backdrop shadow>
                <nav class="mb-3">
                    <b-nav vertical>
                    
                    <b-nav-item @click="hide"><b-icon icon="house-door"></b-icon> Home</b-nav-item>
                    <b-nav-item href="#" @click="hide"><b-icon icon="book"></b-icon> Education</b-nav-item>
                    <b-nav-item href="#" @click="hide"><b-icon icon="star"></b-icon> Experience</b-nav-item>
                    <b-nav-item href="#" @click="hide"><b-icon icon="collection"></b-icon> Projects</b-nav-item>
                    <b-nav-item href="#" @click="hide"><b-icon icon="code-square"></b-icon> Skills</b-nav-item>
                    <b-nav-item href="#" @click="hide"><b-icon icon="award"></b-icon> Achievments</b-nav-item>
                    <b-nav-item href="#" @click="hide"><b-icon icon="plus-circle"></b-icon> Affiliations and Activities</b-nav-item>
                    </b-nav>
                </nav>
            </b-sidebar>
            
        </b-navbar>
    </div>

</template>

<script>

</script>

<style>
.nav{
    position: relative;
    width: 100%;
}

</style>
