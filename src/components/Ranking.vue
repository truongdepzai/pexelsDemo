<script>
import axios from "axios";
export default{
    data(){
        return{
            dataRanking:[]
        }
    },
    methods:{
        getRanking(){
            axios.get('https://api.pexels.com/v1/curated?page=2&per_page=42',{
            headers:{
                'Authorization':'D55xSJC4kly5uEQZj2GNfpg6spG4VQoIoxG343uiX21msiVLqi7YfuNd'
            }
            }).then((response) =>{
            this.dataRanking = response.data.photos;

            })
        },
    },
    created(){
        this.getRanking()
    }
}


</script>

<template>
    <div class=" flex gap-2 w-full">
        <div class="py-2 px-5 rounded-full border border-black">30 Ngày qua</div>
        <div class="py-2 px-5 rounded-full border border-black">Từ trước đến nay</div>
    </div>
    <div class="grid grid-cols-7 gap-4">
        <div class="left-content col-span-3 block">
            <div class="w-full flex items-center gap-4 py-2 m-5" v-for="photo,index in dataRanking" :key="index">
                <p class="font-semibold italic text-[50px] mr-5">{{ index +1 }}</p>
                <img class="rounded-full h-[80px] w-[80px]" :src="photo.src?.small" alt="">
                <p class=" text-[30px]">{{ photo.photographer }}</p>
            </div>
        </div>
        <div class="right-content col-start-4 col-span-4">
            <div class="grid grid-cols-4 gap-4">
                <div class="w-full " v-for="photo in dataRanking">
                    <router-link :to="`/Details/${photo.id}`"><img class="w-full rounded-xl h-full" :src="photo.src?.small" alt=""></router-link>
                </div>
            </div>
        </div>
    </div>
</template>