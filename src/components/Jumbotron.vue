
<template>
<div class="Jumbotron">
    <b-jumbotron class="back">
        <b-container fluid class="p-3"> 
            <b-img center rounded="circle" class="image mx-auto" thumbnail fluid :src="require('../assets/picture.jpg')"></b-img>
                
        </b-container> 
    </b-jumbotron>
    <blockquote class="blockquote text-center">
        <p class="mb-0">“Innovation distinguishes between a leader and a follower.”</p>
        <footer class="blockquote-footer">Steve Jobs <cite title="Source Title">(“The Innovation Secrets of Steve Jobs,” 2001)</cite></footer>
    </blockquote>
    <div v-onscroll class="about p-5"> 
        <h1> Hi. I am Mohil Palav. I am a motivated computer engineer with a problem-solving mindset looking forward to apply my knowledge and project experiences in real-world applications.</h1>
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
    }
        
    .back{
        background-color: #e8f4f8;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .about{
        text-align: center;
    }

}

.scroll {
    animation: effect 3s;
}

@keyframes effect {
    from {opacity: 0%;}
    to {opacity: 100%;}
}


</style>
