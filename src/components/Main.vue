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
        // getPhotos(){
        //     axios.get('https://api.pexels.com/v1/curated?page=2&per_page=42',{
        //     headers:{
        //         'Authorization':'D55xSJC4kly5uEQZj2GNfpg6spG4VQoIoxG343uiX21msiVLqi7YfuNd'
        //     }
        //     }).then((response) =>{
        //     this.dataPhotos = response.data.photos;
            
        //     })
        // },
        // getVideos(){
        //     axios.get('https://api.pexels.com/videos/search?query=nature&per_page=1',{
        //     headers:{
        //         'Authorization':'D55xSJC4kly5uEQZj2GNfpg6spG4VQoIoxG343uiX21msiVLqi7YfuNd'
        //     }
        //     }).then((response) =>{
        //     this.dataPhotos = response.data.videos;
        //     this.onclick = !this.onclick
        //     })
        // }
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
        <div @click="getMenu(1)" :class="{'bg-black text-white':num == 1}" class="hover:cursor-pointer py-2 px-5 rounded-3xl border hover:bg-black hover:text-white font-semibold">Home</div>
        <div @click="getMenu(2)" :class="{'bg-black text-white':num == 2}" class="hover:cursor-pointer py-2 px-5 rounded-3xl border hover:bg-black hover:text-white font-semibold">Videos</div>
        <div @click="getMenu(3)" :class="{'bg-black text-white':num == 3}" class="hover:cursor-pointer py-2 px-5 rounded-3xl border hover:bg-black hover:text-white font-semibold">Ranking</div>
        <div @click="getMenu(4)" :class="{'bg-black text-white':num == 4}" class="hover:cursor-pointer py-2 px-5 rounded-3xl border hover:bg-black hover:text-white font-semibold">Challenge</div>
    </div>

    <Photos v-if="photos || num == 1"/>
    <Videos v-if="videos"/>
    <Ranking  v-if="ranking"/>
    <Challenge v-if="challenge" />

    <!-- <div class="photo">
        <p class="font-bold text-[25px] py-5 ">Free Stock Photos</p>
    <div class="grid grid-cols-3 gap-4  grid-flow-row-dense	h-max  auto-rows-auto ">
            <div class="relative flex " v-for="photo in dataPhotos" :key="photo.id" @mouseover="getID(photo.id)" @mouseleave="getID(0)">
               <img class="mb-4 w-full h-full rounded-2xl" :src="photo.src.medium" alt=""  >
                <RouterLink :to='`/Details/${photo.id}`'  class=" absolute hover:cursor-pointer opacity-0  hover:opacity-100 duration-500 w-full h-full  hover:backdrop-brightness-[70%] rounded-2xl" >
                </RouterLink>

                <div class=" hover:cursor-pointer opacity-0  duration-500" :class="{'opacity-100' : photo.id ===  id, 'opacity-0': id === 0 }">
                    <font-awesome-icon @click="Mark(photo.id)" :class="{'text-yellow-500' : isMark & photo.id == id2  ,'hover:text-yellow-500' : isMark & photo.id == id2}" class="absolute hover:duration-500 p-3 hover:animate-bounce m-5 bg-white rounded-xl right-0 hover:bg-black hover:text-white hover:cursor-pointer" icon="fa-solid fa-bookmark"></font-awesome-icon>
                    <font-awesome-icon @click="Like(photo.id)" :class="{'text-rose-500' : isLike & photo.id == id2 ,'hover:text-red-500' : isLike & photo.id == id2}"  class="absolute hover:duration-500 hover:animate-bounce p-3 m-5 bg-white rounded-xl right-11 hover:bg-black hover:text-white hover:cursor-pointer " icon="fa-solid fa-heart"></font-awesome-icon>
                    <div class="flex gap-4 items-center absolute p-3 m-5 rounded-xl left-0 bottom-5  hover:cursor-pointer ">
                        <a :href="photo.photographer_url">
                            <img :src="photo.src.small" class="rounded-full h-[40px] w-[40px]" alt="">
                            <p class="font-bold text-white text-[20px]">{{ photo.photographer}}</p>
                        </a>
                    </div>
                    <font-awesome-icon class="absolute hover:duration-500 hover:animate-bounce p-3 m-5 bg-white rounded-xl right-0 bottom-5 hover:bg-black hover:text-white hover:cursor-pointer " icon="fa-solid fa-download"><a href="https://www.youtube.com/"></a></font-awesome-icon>
                
                </div>

            </div>

    </div>
    </div> -->
</template>

<style>
    .isShow{
        opacity: 100 ;
    }
</style>
