<template>
    <div class="flex flex-col gap-[1rem] rounded-[20px] md:p-[2rem] p-[1rem]">
                <div @click="$router.back" class="w-fit px-[0.5rem] py-[0.25rem] flex items-center justify-center bg-white rounded-[5px] cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"/></svg></div>
                <div class="w-full h-fit font-[900] p-[2rem] rounded-[10px] bg-white text-center lg:text-[35px] md:text-[20px] text-[15px]">{{ title }}</div>
                <div class="flex gap-[2rem] md:flex-row flex-col items-center bg-white w-full p-[2rem] rounded-[20px]">
                    <img :src="image" class="lg:w-[50%] lg:h-full md:w-[60%] md:h-[80vh] w-full h-[40vh]" alt="">
                    <div class="flex flex-col lg:gap-[3rem] md:gap-[2rrem] gap-[1rem] md:items-start items-center">
                        <div class="border-b-[2px] border-gray-300 font-bold text-[#7FFF00] lg:text-[30px] md:text-[22px] text-[15px]">Product Details</div>
                        <div class="text-black font-bold lg:text-xl md:text-[20px] text-[15px] md:text-start text-center">Title: {{ title }}</div>
                        <div class="text-black font-bold lg:text-xl md:text-[20px] text-[15px] md:text-start text-center">Category: {{ category }}</div>
                        <div class="text-black font-bold lg:text-xl md:text-[20px] text-[15px] md:text-start text-center">Description: {{ description }}</div>
                        <h1 class="text-[#7FFF00] font-bold text-[45px]">${{ price }}</h1>
                        <div class="flex items-center gap-[2rem]">
                            <div class="flex items-center p-[1rem] rounded-[10px] bg-gray-300">
                                <div @click="counting2" class="p-[8px] flex items-center bg-white text-gray-500 hover:text-black">-</div>
                                <p class="text-[#7FFF00] font-bold text-[24px]">{{ this.amount }}</p>
                                <div @click="counting1" class="p-[8px] flex items-center bg-white text-gray-500 hover:text-black">+</div>
                            </div>
                            <button class="bg-[#7FFF00] lg:text-[30px] md:text-[20px] text-[15px] text-white font-bold rounded-[20px] md:p-[1rem] p-[0.75rem]">Add to cart</button>
                        </div>
                        
                    </div>
                </div>
            </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import cheapy from "../store/store"
    export default defineComponent({
        data() {
            return {
                fate: true,
                title: cheapy().$state.title,
                description: cheapy().$state.description,
                category: cheapy().$state.categorye,
                price: cheapy().$state.price,
                image: cheapy().$state.image,
                amount: 0,

            }
        },
        methods: {
            counting1() {
                if (this.amount == 0 || this.amount > 0  ) {
                    this.amount++
                }
            },
            counting2() {
                if (this.amount > 0  ) {
                    this.amount--
                }
                else {
                    this.amount = 0
                }
            },
        }
    })
</script>