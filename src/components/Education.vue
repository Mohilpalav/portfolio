
<template>

    <div class="Education p-5">
        <h1><b> Education </b></h1>
        <b-card class="shadow p-3 mb-5 bg-white rounded" :img-src="require('../assets/drexellogo.jpg')" img-left >
        <b-card-text>
            <h1> Drexel University </h1>
            Philadelphia, PA
            <hr>
                <dl class="row">
                <dt class="col-sm-3">Degree</dt>
                <dd class="col-sm-9"> Master of Science</dd>
               
                <dt class="col-sm-3">Major</dt>
                <dd class="col-sm-9">Computer Science</dd>
                

                <dt class="col-sm-3">Year</dt>
                <dd class="col-sm-9">2019-present</dd>

                <dt class="col-sm-3">GPA</dt>
                <dd class="col-sm-9">3.8</dd>
                </dl>
            
        </b-card-text>
        </b-card>

        <b-card class="shadow p-3 mb-5 bg-white rounded" :img-src="require('../assets/fcritlogo.png')" img-left>
        <b-card-text>
            <h1> Fr. C. Rodrigues Institute of Technology </h1>
            Vashi, Navi-Mumbai
            <hr>
                <dl class="row">
                <dt class="col-sm-3">Degree</dt>
                <dd class="col-sm-9"> Bachelor of Engineering</dd>
     
                <dt class="col-sm-3">Major</dt>
                <dd class="col-sm-9">Computer Engineering</dd>

                <dt class="col-sm-3">Year</dt>
                <dd class="col-sm-9">2015-2019</dd>

                <dt class="col-sm-3">GPA</dt>
                <dd class="col-sm-9">7.53/10</dd>

                </dl>
        </b-card-text>
        </b-card>


    </div>

</template>

<script>

</script>

<style>
img {
    margin: auto;
    display: block;
    width:10%;
    height: 10%;
}

</style>
