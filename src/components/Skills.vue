
<template>

    <div class="Skills p-5">
        <h1><b> Skills </b></h1>
        <b-card class="shadow p-3 mb-5 bg-white rounded">
        <b-card-text>
            Languages
            <hr>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">Javascript</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">Typescript</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">Go lang</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">Java</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">C</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">C++</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">Python</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">PHP</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">HTML</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">CSS</b-button>
            <b-button v-onscroll class="btn btn-1 mx-2 my-2">SQL</b-button>
            <br>
            <br>
            Frameworks
            <hr>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">Angular Js</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">React Js</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">Vue Js</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">Flask</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">SQLite</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">PostgreSQL</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">Git</b-button>
            <b-button v-onscroll class="btn btn-2 mx-2 my-2">Bootstrap</b-button>
            <br>
            <br>
            Foreign Languages
            <hr>
            <b-button v-onscroll class="btn btn-3 mx-2 my-2">English</b-button>
            <b-button v-onscroll class="btn btn-3 mx-2 my-2">Hindi</b-button>
            <b-button v-onscroll class="btn btn-3 mx-2 my-2">Marathi</b-button>
            
            
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
}

.scroll {
   animation: effect 1s ease;
}

@keyframes effect {
    from {transform: scale(0); opacity: 0%;}
    80% {transform: scale(1.01); opacity: 100%;}
    to {transform: scale(1);}
}
</style>
