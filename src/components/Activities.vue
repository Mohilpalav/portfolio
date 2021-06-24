
<template>

    <div class="Activities p-5">
        <h1><b> Affiliations and Certifications </b></h1>
        <b-card v-onscroll class="shadow p-3 mb-5 bg-white rounded">
        <b-card-text>
            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>
                    <b-icon class="mt-2" icon="dash-square"></b-icon>
                </template>
                <div class="row">
                    <div class="col-sm">
                       <h5 class="mt-0 mb-1">Member, Upsilon Pi Epsilon, Drexel University Chapter</h5>
                    </div>
                    <div class="col-sm">
                    <p class="text-right">May, 2021</p>
                    </div>
                </div>
                </b-media>
            </ul>

           <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>
                    <b-icon class="mt-2" icon="dash-square"></b-icon>
                </template>
                <div class="row">
                    <div class="col-sm">
                       <h5 class="mt-0 mb-1">Microsoft Technology Associate - Introduction to programming using JavaScript.</h5>
                    </div>
                    <div class="col-sm">
                    <p class="text-right">August, 2018</p>
                    </div>
                </div>
                </b-media>
            </ul>
            

            
        </b-card-text>
        </b-card>


    </div>

</template>

<script>
     export default {};
</script>

<style lang="scss" scoped>

.scroll {
    animation: slide 0.75s ease-in;
}

@keyframes slide {
    from { transform: rotateX(90deg);}
    to { transform: rotateX(0deg); }
}
</style>
