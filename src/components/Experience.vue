
<template>

    <div class="Experience p-5">
        <h1><b> Experience </b></h1>

        <b-card  v-onscroll class="shadow p-3 mb-5 bg-white rounded" :img-src="require('../assets/val2bizlogo.jpg')" img-left >
        <b-card-text>
            <h1> Val2biz Solutions</h1>
            Software engineer
            <hr>
            
                As part of the software engineering team, I had the opportunity to work on a Full-stack domain registration application using Next.js, Firebase and Tailwind CSS.
                <br>
                <br>
                <dl class="row">
                <dt class="col-sm-3">Period</dt>
                <dd class="col-sm-9"> August 2021-Present</dd>
            
                <dt class="col-sm-3">Role</dt>
                <dd class="col-sm-9">
                    <ul>
                        <li>Built a domain registration application by implementing various Server-side rendered components using Next.js in TypeScript.</li>
                        <li>Managed authentication and NoSQL database using Firebase Authentication, Cloud Firestore, and Cloud Functions.</li>
                        <li>Maintained a state management system for the application using the zustand library.</li>
                        <li>Composed a simple and fully responsive user experience using Tailwind CSS.</li>
                    </ul>
                </dd>
                
                </dl>

            Software engineering intern
            <hr>
            
                As part of the software engineering team, I had the opportunity to work on the WCA Worldwide VIRTUAL conference project in which more than 2000 participants participated from all across the world.
                This project introduced me to new frameworks and technologies like Angular and Material-UI.
                <br>
                <br>
                <dl class="row">
                <dt class="col-sm-3">Period</dt>
                <dd class="col-sm-9"> September 2020-December 2020</dd>
            
                <dt class="col-sm-3">Role</dt>
                <dd class="col-sm-9">
                    <ul>
                        <li>Developed a virtual conferencing platform by implementing various modules and components using Angular in TypeScript.</li>
                        <li>Performed operations on API data and designed an interactive and user-friendly front-end using Material UI.</li>
                        <li>Improved UI performance by 10% and demonstrated modern version control practices using GitHub</li>
                    </ul>
                </dd>
                
                </dl>

            
            
        </b-card-text>
        </b-card>
    
    </div>

</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
.Experience {
    img {
        margin: auto;
        display: block;
        width: 10%;
        height: 10%;
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
