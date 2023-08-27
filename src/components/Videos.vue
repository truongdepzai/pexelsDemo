<script>
import axios from "axios";
    export default{
  data () {
    return {
        dataPhotos:[],
            isShow: false,
            id: Number,
            isLike: false,
            isMark:false,
            id2:Number,
    }
  },

        methods:{
            getPhotos(){
            axios.get('https://api.pexels.com/v1/curated?page=3&per_page=42',{
            headers:{
                'Authorization':'D55xSJC4kly5uEQZj2GNfpg6spG4VQoIoxG343uiX21msiVLqi7YfuNd'
            }
            }).then((response) =>{
            this.dataPhotos = response.data.photos;

            })
        },
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

        },
        created(){
            // this.getVideos
            this.getPhotos()
        }
    }
</script>

<template>
  <div class="photo">
        <p class="font-bold text-[25px] py-5 ">Free Stock Videos</p>
    <div class="grid grid-cols-3 gap-4  grid-flow-row-dense	h-max  auto-rows-auto ">
            <div class="relative flex " v-for="photo in dataPhotos" :key="photo.id" @mouseover="getID(photo.id)" @mouseleave="getID(0)">
               <img class="mb-4 w-full h-full rounded-2xl" :src="photo.src?.medium" alt=""  >
                <RouterLink :to='`/Details/${photo.id}`'  class=" absolute hover:cursor-pointer opacity-0  hover:opacity-100 duration-500 w-full h-full  hover:backdrop-brightness-[70%] rounded-2xl" >
                </RouterLink>

                <div class=" hover:cursor-pointer opacity-0  duration-500" :class="{'opacity-100' : photo.id ===  id, 'opacity-0': id === 0 }">
                    <font-awesome-icon @click="Mark(photo.id)" :class="{'text-yellow-500' : isMark & photo.id == id2  ,'hover:text-yellow-500' : isMark & photo.id == id2}" class="absolute hover:duration-500 p-3 hover:animate-bounce m-5 bg-white rounded-xl right-0 hover:bg-black hover:text-white hover:cursor-pointer" icon="fa-solid fa-bookmark"></font-awesome-icon>
                    <font-awesome-icon @click="Like(photo.id)" :class="{'text-rose-500' : isLike & photo.id == id2 ,'hover:text-red-500' : isLike & photo.id == id2}"  class="absolute hover:duration-500 hover:animate-bounce p-3 m-5 bg-white rounded-xl right-11 hover:bg-black hover:text-white hover:cursor-pointer " icon="fa-solid fa-heart"></font-awesome-icon>
                    <div class="flex gap-4 items-center absolute p-3 m-5 rounded-xl left-0 bottom-5  hover:cursor-pointer ">
                        <a :href="photo.photographer_url">
                            <img :src="photo.src?.small" class="rounded-full h-[40px] w-[40px]" alt="">
                            <p class="font-bold text-white text-[20px]">{{ photo.photographer}}</p>
                        </a>
                    </div>
                    <font-awesome-icon class="absolute hover:duration-500 hover:animate-bounce p-3 m-5 bg-white rounded-xl right-0 bottom-5 hover:bg-black hover:text-white hover:cursor-pointer " icon="fa-solid fa-download"><a href="https://www.youtube.com/"></a></font-awesome-icon>
                
                </div>

            </div>

    </div>
</div>
    <!-- <video class="w-[500px] rounded-xl" v-for="video in dataVideos" :key="video.id" >
         <source src="https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
    </video> -->

</template>