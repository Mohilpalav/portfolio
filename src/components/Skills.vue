
<template>

    <div class="Skills p-5">
        <h1><b> Skills </b></h1>
        <b-card class="shadow p-3 mb-5 bg-white rounded">
        <b-card-text>
            Programming Languages
            <hr>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">JavaScript</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">TypeScript</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">Go lang</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">Java</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">C</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">C++</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">Python</b-button>
            <br>
            <br>
            Web Technologies
            <hr>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">HTML</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">CSS</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">jQuery</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">PHP</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">Angular</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">React</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">React-native</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">Vue.js</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">Electron</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">Bootstrap</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">Material-UI</b-button>
            <br>
            <br>
            Databases
            <hr>
            <b-button v-onscroll class="btn btn-3 mx-2 my-2">MySQL</b-button>
            <b-button v-onscroll class="btn btn-3 mx-2 my-2">SQLite</b-button>
            <b-button v-onscroll class="btn btn-3 mx-2 my-2">PostgreSQL</b-button>
            <b-button v-onscroll class="btn btn-3 mx-2 my-2">Oracle</b-button>
            <b-button v-onscroll class="btn btn-3 mx-2 my-2">Firebase</b-button>
            <br>
            <br>
            Cloud Platforms
            <hr>
            <b-button v-onscroll class="btn btn-4 mx-2 my-2">AWS</b-button>
            <b-button v-onscroll class="btn btn-4 mx-2 my-2">Docker</b-button>
            <b-button v-onscroll class="btn btn-4 mx-2 my-2">Heroku</b-button>
            <b-button v-onscroll class="btn btn-4 mx-2 my-2">Netlify</b-button>
            <br>
            <br>
            API
            <hr>
            <b-button v-onscroll class="btn btn-5 mx-2 my-2">Flask</b-button>
            <b-button v-onscroll class="btn btn-5 mx-2 my-2">Gin</b-button>
            <br>
            <br>
            Version Control
            <hr>
            <b-button v-onscroll class="btn btn-6 mx-2 my-2">Git</b-button>
            <b-button v-onscroll class="btn btn-6 mx-2 my-2">Bitbucket</b-button>
            <br>
            <br>
            Data Science
            <hr>
            <b-button v-onscroll class="btn btn-7 mx-2 my-2">Pandas</b-button>
            <b-button v-onscroll class="btn btn-7 mx-2 my-2">Numpy</b-button>
            <b-button v-onscroll class="btn btn-7 mx-2 my-2">Scikit-Learn</b-button>
            <b-button v-onscroll class="btn btn-7 mx-2 my-2">Matplotlib</b-button>
            <b-button v-onscroll class="btn btn-7 mx-2 my-2">NLTK</b-button>
            <b-button v-onscroll class="btn btn-7 mx-2 my-2">PyTorch</b-button>
            <b-button v-onscroll class="btn btn-7 mx-2 my-2">TensorFlow</b-button>
            <b-button v-onscroll class="btn btn-7 mx-2 my-2">Keras</b-button>
            <b-button v-onscroll class="btn btn-7 mx-2 my-2">TFLearn</b-button>
            <br>
            <br>
            Languages
            <hr>
            <b-button v-onscroll class="btn btn-8 mx-2 my-2">English</b-button>
            <b-button v-onscroll class="btn btn-8 mx-2 my-2">Hindi</b-button>
            <b-button v-onscroll class="btn btn-8 mx-2 my-2">Marathi</b-button>
        </b-card-text>
        </b-card>

    </div>

</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
.Skills {
    
    .btn {
        flex: 1 1 auto;
        text-align: center;
        transition: 0.5s;
        background-size: 200% auto;
        border: none;
    }


    .btn:hover {
        background-position: right center; 
    }

    .btn-1 {
        background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
    }

    .btn-2 {
        background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%);
    }

    .btn-3 {
        background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);
    }

    .btn-4 {
        background-image: linear-gradient(to right, #667eea 0%, #764ba2 51%, #667eea 100%);
    }

    .btn-5 {
        background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 51%, #ed6ea0 100%);
    }

    .btn-6 {
        background-image: linear-gradient(to right, #25aae1 0%, #4481eb 51%, #25aae1 100%);
    }

    .btn-7 {
        background-image: linear-gradient(to right, #0ba360 0%, #30dd8a 51%, #0ba360 100%);
    }

    .btn-8 {
        background-image: linear-gradient(to right, #eb3941 0%, #f15e64 51%, #eb3941 100%);
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
