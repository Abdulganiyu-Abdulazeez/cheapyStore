<template>
    <div class="w-full h-full lg:p-[2rem] mdx-[768px]:p-[1rem]">
        <div class="" v-if="details">
            <div class="flex items-center justify-center w-full h-fit py-[2rem] text-[40px] font-bold bg-white">
                <h1 class="text-center w-full">Electronics</h1>
            </div>
            <div class="w-full grid grid-cols-4 gap-[2rem] max-[768px]:grid-cols-2 max-[425px]:grid-cols-1">
                <div class="products w-full h-full" v-for="cloths in store" :key="cloths">
                    <div class="cloth w-full h-[80vh] flex flex-col items-center" v-show="cloths.category === electronics">
                        <div class="w-full h-[60%] bg-white rounded-t-[10px] font-bold gap-[1rem] flex flex-col items-center p-[1rem]">
                            <h1 class="text-[#7FFF00]">Category: {{ cloths.category }}</h1>
                            <img class="w-full h-[35vh]" :src=cloths.image :alt="electronics" @click="detail(cloths)">
                        </div>
                        <div class="info relative p-[1rem] w-full h-[40%] bg-[#7FFF00] text-black  md:text-[20px] text-[15px] font-bold flex flex-cols gap-[2rem] rounded-b-[10px]">
                            <h1 class="text-[16px]">{{ cloths.title }}</h1>
                            <a class="w-fit rounded-[20px] no-underline absolute bottom-[1rem] text-black text-[14px] p-[0.5rem] font-bold bg-white" href="#">${{ cloths.price }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="" v-else>
            <div class="flex flex-col gap-[1rem] rounded-[20px] md:p-[2rem] p-[1rem]">
                <div @click="change()" class="w-fit cursor-pointer px-[0.5rem] py-[0.25rem] flex items-center justify-center bg-white rounded-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"/></svg></div>
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
                            <div class="flex items-center p-[1rem] rounded-[10px] bg-gray-300 gap-[1rem]">
                                <div @click="counting2" class="p-[4px] cursor-pointer flex items-center bg-white text-gray-300 hover:text-black font-bold text-[25px] rounded-[5px]">-</div>
                                <p class="text-[#7FFF00] font-bold text-[24px]">{{ this.amount }}</p>
                                <div @click="counting1" class="p-[4px] cursor-pointer flex items-center bg-white text-gray-300 hover:text-black font-bold text-[25px] rounded-[5px]">+</div>
                            </div>
                            
                            <button @click="notification" class="bg-[#7FFF00] lg:text-[30px] md:text-[20px] text-[15px] text-white font-bold rounded-[20px] md:p-[1rem] p-[0.75rem]">
                                <span class="addToCart">Add to cart</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1.975q-.425 0-.7-.288T1 3q0-.425.288-.713T2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775T15.55 13H8.1L7 15h11.025q.425 0 .7.288T19 16q0 .425-.288.713T18 17H7Z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { defineComponent } from 'vue';
    import cheapy from "../store/store"
    export default defineComponent ({
        data() {
            return {
                electronics:"electronics",
                condition: '',
                store: cheapy().$state.array,
                notify: cheapy().$state.notify,
                details: true,
                title: '',
                description: '',
                category: '',
                price: '',
                image: '',
                amount: 0
            }
        },
        methods: {
            detail(cloths) {
                this.details= false
                this.category= cloths.category
                this.price= cloths.price
                this.description= cloths.description
                this.title= cloths.title
                this.image= cloths.image
            },
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
            params(cloths) {
                this.$router.push({ name: 'electronicsFullDetails', params: {title: cloths.title}})
            },
            change() {
                this.$router.back;
                this.details = true;
            },
            notification() {
                this.notify++
                cheapy().$state.notify = this.notify
                console.log(this.notify)
                return this.notify
            }
        }
    })
</script>