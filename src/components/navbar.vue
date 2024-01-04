<template>
    <nav class="w-full p-1rem">
      <!-- <div class="logo" @click="$emit('logo')">
        <a href="#">
          <img src="../assets/logo.svg" alt="">
          <h1>ite</h1>
        </a>
      </div> -->
      <router-link to="/">
        <div class="logo">
          <a href="#">
            <img class="rounded-[50%]" src="../assets/image/logo.png" alt="">
            <h1>Store</h1>
          </a>
        </div>
      </router-link>
      <div class="flex items-center md:gap-[2rem] gap-[8px]">
        <div class="links md:flex hidden bg-[#7FFF00] max-[768px]:text-16px max-[768px]:gap-[1rem] absolute top-[7rem] z-20 md:static p-[2rem] md:p-0 flex-col md:flex-row w-full md:w-fit transition-left duration-1000" :class=" !menu ? 'left-0' : 'left-[-700px]'" @click="back">
          <!-- <a @click="$emit('cloth')" href="#" class="w-full">CLOTHING</a>
          <a @click="$emit('jewelery')" href="#" class="w-full">JEWELERY</a>
          <a @click="$emit('electronic')" href="#" class="w-full">ELECTRONICS</a> -->
          <router-link to="/clothing/men"><p href="#" class="w-full">CLOTHING</p></router-link>
          <router-link to="/jewelery"><p href="#" class="w-full">JEWELERY</p></router-link>
          <router-link to="/electronics"><p href="#" class="w-full">ELECTRONICS</p></router-link>
        </div>
        <a class="relative">
          <!-- <svg class="w-[4rem] h-[3rem] hover:cursor-pointer" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 30 30" version="1.1" id="svg822" inkscape:version="0.92.4 (f8dce91, 2019-08-02)" sodipodi:docname="shopping-cart.svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"> <inkscape:path-effect effect="copy_rotate" starting_point="15,304.0625" origin="14,304.0625" id="path-effect963" is_visible="true" copies_to_360="true" fuse_paths="false" starting_angle="0" rotation_angle="90" num_copies="21"></inkscape:path-effect> <inkscape:path-effect only_selected="false" apply_with_weight="true" apply_no_weight="true" helper_size="0" steps="2" weight="33.333333" is_visible="true" id="path-effect1025" effect="bspline"></inkscape:path-effect> <inkscape:path-effect only_selected="false" apply_with_weight="true" apply_no_weight="true" helper_size="0" steps="2" weight="33.333333" is_visible="true" id="path-effect1021" effect="bspline"></inkscape:path-effect> </defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="17.833333" inkscape:cx="15" inkscape:cy="15" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="713" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" showguides="false" inkscape:guide-bbox="true"> <sodipodi:guide position="21.126168,22.794393" orientation="1,0" id="guide1575" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="22.682243,23.285047" orientation="1,0" id="guide1635" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="22.682243,7.6455921" orientation="0,1" id="guide1639" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="18.859863,18.859863" orientation="1,0" id="guide1242" inkscape:locked="false"></sodipodi:guide> <inkscape:grid type="xygrid" id="grid1103"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title> </dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <path style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 4.9882812 5 L 4.9882812 7 L 6.4042969 7 L 10.429688 14.904297 L 9.0996094 17.664062 C 8.6262975 18.646723 9.8975785 20 10.988281 20 L 22.988281 20 L 22.988281 18 L 10.988281 18 L 11.927734 16 L 20.488281 16 C 21.042281 16 21.234967 15.4927 21.488281 15 L 24.955078 8.2578125 C 25.208392 7.7651225 24.542281 7 23.988281 7 L 8.6503906 7 L 7.6328125 5 L 5.9882812 5 L 5.3867188 5 L 4.9882812 5 z M 10.988281 21 A 2 2 0 0 0 8.9882812 23 A 2 2 0 0 0 10.988281 25 A 2 2 0 0 0 12.988281 23 A 2 2 0 0 0 10.988281 21 z M 20.988281 21 A 2 2 0 0 0 18.988281 23 A 2 2 0 0 0 20.988281 25 A 2 2 0 0 0 22.988281 23 A 2 2 0 0 0 20.988281 21 z " transform="translate(0,289.0625)" id="path824"></path> </g> </g></svg> -->
          <div v-if="notify > 0" class="cart-num absolute top-0 right-0 bg-red-600 text-white p-[2px] rounded-[50%] w-[16px] h-[16px] flex items-center justify-center text-[10px]">{{ notify }}</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1.975q-.425 0-.7-.288T1 3q0-.425.288-.713T2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775T15.55 13H8.1L7 15h11.025q.425 0 .7.288T19 16q0 .425-.288.713T18 17H7Z"/></svg>
        </a>
        <div class="md:hidden flex items-center" @click="drop">
            <img v-if="menu" src="../assets/image/icon-hamburger.svg" alt="">
            <img v-else src="../assets/image/icon-close.svg" alt="">
        </div>
      </div>
    </nav>
</template>

<script>
    import { defineComponent } from 'vue';
    import cheapy from "../store/store"
    export default defineComponent ({
        emits: ['logo', 'cloth', 'jewelery', 'electronic', 'cart'],
        data() {
            return {
                menu: true,
                notify: cheapy().$state.notify,
            }
        },
        methods: {
            drop() {
                this.menu  = !this.menu
            },
            back() {
              this.menu = !this.menu
            }
        }
    })
</script>

<style>
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: chartreuse;
    height: fit-content;
  }
  .logo a, .links {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 900;
    color: #21983d;
  }
  .logo img {
    width: 4rem;
    height: 4rem;
  }
  .logo h1 {
    margin-left:0px;
  }
  .links {
    color: white;
    gap: 1rem;
  }
  img {
    width: 2rem;
    height: 1.3rem;
  }
</style>