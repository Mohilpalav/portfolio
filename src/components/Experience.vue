
<template>

    <div class="Experience p-5">
        <h1><b> Experience </b></h1>

        <b-card  v-onscroll class="shadow p-3 mb-5 bg-white rounded" :img-src="require('../assets/val2bizlogo.jpg')" img-left >
        <b-card-text>
            <h1> Val2biz Solutions LLC</h1>
            Software engineering intern
            <hr>
            
                As part of the software engineering team, I had the opportunity to work on the WCA Worldwide VIRTUAL conference project in which more than 2000 participants participated from all across the world.
                This project introduced me to a lot of new frameworks and technologies like Angular and Material-UI.
                <br>
                <br>
                <dl class="row">
                <dt class="col-sm-3">Period</dt>
                <dd class="col-sm-9"> September 2020-December 2020</dd>
            
                <dt class="col-sm-3">Role</dt>
                <dd class="col-sm-9">
                    <ul>
                        <li>Contributing high quality and secure TypeScript code.</li>
                        <li>Creating and styling interactive frontend using Material-UI.</li>
                        <li>Improving UI performance by using performance optimizing techniques.</li>
                        <li>Binding and transforming API data.</li>
                        <li>Collaborating using GitHub.</li>
                    </ul>
                </dd>
                
                </dl>
            
        </b-card-text>
        </b-card>
    
    </div>

</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
.Experience {
    img {
        margin: auto;
        display: block;
        width: 10%;
        height: 10%;
    }
}

.scroll {
   animation: effect 1s ease;
}

@keyframes effect {
    from {transform: scale(0); opacity: 0;}
    80% {transform: scale(1.01); opacity: 1;}
    to {transform: scale(1);}
}

</style>
