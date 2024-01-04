<template>
<div class="bg-black w-[300vw] h-screen banner relative">
    <div class="w-[300vw] h-fit flex items-center">
        <div class="relative w-[100%] h-screen">
            <div class="w-[100%] h-screen bg-[url('../src/assets/image/cloths3.jpg')] opacity-20 w-[100%] h-screen bg-no-repeat bg-cover absolute"></div>
            <div class="md:w-[60%] w-[100%] md:text-start mx-auto md:p-[2rem] p-[1rem] md:mx-0 text-center m-[2rem] md:mt-[15rem]">
                <h1 class="font-[700] lg:text-[60px] md:text-[50px] text-[30px] text-[#7FFF00]">AzedStore is the solution</h1>
                <p class="font-bold md:text-xl text-[14px] text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, dolor voluptatum repellat distinctio, esse explicabo eaque, ipsa laboriosam blanditiis totam neque. Corporis, itaque! Vero nulla dolore ab, nobis veritatis corrupti.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et laudantium magni libero dolorem voluptatibus commodi beatae voluptas, est amet quidem praesentium reprehenderit ipsam maiores cupiditate, exercitationem odio. Quas, numquam fuga!
                </p>
            </div>
        </div>
        <div class="relative w-[100%] h-screen">
            <div class="w-[100%] h-screen bg-[url('../src/assets/image/elctronics1.jpg')] opacity-20 w-[100%] h-screen bg-no-repeat bg-cover absolute"></div>
            <div class="md:w-[60%] w-[100%] md:text-start mx-auto md:p-[2rem] p-[1rem] md:mx-0 text-center m-[2rem] md:mt-[15rem]">
                <h1 class="font-[700] lg:text-[60px] md:text-[50px] text-[30px] text-[#7FFF00]">AzedStore is the solution</h1>
                <p class="font-bold md:text-xl text-[14px] text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, dolor voluptatum repellat distinctio, esse explicabo eaque, ipsa laboriosam blanditiis totam neque. Corporis, itaque! Vero nulla dolore ab, nobis veritatis corrupti.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et laudantium magni libero dolorem voluptatibus commodi beatae voluptas, est amet quidem praesentium reprehenderit ipsam maiores cupiditate, exercitationem odio. Quas, numquam fuga!
                </p>
            </div>
        </div>
        <div class="relative w-[100%] h-screen">
            <div class="w-[100%] h-screen bg-[url('../src/assets/image/cloth2.jpg')] opacity-20 w-[100%] h-screen bg-no-repeat bg-cover absolute"></div>
            <div class="md:w-[60%] w-[100%] md:text-start mx-auto md:p-[2rem] p-[1rem] md:mx-0 text-center m-[2rem] md:mt-[15rem]">
                <h1 class="font-[700] lg:text-[60px] md:text-[50px] text-[30px] text-[#7FFF00]">AzedStore is the solution</h1>
                <p class="font-bold md:text-xl text-[14px] text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, dolor voluptatum repellat distinctio, esse explicabo eaque, ipsa laboriosam blanditiis totam neque. Corporis, itaque! Vero nulla dolore ab, nobis veritatis corrupti.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et laudantium magni libero dolorem voluptatibus commodi beatae voluptas, est amet quidem praesentium reprehenderit ipsam maiores cupiditate, exercitationem odio. Quas, numquam fuga!
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<style>
    .banner {
        animation-name: anime;
        animation-delay: 2s;
        animation-duration: 20s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
    @keyframes anime {
        0% {
            top: 0;
            left: 0vw;
        }
        50% {
            top: 0;
            left: -100vw;
        }
        100% {
            top: 0;
            left: -200vw;
        }
    }
</style>