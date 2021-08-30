
<template>

    <div class="Projects p-5">
        <h1><b> Projects </b></h1>
        <b-card v-onscroll class="shadow p-3 mb-5 bg-white rounded" >
        <b-card-text>

            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/astroslogo.png')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Houston Astros pitch view.</h5>
                <p class="my-3">
                <ul>
                    <li> Developed a single-page application to filter pitch data from various 2019 Houston Astros games using JavaScript and jQuery. </li>
                    <li> Visualized various pitch characteristics using Chart.js. </li>
                    <li> Styled an interactive front-end using Bootstrap and CSS. </li>
                </ul>
                </p>
                <div class="row">
                    <div class="col-sm-2">
                        <b-link href="https://jsfiddle.net/mohilpalav/ezbrphj7">
                            View Code on JSFiddle 
                        </b-link>
                    </div>
                    <div class="col-sm-2">
                        <b-link href="https://jsfiddle.net/mohilpalav/ezbrphj7/show">
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
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/chatlogo.png')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Automated food ordering system using a smart AI assistant.</h5>
                <p class="my-3">
                <ul>
                    <li> Conceptualized a multi-layer feed-forward perceptron neural network to classify text with 80% accuracy using TensorFlow and TFLearn. </li>
                    <li> Trained the model using the bag-of-words word vectorization model and One-Hot encoding on a restaurant corpus. </li>
                    <li> Composed an interactive conversational chatbot that replies to user queries in Python. </li>
                </ul>
                </p>
                <div class="row">
                    <div class="col-sm-2">
                        <b-link href="https://github.com/Mohilpalav/food-ordering-chatbot">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            View Code on GitHub 
                        </b-link>
                    </div>
                </div>
                </b-media>  
            </ul>

            <hr>

            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/rushhourlogo.jpg')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Rushhour board game</h5>
                <p class="my-3">
                <ul>
                    <li> Implemented a Depth-first search-based algorithm to predict the next possible states of a goal-based agent to solve the Rushhour board game. </li>
                    <li> Solved the game using Random Walk, Breadth-first search, and A* algorithm in Python. </li>
                </ul>
                </p>

                <div class="row">
                    <div class="col-sm-2">
                        <b-link href="https://github.com/Mohilpalav/rush-hour">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            View Code on GitHub 
                        </b-link>
                    </div>
                </div>
                </b-media>  
            </ul>

            <hr>

            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/sentimentlogo.png')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Sentiment analysis of movie reviews</h5>
                <p class="my-3">
                <ul>
                    <li> Trained an N-gram model to represent movie reviews into word vectors in Python. </li>
                    <li> Designed a Naïve-Bayes classifier to classify whether a movie review is positive, negative, or neutral with 90% accuracy. </li>
                    <li> Used macro-averaging technique to evaluate the accuracy of the model. </li>
                </ul>
                </p>

                <div class="row">
                    <div class="col-sm-2">
                        <b-link href="https://github.com/Mohilpalav/sentiment-analysis">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            View Code on GitHub 
                        </b-link>
                    </div>
                </div>
                </b-media>  
            </ul>
            <hr>

            <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/blockchainlogo.png')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Blockchain demo</h5>
                <p class="my-3">
                <ul>
                    <li> Architectured a program to demonstrate the proof-of-work algorithm and handle and mitigate problems such as double-spend and block forks in Go lang. </li>
                    <li> Modeled a REST API server accessible via services to manage the blockchain using Gin.. </li>
                    <li> Designed a web application to create, add, and tamper with candidate blocks using React and Bootstrap. </li>
                    <li> Packaged the application in a Docker container and collaborated using GitHub. </li>
                </ul>
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
                <h5 class="mt-0 mb-1">Colorization of grayscale images.</h5>
                <p class="my-3">
                <ul>
                    <li> Conceptualized a reinforced machine learning model to convert grayscale images and videos with an accuracy of 85%. </li>
                    <li> Trained the model to predict the color channels of an image on 40,000 pre-processed images from the MIT dataset using PyTorch. </li>
                    <li> Composed a web application using HTML, CSS, and Flask to convert images and display the results. </li>
                </ul>
                </p>
                <!-- <b-link href="https://github.com/Mohilpalav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View Code on GitHub 
                </b-link> -->
                </b-media>
            </ul>
            <hr>

             <ul class="list-unstyled">
                <b-media tag="li">
                <template #aside>                            
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/mllogo.png')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Speaker recogniton system.</h5>
                <p class="my-3">
                <ul>
                    <li> Extracted important features from audio samples using Mel-frequency Cepstrum Coefficients in Python. </li>
                    <li> Trained a Gaussian Mixture Model using pre-processed audio samples using Scikit-Learn.</li>
                    <li> Classified live audio samples using the Log-likelihood function with 95% accuracy.</li>
                </ul>
                </p>
                <b-link href="https://github.com/adityac1305/Speaker-Recognition-system-using-GMM">
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
                    <b-avatar variant="light" class="mb-2" :src="require('../assets/duilogo.png')"></b-avatar>
                </template>
                <h5 class="mt-0 mb-1">Monthly grocery planner</h5>
                <p class="my-3">
                <ul>
                    <li> Developed a web application to plan the monthly grocery using HTML, CSS, Flask, and SQLite. </li>
                    <li> Calculated the monthly expenditure and made suggestions by analyzing recent transactions and shopping patterns. </li>
                </ul>
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
                <p class="my-3">
                <ul>
                    <li> Built a desktop application to detect fake news using Electron, Flask, and Bootstrap.</li>
                    <li> Implemented a web crawler to gather data from reliable news sources and extract important keywords in Python. </li>
                    <li> Tailored an algorithm to perform close semantic analysis to classify news articles using natural language processing and data analysis with 80% accuracy. </li>
                </ul>
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
    export default {};
</script>

<style lang="scss" scoped>
.Projects {
    overflow-x: hidden;
    
    img {
        margin: auto;
        display: block;
        width:10%;
        height: 10%;
    }
}

.scroll {
        animation: slide .75s ease-in;
}

@keyframes slide {
    from { left: 50%; opacity: 0; }
    to { left: 0%; opacity: 1; }
}
</style>
