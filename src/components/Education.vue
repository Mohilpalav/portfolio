
<template>

    <div class="Education p-5">
        <h1><b> Education </b></h1>
        <div class="mx-auto">
            <ul class="timeline">
                <li class="timeline">
                    <div class="timeline-badge"></div>
                    <div class="timeline-panel">
                            <b-card v-onscroll class="card shadow p-3 mb-5 bg-white" :img-src="require('../assets/drexellogo.jpg')" img-left >
                            <b-card-text>
                                <h1> Drexel University </h1>
                                Philadelphia, PA
                                <hr>
                                    <dl class="row">
                                    <dt class="col-sm-3">Degree</dt>
                                    <dd class="col-sm-9"> Master of Science</dd>
                                
                                    <dt class="col-sm-3">Major</dt>
                                    <dd class="col-sm-9">Computer Science</dd>
                                    
                                    <dt class="col-sm-3">Year</dt>
                                    <dd class="col-sm-9">2019-present</dd>

                                    <dt class="col-sm-3">GPA</dt>
                                    <dd class="col-sm-9">3.85</dd>
                                    </dl>
                            </b-card-text>
                        </b-card>                         
                    </div>
                </li>

                <li class="timeline-inverted">
                    <div class="timeline-badge"></div>
                    <div class="timeline-panel">
                        <b-card v-onscroll class="card shadow p-3 mb-5 bg-white rounded" :img-src="require('../assets/mulogo.png')" img-left>
                        <b-card-text>
                            <h1> University of Mumbai </h1>
                            Mumbai, India
                            <hr>
                                <dl class="row">
                                <dt class="col-sm-3">Degree</dt>
                                <dd class="col-sm-9"> Bachelor of Engineering</dd>
                    
                                <dt class="col-sm-3">Major</dt>
                                <dd class="col-sm-9">Computer Engineering</dd>

                                <dt class="col-sm-3">Year</dt>
                                <dd class="col-sm-9">2015-2019</dd>

                                <dt class="col-sm-3">GPA</dt>
                                <dd class="col-sm-9">7.53/10</dd>

                                </dl>
                        </b-card-text>
                        </b-card>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    
    .Education{

        overflow-x: hidden;  

        img {
            margin: auto;
            display: block;
            width:10%;
            height: 10%;
        }

        ul {
            list-style: none;
            padding-left: 0; 
        }

        .scroll {
            animation: slide .75s ease-in;  
        }

        @keyframes slide {
            from {transform: translateY(100%); opacity: 0;}
            to {transform: translateY(0);}
        }  
        
        @media only screen and (min-device-width: 480px) {

            .timeline {
                list-style: none;
                padding: 20px 0;
                position: relative;
            }
            
            .timeline:before {
                top: 0;
                bottom: 0;
                position: absolute;
                content: " ";
                width: 4px;
                background-color: #dddfe6;
                left: 50%;
            }
            .timeline.w-icons:before {
                top: 0;
                bottom: 0;
                position: absolute;
                content: " ";
                width: 3px;
                background-color: #dddfe6;
                left: 50%;
                margin-left: -1.5px;
            }
            .timeline > li {
                margin-bottom: 20px;
                position: relative;
            }
            .timeline > li:before,
            .timeline > li:after {
                content: " ";
                display: table;
            }
            .timeline > li:after {
                clear: both;
            }
            .timeline > li:before,
            .timeline > li:after {
                content: " ";
                display: table;
            }
            .timeline > li:after {
                clear: both;
            }
            .timeline > li > .timeline-panel {
                background-color: #fff;
                width: 50%;
                float: left;
                border-radius: 5px;
                position: relative;
                -moz-transition: 0.2s ease-in-out;
                -o-transition: 0.2s ease-in-out;
                -webkit-transition: 0.2s ease-in-out;
                transition: 0.2s ease-in-out;
            }
            .timeline > li > .timeline-panel:hover {
                transform: translateY(-3px);
                
            }
            .timeline > li:not(.timeline-inverted) {
                padding-right: 50px;
            }
            .timeline > li.timeline-inverted {
                padding-left: 50px;
            }
            .timeline.w-icons > li:not(.timeline-inverted) {
                padding-right: 85px;
            }
            .timeline.w-icons > li.timeline-inverted {
                padding-left: 85px;
            }
            .timeline > li > .timeline-badge {
                color: #fff;
                background: #dddfe6;
                width: 25px;
                height: 25px;
                line-height: 15px !important;
                position: absolute;
                top: 20px;
                left: 50%;
                margin-left: -10px;
                z-index: 100;
                border: 5px solid #fff;
                border-radius: 50%;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
            }
            .timeline.w-icons > li > .timeline-badge {
                color: #fff;
                background: #5d3997;
                width: 60px;
                height: 60px;
                line-height: 65px !important;
                position: absolute;
                top: 20px;
                left: 50%;
                margin-left: -30px;
                z-index: 100;
                border: 0;
                border-radius: 50%;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
            }
            .timeline.w-icons > li > .timeline-badge .material-icons {
                line-height: 60px !important;
            }
            .timeline > li.timeline-inverted > .timeline-badge {
                top: 0;
            }
            .timeline > li.timeline-inverted > .timeline-panel {
                float: right;
            }
            ul.timeline {
                margin-bottom: 0;
            }
 
        }
    }

</style>
