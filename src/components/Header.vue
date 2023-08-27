<script >
    export default{
        data(){
            return{
                isHover: false,

            }
        }
    }

</script>

<template>
    <div class="flex w-full justify-between h-[50px] mt-5 items-center">
        <div class="content-left flex gap-4 items-center">
            <img class="rounded-lg h-[50px]" src="data:image/png;base64,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" alt="">
            <p class="items-center text-white font-bold text-[30px]">Pexels</p>
            
        </div>

    <div class="content-right flex end gap-4 items-center ">
        <div class="block" @click="isHover = !isHover">
            <p class=" text-white font-bold text-[18px] hover:text-black hover:cursor-pointer"> Explore <font-awesome-icon icon="fa-solid fa-caret-down" /> </p>
            <div class="sub-menu bg-white absolute  rounded-xl duration-700  transition"   v-if="isHover">
                <p class="hover:cursor-pointer hover:bg-[#ddd] px-5 py-2 rounded-xl">Videos</p>
                <p class="hover:cursor-pointer hover:bg-[#ddd] px-5 py-2 rounded-xl">Photos</p>
                <p class="hover:cursor-pointer hover:bg-[#ddd] px-5 py-2 rounded-xl">Trending</p>
            </div>
        </div>
        <p class=" text-white font-bold text-[18px] hover:text-black hover:cursor-pointer">License</p>
        <font-awesome-icon icon="fa-solid fa-bell " class="hover:cursor-pointer hover:text-black text-white animate-bounce hover:animate-none "/>
        <img class="rounded-2xl hover:cursor-pointer" src="https://images.pexels.com/users/avatars/530121465/omenx-gaming-922.png?auto=compress&fit=crop&h=30&w=30&dpr=1" alt="">
        <button class=" px-5 py-3 rounded-lg bg-white hover:bg-black hover:text-white font-bold hover:duration-500">Upload</button>

    </div>
    </div>

</template>
