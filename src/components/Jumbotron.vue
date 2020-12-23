
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
    
</div>

</template>

<script>
</script>

<style>

.image{
   width: 25%; 
   height: 25%;
}

.back{
    background-color: #e8f4f8;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
