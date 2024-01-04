<script>
    import { defineComponent } from 'vue';
    import cheapy from "../store/store"
    export default defineComponent ({
        data() {
            return {
                women:"women's clothing",
                condition: '',
                store: cheapy().$state.array,
                details: true,
                title: '',
                description: '',
                category: '',
                price: '',
                image: '',
                individual: '',
                amount:0
            }
        },
        methods: {
            mens() {
                this.men = "men's clothing"
            },
            women() {
                this.condition= true,
                this.men= "women's clothing"
            },
            detail(cloths) {
                this.details= false
                this.category= cloths.category
                this.price= cloths.price
                this.description= cloths.description
                this.title= cloths.title
                this.image= cloths.image
                this.individual=cloths.id
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
                this.$router.push({ name: 'womensClothingFullDetails', params: {title: cloths.title}})
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

<template>
    <div class="w-full h-full p-[2rem]">
        <div class="" v-if="details">
            <div class="justify-between font-bold flex items-center text-center bg-white text-[40px] w-full h-fit py-[2rem] px-[5rem] max-[768px]:gap-[1rem] max-[768px]:flex-col max-[768px]:p-[1rem]">
                <h1>Clothing</h1>
                <div class="flex items-center text-[15px] gap-[2rem] max-[768px]:gap-[1rem] max-[768px]:flex-col">
                    <!-- <a @click="mens" href="#" class="w-full md:w-fit px-[1rem] py-[0.51rem] max-[768px]:p-[0.5rem] text-[#7FFF00] border-[2px] border-solid border-[#7FFF00] rounded-[10px]">Men's Clothing</a>
                    <a @click="women" href="#" class="w-full md:w-fit px-[1rem] py-[0.51rem] max-[768px]:p-[0.5rem] text-[#7FFF00] border-[2px] border-solid border-[#7FFF00] rounded-[10px]">Women's Clothing</a> -->
                    <router-link to="/clothing/men"><a href="#" class="w-full md:w-fit px-[1rem] py-[0.51rem] max-[768px]:p-[0.5rem] text-[#7FFF00] border-[2px] border-solid border-[#7FFF00] rounded-[10px]">Men's Clothing</a></router-link>
                    <router-link to="/clothing/women"><a href="#" class="w-full md:w-fit px-[1rem] py-[0.51rem] max-[768px]:p-[0.5rem] text-[#7FFF00] border-[2px] border-solid border-[#7FFF00] rounded-[10px]">Women's Clothing</a></router-link>
                </div>
            </div>
            <div class="grid grid-cols-4 lg:gap-[3rem] md:gap-[2rem] gap-[1rem] max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 lg:px-[3rem] md:px-[2rem] px-[1rem] py-[1rem]">
                <div class="w-full h-full" v-for="cloths in store" :key="cloths">
                    <div @click="params(cloths)" class="w-full h-[80vh] flex flex-col items-center" v-show="cloths.category === women">
                        <div class="w-full h-[60%] bg-white rounded-t-[10px] font-bold gap-[1rem] flex flex-col items-center p-[1rem]">
                            <h1 class="text-[#7FFF00]">Category: {{ cloths.category }}</h1>
                            <img class="w-full h-[35vh]" :src=cloths.image :alt="men" @click="detail(cloths)">
                        </div>
                        <div class="info relative p-[1rem] w-full h-[40%] bg-[#7FFF00] text-black md:text-[20px] text-[15px] font-[900] flex flex-col gap-[2rem] gap-[2rem] ">
                            <h1>{{ cloths.title }}</h1>
                            <a href="#">${{ cloths.price }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="" v-else>
            <div class="flex flex-col gap-[1rem] rounded-[20px] md:p-[2rem] p-[1rem]">
                <div @click="change()" class="w-fit px-[0.5rem] py-[0.25rem] flex items-center justify-center bg-white rounded-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"/></svg></div>
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

<style>
    .info {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .info a {
        border-radius: 20px;
        width: fit-content;
        height: fit-content;
        text-decoration: none;
        margin-top: 1rem;
        padding: 0.5rem;
        color: black;
        background-color: white;
        font-size: 14px;
        font-weight: 900;
        position: absolute;
        bottom: 1rem;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    .clothing a {
        padding: 0.5rem 1rem;
        border-radius: 10px;
        color: chartreuse;
        border: 2px solid chartreuse;
    }
    .clothing a:hover {
        background-color: chartreuse;
        color: white;
    }
    .addToCart {
        display: block;
    }
    button svg {
        display: none;
    }
    @media (max-width: 768px) {
        .addToCart{
            display: none;
        }
        button svg {
            display: block;
        }
    }
</style>
