<script >
    import axios from "axios";
    import Photos from "./Photos.vue";
    import Videos from "./Videos.vue";
    import Ranking from "./Ranking.vue"
    import Challenge from "./Challenge.vue"

export default{


    data() {
        return {
            dataPhotos:[],
            isShow: false,
            id: Number,
            isLike: false,
            isMark:false,
            id2:Number,
            photos: false,
            videos: false,
            ranking: false,
            challenge: false,
            num: 1
    
        }
    },

    created(){
        
       
        
        
    },
  
    methods:{
        getID(id){
            this.id = id
        },
        Like(id){
            this.id2 = id
            this.isLike = !this.isLike;
        },
        Mark(id){
            this.id2 = id
            this.isMark = !this.isMark;
        },

        getMenu(num){
            this.num = num
            if(num == 1){
                this.photos = true;
                this.videos = false;
                this.ranking = false;
                this.challenge = false; 
            };
            if(num == 2){
                this.videos = true;
                this.photos = false;
                this.ranking = false;
                this.challenge = false; 
            };
            if(num == 3){
                this.videos = false;
                this.photos = false
                this.ranking = true;
                this.challenge = false; 
            };
            if(num == 4){
                this.videos = false;
                this.photos = false
                this.ranking = false;
                this.challenge = true; 
            };
            
        }
    },
    components:{
        Photos,
        Videos,
        Ranking,
        Challenge
    }
}

</script>

<template>
    <div class="menu flex gap-2 justify-center mt-5">
        <div @click="getMenu(1)" :class="{'bg-black text-white':num == 1}" class="duration-500 hover:cursor-pointer py-2 px-5 rounded-3xl border hover:bg-black hover:text-white font-semibold">Home</div>
        <div @click="getMenu(2)" :class="{'bg-black text-white':num == 2}" class="duration-500 hover:cursor-pointer py-2 px-5 rounded-3xl border hover:bg-black hover:text-white font-semibold">Videos</div>
        <div @click="getMenu(3)" :class="{'bg-black text-white':num == 3}" class="duration-500 hover:cursor-pointer py-2 px-5 rounded-3xl border hover:bg-black hover:text-white font-semibold">Ranking</div>
        <div @click="getMenu(4)" :class="{'bg-black text-white':num == 4}" class="duration-500 hover:cursor-pointer py-2 px-5 rounded-3xl border hover:bg-black hover:text-white font-semibold">Challenge</div>
    </div>

    <Photos v-if="photos || num == 1"/>
    <Videos v-if="videos"/>
    <Ranking  v-if="ranking"/>
    <Challenge v-if="challenge" />

</template>


