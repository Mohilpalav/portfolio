
<template>
<div class="Jumbotron">
    <b-jumbotron class="back">
        <b-container fluid class="p-3"> 
            <b-img center rounded="circle" class="image mx-auto shadow-lg bg-white rounded" :src="require('../assets/picture.jpg')"></b-img>
        </b-container> 
    </b-jumbotron>

    <div v-onscroll class="about p-5"> 
        <h3> Hi. I am Mohil Palav. I am a motivated computer science enthusiast with a creative and problem-solving mindset looking forward to applying my knowledge and project experiences in real-world applications.
        </h3>
    </div>
  
</div>


</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>

.Jumbotron {

    .image{
        width: 25%; 
        height: 25%;
        animation: spin 1s cubic-bezier(.8, 0, .2, 1);
        border: none;
    }
        
    .back{
        background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);
    }

    .about{
        text-align: center;
    }

    @keyframes spin {
        50% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
    }

}

.scroll {
    animation: effect 3s;
}

@keyframes effect {
    from {opacity: 0;}
    to {opacity: 1;}
}


</style>
