
<template>

    <div class="Achievements p-5">
        <h1><b> Achievements </b></h1>
        <b-card v-onscroll class="shadow p-3 mb-5 bg-white rounded">
        <b-card-text>
            
            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>
                    <b-icon class="mt-2" icon="award-fill"></b-icon>
                </template>
                <div class="row">
                    <div class="col-sm">
                       <h5 class="mt-0 mb-1">PCUBE Best Departmental project</h5>
                    </div>
                    <div class="col-sm">
                    <p class="text-right">March, 2019</p>
                    </div>
                </div>
                
                <p class="mb-0">
                    Received the Best departmental project award for the final year project Real-time fake news detection.
                </p>
                </b-media>
            </ul>
            <hr>

            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>
                    <b-icon class="mt-2" icon="award-fill"></b-icon>
                </template>
                <div class="row">
                    <div class="col-sm">
                        <h5 class="mt-0 mb-1">Runner up at CitiusTech CIC Hackathon</h5>
                    </div>
                    <div class="col-sm">
                    <p class="text-right">February, 2018</p>
                    </div>
                </div>
                <p class="mb-0">
                    Received second prize at CitiusTech Change India Challenge Hackathon and awarded a cash prize of INR 15,000.
                </p>
                

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
.Achievements{
    overflow-x: hidden;
}
.scroll {
    animation: slide .75s ease-in;   
}

@keyframes slide {
    from { left: 50%; opacity: 0;}
    to { left: 0%; opacity: 1; }
}
</style>
