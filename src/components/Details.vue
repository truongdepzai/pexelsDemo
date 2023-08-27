<script>
import Main from "./Main.vue";
import axios from "axios";
export default {
  components: {
    Main
  },
  
  data(){
    return{
      id: this.$route.params.id,
      dataPhotos:[],
      isLike: false,
      isMark: false

    }
  },
  created(){
    this.getPhotos();
    
        
    },
    mounted(){
  
    },
  
    methods:{
      getId(){
         
    
      },
      async getPhotos(){
        await axios.get(`https://api.pexels.com/v1/photos/${this.id}`,{
            headers:{
                'Authorization':'D55xSJC4kly5uEQZj2GNfpg6spG4VQoIoxG343uiX21msiVLqi7YfuNd'
            }
        }).then((response) =>{
            this.dataPhotos = response.data
            console.log(this.dataPhotos)
        },{
            
        })
      },
      Like(){
        this.isLike = !this.isLike;
      },
      Mark(){
        this.isMark = !this.isMark;
      }
    }
};
</script>
<template>
  <!-- <div
    class="flex gap-4 items-center absolute p-3 m-5 rounded-xl left-0 bottom-5 hover:cursor-pointer"
  >
    <img :src="photo.src.small" class="rounded-full h-[40px] w-[40px]" alt="" />
    <p class="font-bold text-white text-[20px]">{{ photo.photographer }}</p>
  </div> -->
  <div class="flex items-center w-full justify-between bg-white ">
    <div class="left-0 flex gap-4 items-center m-5">
      <img :src="dataPhotos.src?.small" class="rounded-full h-[40px] w-[40px]" alt="" />
      <a :href="dataPhotos.photographer_url"><p class="font-bold text-black text-[20px]">{{dataPhotos.photographer}}</p></a>
    </div>
    <div class="right-0 flex gap-2 ">
      <button @click="Mark()" :class="{'bg-yellow-200':isMark}" class="flex duration-500 items-center gap-2 border border-black rounded-lg hover:cursor-pointer hover:bg-black hover:text-white font-semibold py-2 px-5">
        <font-awesome-icon :class="{'text-yellow-500' : isMark,'hover:text-yellow-500' : isMark}" class="" icon="fa-solid fa-bookmark"></font-awesome-icon>
        Colect
      </button>
      <button @click="Like()" :class="{'bg-rose-200':isLike }" class="flex duration-500 items-center gap-2 border border-black rounded-lg hover:cursor-pointer hover:bg-black hover:text-white font-semibold py-2 px-5">
        <font-awesome-icon :class="{'text-rose-500' : isLike,'hover:text-rose-500' : isLike}" class=" " icon="fa-solid fa-heart"></font-awesome-icon>
        Like
      </button>
      <button class="flex duration-500 items-center gap-2 border border-black rounded-lg hover:cursor-pointer hover:bg-black hover:text-white font-semibold py-2 px-5">
        <img class="h-[30px] rounded-full" src="data:image/jpeg;base64,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" alt="">
        
        <a href="https://www.canva.com/content-partner/?utm_medium=acquisitions&utm_source=pexels&utm_campaign=predownload%2520button&utm_content=edit%2520in%2520canva&external-id=18020255&image-url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F18020255%2Fpexels-photo-18020255.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D8000%26h%3D8000%26fit%3Dmax">
          Edit in Canva
        </a>
      </button>
      <button class="bg-green-500 duration-500 rounded-lg hover:cursor-pointer hover:bg-green-400 text-white font-semibold py-2 px-5">
        Free Download
        <font-awesome-icon icon="fa-solid fa-caret-down" />
      </button>

    </div>
  </div>
  <div class="flex items-center justify-center">
    <img
      class="rounded-2xl m-5"
      :src="dataPhotos.src?.portrait"
      alt=""
    />
  </div>
  <Main />
</template>
