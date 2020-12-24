
<template>

    <div class="Projects p-5">
        <h1><b> Projects </b></h1>
        <b-card class="shadow p-3 mb-5 bg-white rounded" >
        <b-card-text>
            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/blockchainlogo.png')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Blockchain Demo</h5>
                <p class="mb-0">
                    A simple blockhain demo project made using React Js and Go lang. Deployed using Docker.
                </p>
                <div class="row">
                    <div class="col-sm-2">
                        <b-link href="https://github.com/Mohilpalav/blockchain">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            View Code on GitHub 
                        </b-link>
                    </div>
                    <div class="col-sm-2">
                        <b-link href="https://se575-blockchain-demo.herokuapp.com/">
                            View Demo
                        </b-link>
                    </div>
                </div>
                </b-media>
                
            </ul>
            <hr>

            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/cvlogo.jpg')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Colorization of Grayscale images.</h5>
                <p class="mb-0">
                   Built a Machine Learning model using a Convolution Neural Network on Pytorch to colorize grayscale images.
                </p>
                <b-link href="https://github.com/Mohilpalav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View Code on GitHub 
                </b-link>
                </b-media>
            </ul>
            <hr>

             <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>                            
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/mllogo.png')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Speaker Recogniton using GMM.</h5>
                <p class="mb-0">
                   Built a Machine Learning model using a GMM in python to identify speaker.
                </p>
                </b-media>
            </ul>
            <hr>

            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>                            
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/duilogo.png')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Monthly Grocery planner</h5>
                <p class="mb-0">
                   Designed a website to track and analyze monthly grocery using HTML/CSS, F lask and SQLite.
                </p>
                <b-link href="https://github.com/Mohilpalav/monthlygroceryplanner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View Code on GitHub 
                </b-link>
                </b-media>
            </ul>
            <hr>

            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>                            
                   <b-avatar variant="light" class="mb-2" :src="require('../assets/newslogo.png')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Real-time fake news detection</h5>
                <p class="mb-0">
                   Designed an algorithm to detect fake news from real news using Natural language processing and Data analysis in python.
                </p>
                <b-link href="https://github.com/ncrypt96/Fake-news">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View Code on GitHub 
                </b-link>
                </b-media>
            </ul>
            
            
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
